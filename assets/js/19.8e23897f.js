(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{221:function(t,s,i){"use strict";i.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=i(5),a=Object(e.a)(n,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[i("h1",{attrs:{id:"in-和-exists"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#in-和-exists","aria-hidden":"true"}},[t._v("#")]),t._v(" In 和 Exists")]),t._v(" "),i("h2",{attrs:{id:"两者的区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#两者的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 两者的区别")]),t._v(" "),i("p",[t._v("mysql 中的 in 语句是把外表和内表作 hash 连接，而 exists 语句是对外表作 loop 循环，每次 loop 循环再对内表进行查询。一直大家都认为 exists 比 in 语句的效率要高，这种说法其实是不准确的。这个是要区分环境的。")]),t._v(" "),i("h2",{attrs:{id:"使用场景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),i("ul",[i("li",[t._v("如果查询的两个表大小相当，那么用 in 和 exists 差别不大。")]),t._v(" "),i("li",[t._v("如果两个表中一个较小，一个是大表，则子查询表大的用 exists，子查询表小的用 in。")]),t._v(" "),i("li",[t._v("not in 和 not exists 如果查询语句使用了 not in 那么内外表都进行全表扫描，没有用到索引；而 not extsts 的子查询依然能用到表上的索引。所以无论那个表大，用 not exists 都比 not in 要快。")])])])},[],!1,null,null,null);a.options.__file="in_and_exists.md";s.default=a.exports}}]);