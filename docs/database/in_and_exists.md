# In 和 Exists

## 两者的区别

mysql 中的 in 语句是把外表和内表作 hash 连接，而 exists 语句是对外表作 loop 循环，每次 loop 循环再对内表进行查询。一直大家都认为 exists 比 in 语句的效率要高，这种说法其实是不准确的。这个是要区分环境的。

## 使用场景

- 如果查询的两个表大小相当，那么用 in 和 exists 差别不大。
- 如果两个表中一个较小，一个是大表，则子查询表大的用 exists，子查询表小的用 in。
- not in 和 not exists 如果查询语句使用了 not in 那么内外表都进行全表扫描，没有用到索引；而 not extsts 的子查询依然能用到表上的索引。所以无论那个表大，用 not exists 都比 not in 要快。
