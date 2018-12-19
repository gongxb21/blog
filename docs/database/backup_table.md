# 备份单个表
前几天在备份mysql数据的时候，发现了一个细节问题自己之前没有注意，用本篇文章记录下来。

##  错误过程
- 使用create table my_table_bak as select * from my_table ;可以快速的备份整个数据表的表结构和表数据。一举两得，不是美滋滋？使用这个命令的时候，要求my_table_bak这个表示不存在的。
  
- 备份之后，通过发现了一个问题，虽然有备份表结构和表数据，但是备份之后的表里面是一些属性会丢失，比如主键，和自增长特性等。这个影响就很大了，可能直接导致查询速度变慢。

## 解决办法
 1. 如何补救这个问题？
 - 通过DDL语句把表的主键修改为自增长类型，脚本如下：alter table my_table_bak modify id int(11) auto_increment;

 2. 表备份的正确姿势？
  - 查看要备份的表的建表的语句：show create table my_table;
  - 得到建表的语句之后，把表名修改一下，然后执行该DDL脚本；也可以直接用create table my_table_bak like my_table
  - 使用insert into my_table_bak select * from my_table;
3. 更安全的操作
 - 可以在得到DDL脚本之后，直接保存到文档中；
 - 使用mysql的图形界面，把表中的数据导出为insert语句，这种操作即使把数据库删了也没有影响

4. 更加高效优雅的备份数据库：[快速备份数据库](https://blog.csdn.net/gxb2260/article/details/82715507)