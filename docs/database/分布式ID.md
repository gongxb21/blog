# Mysql 全局 ID 设计

当数据库采用了分库或者分表之后，之前的自增主键就不能在用了，如何简单高效的解决唯一性问题又成了一个问题？

## UUID

这种方式真的是简单粗暴，直接获取 32 位的 UUID，根本就不会出现重复的情况，但是问题在于， 唯一性是保证了，但是主键是默认会建立索引的，乱序的 UUID 又会导致查询的效率不理想。

### 优点：

- 简单，代码方便。
- 全球唯一，在遇见数据迁移，系统数据合并，或者数据库变更等情况下，可以从容应对。

### 缺点：

- 没有排序，无法保证趋势递增。
- UUID 往往是使用字符串存储，查询的效率比较低。
- 不可读。

## 数据库自增 ID

采用了 MySQL 自增长 ID 的机制（auto_increment + replace into + MyISAM）。一个生成 64 位 ID 方案具体就是这样的：  先创建一个单独的  表

```sql
CREATE TABLE my_uid (
            id bigint(20) unsigned NOT NULL auto_increment,
            stub char(1) NOT NULL default '',
            PRIMARY KEY  (id),
            UNIQUE KEY uid (stub)
    ) ENGINE=MyISAM;

```

如何获取唯一的自增 ID 呢？

```sql
REPLACE INTO my_uid (stub) VALUES ('a');
SELECT LAST_INSERT_ID();
```

- replace<sup>1</sup> 的用法 请看参考

其实这个表还是集群部署的，只需要设置那么的主键自增的步长和起始值不一样，比如 A 服务器从 1 开始，步长为 2；B 服务器从 2 开始，步长也为 2。

关于这个 last_insert_id() ,有几点是需要注意的：

- AUTO_INCREMENT 值的。这个值不能被其它 Connection 对象的影响，即它们产生它们自己的 AUTO_INCREMENT 值。

- LAST_INSERT_ID 是与 table 无关的，如果向表 a 插入数据后，再向表 b 插入数据，LAST_INSERT_ID 返回表 b 中的 Id 值。

- 假如你使用一条 INSERT 语句插入多个行， LAST_INSERT_ID() 只返回插入的第一行数据时产生的值。其原因是这使依靠其它服务器复制同样的 INSERT 语句变得简单

### 优点

- 充分借助数据库的自增 ID 机制，提供高可靠性，生成的 ID 有序。

### 缺点

- 占用两个独立的 MySQL 实例，有些浪费资源，成本较高。

## Snowflake

[Snowflake](https://github.com/twitter/snowflake) twitter 的业务需求。snowflake 系统生成 64 位的 ID。由 3 部分组成：

- 41 位的时间序列（精确到毫秒，41 位的长度可以使用 69 年）
- 10 位的机器标识（10 位的长度最多支持部署 1024 个节点）
- 12 位的计数顺序号（12 位的计数顺序号支持每个节点每毫秒产生 4096 个 ID 序号）
- 最高位是符号位，始终为 0。

snowflake 算法可以根据自身项目的需要进行一定的修改。比如估算未来的数据中心个数，每个数据中心的机器数以及统一毫秒可以能的并发数来调整在算法中所需要的 bit 数。

### 优点：

- 不依赖于数据库，灵活方便，且性能优于数据库。
- ID 按照时间在单机上是递增的。

### 缺点：

- 在单机上是递增的，但是由于涉及到分布式环境，每台机器上的时钟不可能完全同步，也许有时候也会出现不是全局递增的情况。

## 参考

- [美团 LEAF](https://tech.meituan.com/MT_Leaf.html)
- [邱明成的 csdn](https://www.cnblogs.com/qiumingcheng/p/5409491.html)
- [简书](https://www.jianshu.com/p/a0a3aa888a49)
