(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{210:function(t,e,a){"use strict";a.r(e);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(5),i=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"nio-原理及实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nio-原理及实现","aria-hidden":"true"}},[t._v("#")]),t._v(" NIO 原理及实现")]),t._v(" "),a("h2",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("阻塞和非阻塞")]),t._v(" "),a("p",[t._v("阻塞和非阻塞是在进程访问数据的时候，数据 \b 是否准备就绪的一种处理方式，当数据没有准备好的时候。")]),t._v(" "),a("ul",[a("li",[t._v("阻塞：往往需要等待缓冲区中的数据准备好过后才处理其他事情，否则就一直等待。")]),t._v(" "),a("li",[t._v("非阻塞： 当我们的进程访问我们的数据缓冲区 d")])])]),t._v(" "),a("li",[a("p",[t._v("同步和异步")]),t._v(" "),a("p",[t._v("基于应用程序和操作 \b 系统处理 IO 事件采取的方式来区别：")]),t._v(" "),a("ul",[a("li",[t._v("同一个时刻只能处理一个 IO 读写，采用程序直接参与 IO 读写的方式进行")]),t._v(" "),a("li",[t._v("同一个时刻可以处理多个 IO 读写，应用程序等待操作系统通知。")])])])]),t._v(" "),a("h2",{attrs:{id:"nio-概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nio-概念","aria-hidden":"true"}},[t._v("#")]),t._v(" NIO 概念")]),t._v(" "),a("p",[t._v("Java NIO (non-blocking IO) 是 java1.4 之后新出的接口，BIO 和 NIO 的对比")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("IO 模型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("BIO")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("NIO")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从硬盘到内存")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从内存到硬盘")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("通信")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("面向流")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("面向缓冲（多路复用)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\b")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("处理")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("阻塞 IO(多线程)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("出发")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("选择器（轮询机制）")])])])]),t._v(" "),a("h2",{attrs:{id:"buffer-缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-缓冲区","aria-hidden":"true"}},[t._v("#")]),t._v(" Buffer(缓冲区)")]),t._v(" "),a("p",[t._v("本质上是一个数组，但是缓冲区对象内置了一些机制，能够追踪和记录缓存区的状态变化，\b 比如我们在使用 get 方法获取数据或者 put 方法把数据放入缓冲区，都会引起缓冲区的状态变化。")]),t._v(" "),a("h3",{attrs:{id:"缓冲区类型："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓冲区类型：","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓冲区类型：")]),t._v(" "),a("ul",[a("li",[t._v("ByteBuffer")]),t._v(" "),a("li",[t._v("MappedByteBuffer")]),t._v(" "),a("li",[t._v("CharBuffer")]),t._v(" "),a("li",[t._v("DoubleBuffer")]),t._v(" "),a("li",[t._v("FloatBuffer")]),t._v(" "),a("li",[t._v("IntBuffer")]),t._v(" "),a("li",[t._v("LongBuffer")]),t._v(" "),a("li",[t._v("ShortBuffer")])]),t._v(" "),a("h3",{attrs:{id:"常用方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用方法：","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用方法：")]),t._v(" "),a("ul",[a("li",[t._v("allocate() - 分配一块缓冲区")]),t._v(" "),a("li",[t._v("put() - 向缓冲区写数据")]),t._v(" "),a("li",[t._v("get() - 向缓冲区读数据")]),t._v(" "),a("li",[t._v("filp() - 将缓冲区从写模式切换到读模式")]),t._v(" "),a("li",[t._v("clear() - 从读模式切换到写模式，不会清空数据，但后续写数据会覆盖原来的数据，即使有部分数据没有读，也会被遗忘；")]),t._v(" "),a("li",[t._v("compact() - 从读数据切换到写模式，数据不会被清空，会将所有未读的数据 copy 到缓冲区头部，后续写数据不会覆盖，而是在这些数据之后写数据")]),t._v(" "),a("li",[t._v("mark() - 对 position 做出标记，配合 reset 使用")]),t._v(" "),a("li",[t._v("reset() - 将 position 置为标记值")])]),t._v(" "),a("h3",{attrs:{id:"重要属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要属性")]),t._v(" "),a("ul",[a("li",[t._v("capacity 缓冲区大小，无论是读模式还是写模式，此属性值不会变；")]),t._v(" "),a("li",[t._v("position 写数据时，position 表示当前写的位置，每写一个数据，会向下移动一个数据单元，初始为 0；最大为 capacity - 1。切换到读模式时，position 会被置为 0，表示当前读的位置")]),t._v(" "),a("li",[t._v("limit 写模式下，limit 相当于 capacity 表示最多可以写多少数据，切换到读模式时，limit 等于原先的 position，表示最多可以读多少数据。")])]),t._v(" "),a("h2",{attrs:{id:"channel-通路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-通路","aria-hidden":"true"}},[t._v("#")]),t._v(" Channel(通路)")]),t._v(" "),a("p",[t._v("类似于流，但是可以异步读写数据（流只能同步读写），通道是双向的，（流是单向的），通道的数据总是要先读到一个 buffer 或者 从一个 buffer 写入，即通道与 buffer 进行数据交互。")]),t._v(" "),a("h3",{attrs:{id:"通道类型："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通道类型：","aria-hidden":"true"}},[t._v("#")]),t._v(" 通道类型：")]),t._v(" "),a("ul",[a("li",[t._v("FileChannel：从文件中读写数据。")]),t._v(" "),a("li",[t._v("DatagramChannel：能通过 UDP 读写网络中的数据。")]),t._v(" "),a("li",[t._v("SocketChannel：能通过 TCP 读写网络中的数据。")]),t._v(" "),a("li",[t._v("ServerSocketChannel：可以监听新进来的 TCP 连接，像 Web 服务器那样。对每一个新进来的连接都会创建一个 SocketChannel。")])]),t._v(" "),a("p",[t._v("FileChannel 比较特殊，它可以与通道进行数据交互， 不能切换到非阻塞模式，套接字通道可以切换到非阻塞模式；")]),t._v(" "),a("p",[t._v("nio 读取数据：任何时候读取数据，都不是直接从通道中读取，而是从通道读取到缓冲区，所以使用 NIO 读取数据可以分为下面三个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("从 FileInputStream 中获取到 Channel")]),t._v(" "),a("li",[t._v("创建 buffer")]),t._v(" "),a("li",[t._v("把数据从 Channel 读取到 buffer 中")])]),t._v(" "),a("h3",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),a("p",[t._v("相当于一个观察者，用来监听通道感兴趣的事件，一个选择器可以绑定多个通道；使用 Selector 的好处在于： 使用更少的线程来就可以来处理通道了， 相比使用多个线程，避免了线程上下文切换带来的开销。有了 selector，可以用一个线程处理所有的 channel。通道向选择器注册时，需要指定感兴趣的事件，选择器支持以下事件：")]),t._v(" "),a("ul",[a("li",[t._v("SelectionKey.OP_CONNECT")]),t._v(" "),a("li",[t._v("SelectionKey.OP_ACCEPT")]),t._v(" "),a("li",[t._v("SelectionKey.OP_READ")]),t._v(" "),a("li",[t._v("SelectionKey.OP_WRITE")])]),t._v(" "),a("p",[t._v("如果你对不止一种事件感兴趣，那么可以用“位或”操作符将常量连接起来，如下：")]),t._v(" "),a("p",[a("code",[t._v("int interestSet = SelectionKey.OP_READ| SelectionKey.OP_WRITE")]),t._v(";")]),t._v(" "),a("p",[t._v("用“位与”操作 interest 集合和给定的 SelectionKey 常量，可以确定某个确定的事件是否在 interest 集合中。")]),t._v(" "),a("p",[t._v("通道向选择器注册时，会返回一个 SelectionKey 对象，具有如下属性:")]),t._v(" "),a("ul",[a("li",[t._v("interest 集合")]),t._v(" "),a("li",[t._v("ready 集合")]),t._v(" "),a("li",[t._v("Channel")]),t._v(" "),a("li",[t._v("Selector\n附加的对象（可选）")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Selector selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n注册channel到selector上\nChannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureBlocking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSelectionKey key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SelectionKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_READ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("注册到 server 上的 channel 必须设置成异步模式，否则异步 io 无法工作，这就意味着我们不可以把一个 Filechannel 注册到 selector，因为 filechannel 没有异步模式，但是 socketchannel 有异步模式")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gongxb21/java_base/tree/master/src/main/java/nio",target:"_blank",rel:"noopener noreferrer"}},[t._v("nio_github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c21ed1bf265da61171cc11b",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/tengpan-cn/p/5809273.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园"),a("OutboundLink")],1)])])])},[],!1,null,null,null);i.options.__file="nio.md";e.default=i.exports}}]);