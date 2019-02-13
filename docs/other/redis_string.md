# String 命令

1. set key value;
2. get key;
3. getrange key start end ;返回 key 中字符串值的子字符,下标从 0 开始
4. getset key value ;返回 oldvalue ,并把这个值设置为 value; 先返回原来的值，然后在把 value 设置进去
5. getbit key offset 字符串值指定偏移量上的位(bit)。 当偏移量 OFFSET 比字符串值的长度大，或者 key 不存在时，返回 0 。
6. mget key1 key2 ;一次返回多个 key 的值
7. setbit key offsit 指定偏移量原来储存的位。
8. setex key seconds value;把 key 的值修改为 value ,有效期设置为 seconds
9. setnx key value ;只有在 key 不存在时设置 key 的值
10. setrange key offeset value; 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始。
11. strlen key  返回 value 的长度
12. mset key value  key2 value2;同时给多对键值对设置值
13. msetnx key value key2 value2 ;同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。
14. psetex key millisseconds value 这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位
15. incr key 将 key 中储存的数字值增一。
16. incrby key increment 将 key 所储存的值加上给定的增量值（increment）
17. incrbyfloat key increment 将 key 所储存的值加上给定的浮点增量值（increment）
18. decr key  将 key 中存储的数字值增以
19. decrby key increment  key 所储存的值减去给定的减量值（decrement）
20. append key value 如果 key 已经存在并且是一个字符串， APPEND 命令将 指定 value 追加到改 key 原来的值（value）的末尾。
