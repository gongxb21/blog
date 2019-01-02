# Replace 的用法

Mysql 提供了 replace into 跟 insert into 的功能一样。不同点在于：

如果发现表中已经有此行数据（根据主键或者唯一索引判断）则先删除此行数据，然后插入新的数据。否则，直接插入新数据。
　　注意：因为要根据主键或者是唯一索引判断是否有重复数据，所以操作的表必须要有主键或者是唯一索引。否则的话，replace into 会直接插入数据。

Mysql replace into 用法有三种，最简单的一种用法就是直接将 "insert" 关键字替换为"replace"就可以啦,前两种形式用的多些。其中 “into” 关键字可以省略，不过最好加上 “into”，这样意思更加直观。另外，对于那些没有给予值的列，MySQL 将自动为这些列赋上默认值。

```sql
replace into tbl_name(col_name, ...) values(...)
replace into tbl_name(col_name, ...) select ...
replace into tbl_name set col_name=value, ...
```
