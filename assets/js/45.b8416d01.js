(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{214:function(s,a,t){"use strict";t.r(a);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=t(5),e=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("p",[s._v("#\bSpring cloud 配置中心")]),s._v(" "),t("h2",{attrs:{id:"_1-什么是-spring-cloud-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-spring-cloud-config","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.什么是 spring cloud config?")]),s._v(" "),t("p",[s._v("Spring Cloud Config 为分布式系统中的外部配置提供服 务器和客户端支持。使用 Config Server，您可以为所有环境中的应用程序管理其外部属性。它非常适合 spring 应用，也可以使用在其他语言的应用上。随着应用程序通过从开发到测试和生产的部署流程，您可以管理这些环境之间的配置，并确定应用程序具有迁移时需要运行的一切。服务器存储后端的默认实现使用 git，因此它 轻松支持标签版本的配置环境，以及可以访问用于管理内容的各种工具。")]),s._v(" "),t("h3",{attrs:{id:"spring-cloud-config-服务端特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-config-服务端特性","aria-hidden":"true"}},[s._v("#")]),s._v(" Spring Cloud Config 服务端特性")]),s._v(" "),t("ul",[t("li",[s._v("HTTP，为外部配置提供基于资源的 API（键值对，或者等价的 YAML 内容）")]),s._v(" "),t("li",[s._v("属性值的加密和解密（对称加密和非对称加密）")]),s._v(" "),t("li",[s._v("通过使用@EnableConfigServer 在 Spring boot 应用中非常简单的嵌入。")])]),s._v(" "),t("h3",{attrs:{id:"config-客户端的特性（特指-spring-应用）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-客户端的特性（特指-spring-应用）","aria-hidden":"true"}},[s._v("#")]),s._v(" Config 客户端的特性（特指 Spring 应用）")]),s._v(" "),t("ul",[t("li",[s._v("绑定 Config 服务端，并使用远程的属性源初始化 Spring 环境。")]),s._v(" "),t("li",[s._v("属性值的加密和解密（对称加密和非对称加密）")])]),s._v(" "),t("h2",{attrs:{id:"_2-配置完成后的-spring-cloud-长啥样？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置完成后的-spring-cloud-长啥样？","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 配置完成后的 spring cloud 长啥样？")]),s._v(" "),t("ul",[t("li",[s._v("spring cloud config server 服务器端")]),s._v(" "),t("li",[s._v("spring cloud config client 客户端")]),s._v(" "),t("li",[s._v("spring cloud config git 真正的配置文件")])]),s._v(" "),t("h2",{attrs:{id:"_3-具体的配置过程？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-具体的配置过程？","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 具体的配置过程？")]),s._v(" "),t("h3",{attrs:{id:"关于服务器端的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于服务器端的配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于服务器端的配置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("pom")]),s._v(" "),t("p",[s._v("添加 spring cloud config 的 pom 依赖")])]),s._v(" "),t("li",[t("p",[s._v("yml")]),s._v(" "),t("pre",[t("code",[s._v("    ```java\n\n    security:\n      basic:\n          enabled: false\n  server:\n      port: 10000\n  spring:\n      profiles:\n          active: dev\n      application:\n          name: spring-config\n      cloud:\n          config:\n              server:\n                  git:\n                      uri: http://sygit.sayyoo.cn/gongxb/spring-config.git\n                  default-label: master\n                  username: gongxb\n                  password: gongxb-2260\n  encrypt:\n      key: 123\n  ```\n")])])]),s._v(" "),t("li",[t("p",[s._v("run")])]),s._v(" "),t("li",[t("p",[s._v("test")])])]),s._v(" "),t("ul",[t("li",[s._v("/{application}/{profile}[/{label}]")]),s._v(" "),t("li",[s._v("/{application}-{profile}.yml")]),s._v(" "),t("li",[s._v("/{label}/{application}-{profile}.yml")]),s._v(" "),t("li",[s._v("/{application}-{profile}.properties")]),s._v(" "),t("li",[s._v("/{label}/{application}-{profile}.properties")])]),s._v(" "),t("h3",{attrs:{id:"关于客户端的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于客户端的配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 关于客户端的配置")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("pom")]),s._v(" "),t("ul",[t("li",[s._v("添加 spring cloud config 的 pom 依赖")])])]),s._v(" "),t("li",[t("p",[s._v("yml")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\napplication"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("client\nprofiles"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nactive"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" dev\ncloud"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\nconfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  discovery"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    service"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("config\n  prfile"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("profiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("active"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  label"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" master\n\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n\n spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n     profiles"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" test\n eureka"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n     client"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n         serviceUrl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n             defaultZone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.62")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".166")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".134")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10100")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("eureka"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.62")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".171")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10100")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("eureka\n         registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fetch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("interval"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n     instance"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n         prefer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n         ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".35")]),s._v("\n         lease"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("renewal"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("interval"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("in"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n         lease"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("expiration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("duration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("in"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("seconds"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n         instance"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("random"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \b\b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[t("strong",[s._v("同理设置开发环境和生产环境的配置文件")])])]),s._v(" "),t("li",[t("p",[s._v("测试")])])]),s._v(" "),t("ul",[t("li",[s._v("服务 \b 是否正常运行？")]),s._v(" "),t("li",[s._v("修改配置文件之后，\b 调用/refresh 接口，查看获取到的值是否是新的值")])]),s._v(" "),t("h2",{attrs:{id:"_4-配置的时候需要注意的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置的时候需要注意的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.配置的时候需要注意的问题")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/bc573e0b4f91",target:"_blank",rel:"noopener noreferrer"}},[s._v("application.yml 和 bootstrap.yml 的区别"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("spring.application.name 必须要和配置文件中的名字一直，比如服务名叫 helloWorld ,那么配置文件中的名字必须叫 helloWorld-dev(test,prd).yml(properties);")]),s._v(" "),t("li",[s._v("加密的时候，特别注意 Mac OS 的 java \bhome 路径与 \bwindows 和 Linux 存在区别，\b 大部分的教程都是基于 windows 的和 Linux 的，\b\b 如何在 Mac OS 上配置加密信息一直没有实现。 "),t("strong",[s._v("这个问题已经解决，"),t("router-link",{attrs:{to:"./配置中心对称加密.html"}},[s._v("详情点我")])],1),s._v("。")])])])},[],!1,null,null,null);e.options.__file="spring_cloud_config.md";a.default=e.exports}}]);