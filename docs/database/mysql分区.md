# Mysql 分区

分区就是把一个数据表的文件和索引分散存储在不同的物理文件中。
mysql 支持的分区类型包括 Range、List、Hash、Key，其中 Range 比较常用：

- RANGE 分区：基于属于一个给定连续区间的列值，把多行分配给分区。
- LIST 分区：类似于按 RANGE 分区，区别在于 LIST 分区是基于列值匹配一个离散值集合中的某个值来进行选择。
- HASH 分区：基于用户定义的表达式的返回值来进行选择的分区，该表达式使用将要插入到表中的这些行的列值进行计算。这个函数可以包含 MySQL 中有效的、产生非负整数值的任何表达式。
- KEY 分区：类似于按 HASH 分区，区别在于 KEY 分区只支持计算一列或多列，且 MySQL 服务器提供其自身的哈希函数。必须有一列或多列包含整数值。

## 案例

```sql
## 新建分区表
create table t_order(
    id int not null auto_increment,
    total_amount varchar(10),
    primary key(id)
)engine = innodb charset=utf8
partition by range (id)(
    partition order_1 values less than (100),
    partition order_2 values less than (200)
);

## 新增分区，maxvalue 表示最大值，意味着大于200的数据全部会在这个分区
alter table t_order add partition(
    partition order_3 values less than maxvalue
);
## 删除分区
alter  table t_order drop partition user_3;
```

## 分区的限制：

1. 主键或者唯一索引必须包含分区字段，如 primary key (id,username),不过 innoDB 的大组建性能不好。
2. 很多时候，使用分区就不要在使用主键了，否则可能影响性能。
3. 只能通过 int 类型的字段或者返回 int 类型的表达式来分区，通常使用 year 或者 to_days 等函数（mysql 5.6 对限制开始放开了）。
4. 每个表最多 1024 个分区，而且多分区会大量消耗内存。
5. 分区的表不支持外键，相关的逻辑约束需要使用程序来实现。
6. 分区后，可能会造成索引失效，需要验证分区可行性。

## Range 分区

```sql
CREATE TABLE users (
       id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
       usersname VARCHAR(30) NOT NULL DEFAULT '',
       email VARCHAR(30) NOT NULL DEFAULT ''
)
PARTITION BY RANGE (id) (
       PARTITION p0 VALUES LESS THAN (3000000)
       DATA DIRECTORY = '/data0/data'
       INDEX DIRECTORY = '/data0/index',

       PARTITION p1 VALUES LESS THAN (6000000)
       DATA DIRECTORY = '/data1/data'
       INDEX DIRECTORY = '/data1/index',

       PARTITION p2 VALUES LESS THAN (9000000)
       DATA DIRECTORY = '/data2/data'
       INDEX DIRECTORY = '/data2/index',

       PARTITION p3 VALUES LESS THAN MAXVALUE
       DATA DIRECTORY = '/data3/data'
       INDEX DIRECTORY = '/data3/index'
);
```

还可以将这些分区所在的物理磁盘分开完全独立，可以提高磁盘 IO 吞吐量。

## List 分区

– 这种模式允许系统通过 DBA 定义的列表的值所对应的行数据进行分割。例如：DBA 根据用户的类型进行分区。

```sql
CREATE TABLE user (
     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NOT NULL DEFAULT '' ,
     user_type   int not null
)
PARTITION BY LIST (user_type ) (
     PARTITION p0 VALUES IN (0,4,8,12) ,
     PARTITION p1 VALUES IN (1,5,9,13) ,
     PARTITION p2 VALUES IN (2,6,10,14),
     PARTITION p3 VALUES IN (3,7,11,15)
);
```

## Hash 分区

Hash（哈希） – 这中模式允许 DBA 通过对表的一个或多个列的 Hash Key 进行计算，最后通过这个 Hash 码不同数值对应的数据区域进行分区，。例如 DBA 可以建立一个对表主键进行分区的表。

```sql
CREATE TABLE user (
     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(30) NOT NULL DEFAULT '',
     email VARCHAR(30) NOT NULL DEFAULT ''
)
PARTITION BY HASH (id) PARTITIONS 4 (
     PARTITION p0 ,
     PARTITION p1,
     PARTITION p2,
     PARTITION p3
);
```

## Key 分区

Key（键值）,类似上面 Hash 模式的一种延伸，这里的 Hash Key 是 MySQL 系统产生的。

```Sql
CREATE TABLE user (
     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30) NOT NULL DEFAULT '',
     email VARCHAR(30) NOT NULL DEFAULT ''
)
PARTITION BY KEY (id) PARTITIONS 4 (
     PARTITION p0,
     PARTITION p1,
     PARTITION p2,
     PARTITION p3
);
```

## 分区管理

- 删除分区
  `ALERT TABLE users DROP PARTITION p0;`

- 重建分区

  - RANGE 分区重建
    `ALTER TABLE users REORGANIZE PARTITION p0,p1 INTO (PARTITION p0 VALUES LESS THAN (6000000))`;  
    将原来的 p0,p1 分区合并起来，放到新的 p0 分区中。

  - LIST 分区重建
    `ALTER TABLE users REORGANIZE PARTITION p0,p1 INTO (PARTITION p0 VALUES IN(0,1,4,5,8,9,12,13))`;  
    将原来的 p0,p1 分区合并起来，放到新的 p0 分区中。

  - HASH/KEY 分区重建
    `ALTER TABLE users REORGANIZE PARTITION COALESCE PARTITION 2;`  
    用 REORGANIZE 方式重建分区的数量变成 2，在这里数量只能减少不能增加。想要增加可以用 ADD PARTITION 方法。

- 新增分区

  - 新增 RANGE 分区

  `alter table user add partition(partition user_3 values less than maxvalue)`;

  - 新增 LIST 分区
    `ALTER TABLE category ADD PARTITION (PARTITION p4 VALUES IN (16,17,18,19))`;
  - 新增 HASH/KEY 分区
    `ALTER TABLE users ADD PARTITION PARTITIONS 8`;  
    将分区总数扩展到 8 个。

## 参考

- [mysql 的分区和分表](https://www.cnblogs.com/phpshen/p/6198375.html)
