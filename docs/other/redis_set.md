# Set 命令

Redis 的 Set 是 String 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。
Redis 中集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。

1. sadd key value [value2] ;往集合中添加元素
2. scard key 获取集合的个数
3. sdiff key [key2]返回两个集合的差集
4. sdiffstore des key [key2] 返回两个集合的差集并返回到 des 集合中
5. sinter key [key2]返回两个集合的交集
6. SINTERSTORE destination key1 [key2] 返回给定所有集合的交集并存储在 destination 中
7. SISMEMBER key member 判断 member 元素是否是集合 key 的成员
8. smembers key 返回集合的元素
9. SMOVE source destination member 将 member 元素从 source 集合移动到 destination 集合
10. SPOP key 移除并返回集合中的一个随机元素
11. SRANDMEMBER key [count]  返回集合中一个或多个随机数
12. SUNION key1 [key2] 返回所有给定集合的并集
13. SUNIONSTORE destination key1 [key2]  所有给定集合的并集存储在 destination 集合中
14. SSCAN key cursor [MATCH pattern][count count] 迭代集合中的元素
