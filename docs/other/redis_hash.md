# Hash 命令

Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。

1. hgetall key :得到这个 hash 表的结构
2. hdel key field :删除 hash 表中的某个文件
3. hexists key field :查看表中是否存在这个字段
4. hget key field : 查看表中字段的值
5. hincrby key field increment: 为哈希表 key 中的指定字段的整数值加上增量 increment
6. hincrbyfloat key field increment:为哈希表 key 中的指定字段的浮点数值加上增量 increment 。
7. hkeys key :获取所有哈希表中的字段
8. hlen key :获取哈希表中字段的数量
9. hmget key field1 field2 ：获取多个字段的值
10. HMSET key field1 value1 [field2 value2 ] 同时将多个 field-value (域-值)对设置到哈希表 key 中。
11. hset key field value :将哈希表 key 中的字段 field 的值设为 value 。
12. hsetnx key field value:只有在字段 field 不存在时，设置哈希表字段的值。
13. HVALS key 获取哈希表中所有值
14. HSCAN key cursor [MATCH pattern][count count]  迭代哈希表中的键值对。
