(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{220:function(t,e,a){"use strict";a.r(e);var l={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(5),_=Object(r.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"备份单个表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份单个表","aria-hidden":"true"}},[t._v("#")]),t._v(" 备份单个表")]),t._v(" "),a("p",[t._v("前几天在备份mysql数据的时候，发现了一个细节问题自己之前没有注意，用本篇文章记录下来。")]),t._v(" "),a("h2",{attrs:{id:"错误过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误过程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用create table my_table_bak as select * from my_table ;可以快速的备份整个数据表的表结构和表数据。一举两得，不是美滋滋？使用这个命令的时候，要求my_table_bak这个表示不存在的。")])]),t._v(" "),a("li",[a("p",[t._v("备份之后，通过发现了一个问题，虽然有备份表结构和表数据，但是备份之后的表里面是一些属性会丢失，比如主键，和自增长特性等。这个影响就很大了，可能直接导致查询速度变慢。")])])]),t._v(" "),a("h2",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),a("p",[t._v("1. 如何补救这个问题？")]),t._v(" "),a("ul",[a("li",[t._v("通过DDL语句把表的主键修改为自增长类型，脚本如下：alter table my_table_bak modify id int(11) auto_increment;")])]),t._v(" "),a("p",[t._v("2. 表备份的正确姿势？")]),t._v(" "),a("ul",[a("li",[t._v("查看要备份的表的建表的语句：show create table my_table;")]),t._v(" "),a("li",[t._v("得到建表的语句之后，把表名修改一下，然后执行该DDL脚本；也可以直接用create table my_table_bak like my_table")]),t._v(" "),a("li",[t._v("使用insert into my_table_bak select * from my_table;")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("更安全的操作")])]),t._v(" "),a("ul",[a("li",[t._v("可以在得到DDL脚本之后，直接保存到文档中；")]),t._v(" "),a("li",[t._v("使用mysql的图形界面，把表中的数据导出为insert语句，这种操作即使把数据库删了也没有影响")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("更加高效优雅的备份数据库："),a("a",{attrs:{href:"https://blog.csdn.net/gxb2260/article/details/82715507",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速备份数据库"),a("OutboundLink")],1)])])])},[],!1,null,null,null);_.options.__file="backup_table.md";e.default=_.exports}}]);