(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{201:function(a,t,r){"use strict";r.r(t);var e={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=r(5),n=Object(s.a)(e,function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.slotKey}},[r("h1",{attrs:{id:"上传-jar-包到私服"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#上传-jar-包到私服","aria-hidden":"true"}},[a._v("#")]),a._v(" 上传 jar 包到私服")]),a._v(" "),r("h2",{attrs:{id:"命令-命令不要换行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令-命令不要换行","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令("),r("strong",[r("em",[a._v("命令不要换行")])]),a._v(")")]),a._v(" "),r("p",[a._v("mvn deploy:deploy-file\n-DgroupId=com.alipay.sayyoo\n-DartifactId=alipay\n-Dversion=2.3.0\n-Dpackaging=jar -Dfile=/Users/xianbinggong/Documents/jar/alipay-sdk-java-2.3.0.jar -Durl=your private server url\n-DrepositoryId=nexus-snapshots")]),a._v(" "),r("h2",{attrs:{id:"命令详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令详解","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令详解")]),a._v(" "),r("ul",[r("li",[a._v("DgroupId：表示以后添加 jar 依赖的时候的 groupId")]),a._v(" "),r("li",[a._v("DartifactId:表示以后添加 jar 依赖的时候的 artifactId")]),a._v(" "),r("li",[a._v("Dversion:表示以后添加 jar 依赖的时候的版本 ID")]),a._v(" "),r("li",[a._v("Dpackaging：打包的方式")]),a._v(" "),r("li",[a._v("Dfile: 本地的文件路径")]),a._v(" "),r("li",[a._v("Durl：私服的路径")]),a._v(" "),r("li",[a._v("DrepositoryId：仓库 ID")])]),a._v(" "),r("h2",{attrs:{id:"引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用","aria-hidden":"true"}},[a._v("#")]),a._v(" 引用")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v(" <dependency>\n    <groupId>com.alipay.sayyoo</groupId>\n    <artifactId>alipay</artifactId>\n    <version>2.3.0</version>\n</dependency>\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])])])},[],!1,null,null,null);n.options.__file="maven-upload.md";t.default=n.exports}}]);