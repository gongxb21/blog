# zset 有序集合

Redis 有序集合和集合一样也是 string 类型元素的集合,且不允许重复的成员。
不同的是每个元素都会关联一个 double 类型的分数。redis 正是通过分数来为集合中的成员进行从小到大的排序。
有序集合的成员是唯一的,但分数(score)却可以重复。
集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。 集合中最大的成员数为 2<sup>32</sup> - 1 (4294967295, 每个集合可存储 40 多亿个成员)。

1. zadd key score1 value1 [score2 value2] 向有序集合添加元素   向有序集合添加一个或多个成员，或者更新已存在成员的分数
2. zcard key 获取有序集合的成员数
3. zcount key min max 计算在有序集合中指定区间分数的成员数
4. zincrby key increment member 有序集合中对指定成员的分数加上增量 increment
5. zinterstore des numberkeys key [key2] 
   Redis Zinterstore 命令计算给定的一个或多个有序集的交集，其中给定 key 的数量必须以 numkeys 参数指定，并将该交集(结果集)储存到 destination 。
   默认情况下，结果集中某个成员的分数值是所有给定集下该成员分数值之和。
6. zlexcount 在计算有序集合中指定字典区间内成员数量   
    zlexcount zset [a [z;//a-z 之间
   zlexcount zset - +；//显示全部
7. zrange key start stop withscores 显示集合
8. zrangebylex key min max 通过字典区间返回有序集合的成员
9. zrangebyscore key min max 通过分数返回有序集合指定区间内的成员
10. zrank key member; 返回 member 元素所在的索引
11. zrem key member;删除元素
12. zremrangebylex key min max :被成功移除的成员的数量，不包括被忽略的成员。
13. ZREMRANGEBYSCORE key min max 移除有序集合中给定的分数区间的所有成员
14. ZREVRANGE key start stop [WITHSCORES]  返回有序集中指定区间内的成员，通过索引，分数从高到底
15. ZREVRANGEBYSCORE key max min [WITHSCORES] 返回有序集中指定分数区间内的成员，分数从高到低排序
16. ZREVRANK key member 返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序

17. ZSCORE key member 返回有序集中，成员的分数值
18. ZUNIONSTORE destination numkeys key [key ...]  计算给定的一个或多个有序集的并集，并存储在新的 key 中
19. ZSCAN key cursor [MATCH pattern][count count]  迭代有序集合中的元素（包括元素成员和元素分值）
