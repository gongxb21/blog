(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{202:function(t,e,n){"use strict";n.r(e);var o={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=n(5),r=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"可达性分析算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法","aria-hidden":"true"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://blog.csdn.net/gxb2260/article/details/78279208",target:"_blank",rel:"noopener noreferrer"}},[t._v("可达性分析算法"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("在主流的语言（Java，C#） 的主流实现中，都是通过"),n("strong",[t._v("可达性分析")]),t._v("来判断对象是否存活的。这个算法的基本思路就是通过一系列的称为“GCRoots”的对象作为起始点，从这些节点开始向下搜索，搜索所走过的路径称为引用链（reference chain），当一个对象到 GC Roots 没有任何引用链相连时，则证明对象是不可用的。")]),t._v(" "),n("p",[t._v("在 Java 语言中，可以作为 GCRoots 的对象包括下面几种：")]),t._v(" "),n("ul",[n("li",[t._v("虚拟机栈（栈帧中的本地变量）中引用的对象。")]),t._v(" "),n("li",[t._v("方法区中静态属性引用的对象")]),t._v(" "),n("li",[t._v("方法区中常量引用的对象")]),t._v(" "),n("li",[t._v("本地方法栈中 JNI（Native 方法）引用的对象。")])]),t._v(" "),n("hr")])},[],!1,null,null,null);r.options.__file="可达性分析算法.md";e.default=r.exports}}]);