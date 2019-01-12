Key 命令

1. exists key key 是否存在，1 存在，0 不存在
2. del key 删除 key
3. dump key 序列化 key
4. EXPIRE key seconds 为给定 key 设置过期时间。
5. EXPIREAT key timestamp  EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)
6. PEXPIRE key milliseconds  设置 key 的过期时间以毫秒计。
7. PEXPIREAT key milliseconds-timestamp  设置 key 过期时间的时间戳(unix timestamp) 以毫秒计
8. keys pattern 用于查找所有符合给定模式 pattern 的 key 。。
   特殊的 keys \* 返回所有键
9. MOVE key db  将当前数据库的 key 移动到给定的数据库 db 当中。
10. PERSIST KEY_NAME 命令用于移除给定 key 的过期时间，使得 key 永不过期。
11. PTTL key  以毫秒为单位返回 key 的剩余的过期时间。Time To Live
12. ttl key 以秒为单位返回 key 的剩余过期时间
13. randomkey 从当前数据库随机返回一个 key
14. RENAME key newkey  修改 key 的名称
15. RENAMENX key newkey  仅当 newkey 不存在时，将 key 改名为 newkey 。
16. TYPE key  返回 key 所储存的值的类型。
