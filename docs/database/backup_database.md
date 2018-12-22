# 备份MYSQL数据库

一开始备份数据只知道使用数据库连接工具导出，然后又用工具导入，速度无比慢，后来知道一些更快速的方法，记录下载……

## 备份过程
1. 解决步骤1 和步骤2中获取表结构和表数据的快速方法。可以直接使用mysqldump 命令：
   - 导出整个数据库结构和数据 ：`mysqldump -h localhost -uroot -p123456 database > dump.sql`。

2. 把1中的两个文件保存到服务器的某个路径下面，比如/bak/mysql/sqls;

3. 查看MySQL的容器长ID，执行的命令`docker inspect mysql `,复制出其中的id。执行`docker ps |grep  mysql`  返回的那个是短ID。真是被自己的智障打败

4. 执行 `docker exec -it mysql bash` ，进入docker 的环境中，穿件一个文件夹，用来放即将要放的sql 文件。比如叫/bak/mysql/sqls

5. 执行exit，退出到linux环境中，执行docker cp  服务器路径 长ID:/目标文件夹 ，在本文中要执行的命令就是： `docker cp /bak/mysql/sqls/dml_bak.sql 长ID:/bak/mysql/sqls/docker_dml_bak.sql`。       

6. 重新进入docker的MySQL，`docker exec -it mysql bash`。

7. 接下来开始真正的备份数据，`mysql -uUserName -pPwd`，先执行use dbName,不然执行的时候可能会报错，然后执行`source /bak/mysql/sqls/docker_dml_bak.sql`。


## mysqldump 命令
- 导出整个数据库结构和数据 ：`mysqldump -h localhost -uroot -p123456 database > dump.sql`

- 导出单个数据表结构和数据：`mysqldump -h localhost -uroot -p123456  database table > dump.sql`

- 导出整个数据库结构（不包含数据）：`mysqldump -h localhost -uroot -p123456  -d database > dump.sql`

- 导出单个数据表结构（不包含数据）：`mysqldump -h localhost -uroot -p123456  -d database table > dump.sql`

- 导出整个数据库结构（只包含数据）：`mysqldump -h localhost -uroot -p123456  -t database > dump.sql`

- 导出单个数据表结构（只包含数据）：`mysqldump -h localhost -uroot -p123456  -t database table > dump.sql`

    关于mysqldump 命令还有两点想补充一下：1、mysqldump 和mysql 命令是一样的，可以直接在控制台操作，这也是自己在备份数据的时候一直报语法错误的原因。2、不建议直接在命令中拼接密码，可以先用-p,按enter之后再输入正式的密码。

## 总结

1. mysqldump 这样有趣的命令，应该早点学会;
2. docker运行的数据库虽然运行起来方便，但是备份的时候确实不方便，当然可以在运行mysql 的时候就把文件挂载处理；
3. [我的csdn](https://blog.csdn.net/gxb2260/article/details/82715507)
   