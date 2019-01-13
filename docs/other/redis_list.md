# List 命令

Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）
一个列表最多可以包含 2<sup>32</sup> - 1 个元素 (4294967295, 每个列表超过 40 亿个元素)。

1. blpop key filed timout 如果列表为空，返回一个 nil 。 否则，返回一个含有两个元素的列表，第一个元素是被弹出元素所属的 key ，第二个元素是被弹出元素的值。移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
2. BRPOP key1 [key2 ] timeout 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
3. BRPOPLPUSH source destination timeout 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
4. lindex key index :返回列表 index 位置的值
5. LINSERT KEY_NAME BEFORE EXISTING_VALUE NEW_VALUE  在某个值的之前或者之后插入 value 值
6. llen key 获取列表长度
7. lpop key 获取列表的第一个元素
8. lpush key filed value 将一个或多个值插入到列表头部
9. lpushx key value 将一个值插入到已存在的列表头部
10. lrange key start end 获取列表指定范围内的元素
11. LREM key count value
    COUNT 的值可以是以下几种：
    count > 0 : 从表头开始向表尾搜索，移除与 VALUE 相等的元素，数量为 COUNT 。count < 0 : 从表尾开始向表头搜索，移除与 VALUE 相等的元素，数量为 COUNT 的绝对值。count = 0 : 移除表中所有与 VALUE 相等的值。

12. lset key index value ;把 index 处元素的值设置为 value;
13. ltrim key start end ;对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除
14. rpop key 获取并删除最后一个元素
15. rpoplpush source destintaion 移除列表的最后一个元素，并将该元素添加到另一个列表并返回
