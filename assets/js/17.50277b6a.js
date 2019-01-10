(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{215:function(s,l,e){"use strict";e.r(l);var t={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=e(5),d=Object(a.a)(t,function(){var s=this,l=s.$createElement,e=s._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[e("h1",{attrs:{id:"备份mysql数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份mysql数据库","aria-hidden":"true"}},[s._v("#")]),s._v(" 备份MYSQL数据库")]),s._v(" "),e("p",[s._v("一开始备份数据只知道使用数据库连接工具导出，然后又用工具导入，速度无比慢，后来知道一些更快速的方法，记录下载……")]),s._v(" "),e("h2",{attrs:{id:"备份过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份过程","aria-hidden":"true"}},[s._v("#")]),s._v(" 备份过程")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("解决步骤1 和步骤2中获取表结构和表数据的快速方法。可以直接使用mysqldump 命令：")]),s._v(" "),e("ul",[e("li",[s._v("导出整个数据库结构和数据 ："),e("code",[s._v("mysqldump -h localhost -uroot -p123456 database > dump.sql")]),s._v("。")])])]),s._v(" "),e("li",[e("p",[s._v("把1中的两个文件保存到服务器的某个路径下面，比如/bak/mysql/sqls;")])]),s._v(" "),e("li",[e("p",[s._v("查看MySQL的容器长ID，执行的命令"),e("code",[s._v("docker inspect mysql")]),s._v(",\b复制出其中的id。执行"),e("code",[s._v("docker ps |grep  mysql")]),s._v("  返回的那个是短ID。真是被自己的智障打败")])]),s._v(" "),e("li",[e("p",[s._v("执行 "),e("code",[s._v("docker exec -it mysql bash")]),s._v(" ，进入docker 的环境中，穿件一个文件夹，用来放即将要放的sql 文件。比如叫/bak/mysql/sqls")])]),s._v(" "),e("li",[e("p",[s._v("执行exit，退出到linux环境中，执行docker cp  服务器路径 长ID:/目标文件夹 ，在本文中要执行的命令就是： "),e("code",[s._v("docker cp /bak/mysql/sqls/dml_bak.sql 长ID:/bak/mysql/sqls/docker_dml_bak.sql")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("重新进入docker的MySQL，"),e("code",[s._v("docker exec -it mysql bash")]),s._v("。")])]),s._v(" "),e("li",[e("p",[s._v("接下来开始真正的备份数据，"),e("code",[s._v("mysql -uUserName -pPwd")]),s._v("，先执行use dbName,不然执行的时候可能会报错，然后执行"),e("code",[s._v("source /bak/mysql/sqls/docker_dml_bak.sql")]),s._v("。")])])]),s._v(" "),e("h2",{attrs:{id:"mysqldump-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump-命令","aria-hidden":"true"}},[s._v("#")]),s._v(" mysqldump 命令")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("导出整个数据库结构和数据 ："),e("code",[s._v("mysqldump -h localhost -uroot -p123456 database > dump.sql")])])]),s._v(" "),e("li",[e("p",[s._v("导出单个数据表结构和数据："),e("code",[s._v("mysqldump -h localhost -uroot -p123456  database table > dump.sql")])])]),s._v(" "),e("li",[e("p",[s._v("导出整个数据库结构（不包含数据）："),e("code",[s._v("mysqldump -h localhost -uroot -p123456  -d database > dump.sql")])])]),s._v(" "),e("li",[e("p",[s._v("导出单个数据表结构（不包含数据）："),e("code",[s._v("mysqldump -h localhost -uroot -p123456  -d database table > dump.sql")])])]),s._v(" "),e("li",[e("p",[s._v("导出整个数据库结构（只包含数据）："),e("code",[s._v("mysqldump -h localhost -uroot -p123456  -t database > dump.sql")])])]),s._v(" "),e("li",[e("p",[s._v("导出单个数据表结构（只包含数据）："),e("code",[s._v("mysqldump -h localhost -uroot -p123456  -t database table > dump.sql")])])])]),s._v(" "),e("p",[s._v("关于mysqldump 命令还有两点想补充一下：1、mysqldump 和mysql 命令是一样的，可以直接在控制台操作，这也是自己在备份数据的时候一直报语法错误的原因。2、不建议直接在命令中拼接密码，可以先用-p,按enter之后再输入正式的密码。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("ol",[e("li",[s._v("mysqldump 这样\b有趣的命令，\b应该早点学会;")]),s._v(" "),e("li",[s._v("docker运行的数据库虽然运行起来方便，\b但是备份的时候确实不方便，当然可以在运行mysql 的时候就把文件挂载处理；")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/gxb2260/article/details/82715507",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的csdn"),e("OutboundLink")],1)])])])},[],!1,null,null,null);d.options.__file="backup_database.md";l.default=d.exports}}]);