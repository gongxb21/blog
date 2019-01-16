# Redis 分布式锁

## 可靠性

首先，为了确保分布式锁可用，我们至少要确保锁的实现同时满足以下四个条件：

- 互斥性。在任意时刻，只有一个客户端能持有锁。
- 不会发生死锁。即使有一个客户端在持有锁的期间崩溃而没有主动解锁，也能保证后续其他客户端能加锁。
- 具有容错性。只要大部分的 Redis 节点正常运行，客户端就可以加锁和解锁。
- 解铃还须系铃人。加锁和解锁必须是同一个客户端，客户端自己不能把别人加的锁给解了。

## Redis 分布式锁

```java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.StringRedisTemplate;
import redis.clients.jedis.Jedis;

import java.util.Collections;

/**
 * @author gongxb
 * @date 2019/1/4
 * @desc
 * @return
 */
public class DistributeLock {
    private static final Long RELEASE_SUCCESS = 1L;
    private static final String LOCK_SUCCESS = "OK";
    private static final String SET_IF_NOT_EXIST = "NX";
    private static final String SET_WITH_EXPIRE_TIME = "EX";
    private static final String RELEASE_LOCK_SCRIPT = "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end";

    @Autowired
    private StringRedisTemplate redisTemplate;

    /**
     * 该加锁方法仅针对单实例 Redis 可实现分布式加锁
     * 对于 Redis 集群则无法使用
     * <p>
     * 支持重复，线程安全
     *
     * @param lockKey  加锁键
     * @param clientId 加锁客户端唯一标识(采用UUID)
     * @param seconds  锁过期时间
     * @return
     */
    public Boolean tryLock(String lockKey, String clientId, long seconds) {
        return redisTemplate.execute((RedisCallback<Boolean>) redisConnection -> {
            Jedis jedis = (Jedis) redisConnection.getNativeConnection();
            String result = jedis.set(lockKey, clientId, SET_IF_NOT_EXIST, SET_WITH_EXPIRE_TIME, seconds);
            if (LOCK_SUCCESS.equals(result)) {
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        });
    }

    /**
     * 与 tryLock 相对应，用作释放锁
     *
     * @param lockKey
     * @param clientId
     * @return
     */
    public Boolean releaseLock(String lockKey, String clientId) {
        return redisTemplate.execute((RedisCallback<Boolean>) redisConnection -> {
            Jedis jedis = (Jedis) redisConnection.getNativeConnection();
            Object result = jedis.eval(RELEASE_LOCK_SCRIPT, Collections.singletonList(lockKey),
                    Collections.singletonList(clientId));
            if (RELEASE_SUCCESS.equals(result)) {
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        });
    }
}

```

上述代码实现，仅对 redis 单实例架构有效，当面对 redis 集群时就无效了。但是一般情况下，我们的 redis 架构多数会做成“主备”模式，然后再通过 redis 哨兵实现主从切换，这种模式下我们的应用服务器直接面向主机，也可看成是单实例，因此上述代码实现也有效。但是当在主机宕机，从机被升级为主机的一瞬间的时候，如果恰好在这一刻，由于 redis 主从复制的异步性，导致从机中数据没有即时同步，那么上述代码依然会无效，导致同一资源有可能会产生两把锁，违背了分布式锁的原则。

## redis 操作的原子性

对 Redis 来说，执行 get、set 以及 eval 等 API，都是一个一个的任务，这些任务都会由 Redis 的线程去负责执行，任务要么执行成功，要么执行失败，这就是 Redis 的命令是原子性的原因。
