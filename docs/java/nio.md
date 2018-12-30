# NIO 原理及实现

## 基础概念

1. 阻塞和非阻塞

   阻塞和非阻塞是在进程访问数据的时候，数据  是否准备就绪的一种处理方式，当数据没有准备好的时候。

   - 阻塞：往往需要等待缓冲区中的数据准备好过后才处理其他事情，否则就一直等待。
   - 非阻塞： 当我们的进程访问我们的数据缓冲区 d

2. 同步和异步

   基于应用程序和操作  系统处理 IO 事件采取的方式来区别：

   - 同一个时刻只能处理一个 IO 读写，采用程序直接参与 IO 读写的方式进行
   - 同一个时刻可以处理多个 IO 读写，应用程序等待操作系统通知。

## NIO 概念

Java NIO (non-blocking IO) 是 java1.4 之后新出的接口，BIO 和 NIO 的对比
|IO 模型|BIO|NIO|
|:-:|:-:|:-:|
|方式| 从硬盘到内存|从内存到硬盘|
|通信|面向流|面向缓冲（多路复用)|
|处理|阻塞 IO(多线程)| 非阻塞 IO(反应堆 Reactor)|
|出发| 无|选择器（轮询机制）|

## Buffer(缓冲区)

本质上是一个数组，但是缓冲区对象内置了一些机制，能够追踪和记录缓存区的状态变化， 比如我们在使用 get 方法获取数据或者 put 方法把数据放入缓冲区，都会引起缓冲区的状态变化。

### 缓冲区类型：

- ByteBuffer
- MappedByteBuffer
- CharBuffer
- DoubleBuffer
- FloatBuffer
- IntBuffer
- LongBuffer
- ShortBuffer

### 常用方法：

- allocate() - 分配一块缓冲区
- put() - 向缓冲区写数据
- get() - 向缓冲区读数据
- filp() - 将缓冲区从写模式切换到读模式
- clear() - 从读模式切换到写模式，不会清空数据，但后续写数据会覆盖原来的数据，即使有部分数据没有读，也会被遗忘；
- compact() - 从读数据切换到写模式，数据不会被清空，会将所有未读的数据 copy 到缓冲区头部，后续写数据不会覆盖，而是在这些数据之后写数据
- mark() - 对 position 做出标记，配合 reset 使用
- reset() - 将 position 置为标记值

### 重要属性

- capacity 缓冲区大小，无论是读模式还是写模式，此属性值不会变；
- position 写数据时，position 表示当前写的位置，每写一个数据，会向下移动一个数据单元，初始为 0；最大为 capacity - 1。切换到读模式时，position 会被置为 0，表示当前读的位置
- limit 写模式下，limit 相当于 capacity 表示最多可以写多少数据，切换到读模式时，limit 等于原先的 position，表示最多可以读多少数据。

## Channel(通路)

类似于流，但是可以异步读写数据（流只能同步读写），通道是双向的，（流是单向的），通道的数据总是要先读到一个 buffer 或者 从一个 buffer 写入，即通道与 buffer 进行数据交互。

### 通道类型：　　

- FileChannel：从文件中读写数据。
- DatagramChannel：能通过 UDP 读写网络中的数据。
- SocketChannel：能通过 TCP 读写网络中的数据。
- ServerSocketChannel：可以监听新进来的 TCP 连接，像 Web 服务器那样。对每一个新进来的连接都会创建一个 SocketChannel。

FileChannel 比较特殊，它可以与通道进行数据交互， 不能切换到非阻塞模式，套接字通道可以切换到非阻塞模式；

nio 读取数据：任何时候读取数据，都不是直接从通道中读取，而是从通道读取到缓冲区，所以使用 NIO 读取数据可以分为下面三个步骤：

1. 从 FileInputStream 中获取到 Channel
2. 创建 buffer
3. 把数据从 Channel 读取到 buffer 中

### 选择器

相当于一个观察者，用来监听通道感兴趣的事件，一个选择器可以绑定多个通道；使用 Selector 的好处在于： 使用更少的线程来就可以来处理通道了， 相比使用多个线程，避免了线程上下文切换带来的开销。有了 selector，可以用一个线程处理所有的 channel。通道向选择器注册时，需要指定感兴趣的事件，选择器支持以下事件：

- SelectionKey.OP_CONNECT
- SelectionKey.OP_ACCEPT
- SelectionKey.OP_READ
- SelectionKey.OP_WRITE

如果你对不止一种事件感兴趣，那么可以用“位或”操作符将常量连接起来，如下：

`int interestSet = SelectionKey.OP_READ| SelectionKey.OP_WRITE`;

用“位与”操作 interest 集合和给定的 SelectionKey 常量，可以确定某个确定的事件是否在 interest 集合中。

通道向选择器注册时，会返回一个 SelectionKey 对象，具有如下属性:

- interest 集合
- ready 集合
- Channel
- Selector
  附加的对象（可选）

```java
Selector selector=Selector.open();
注册channel到selector上
Channel.configureBlocking(false)
SelectionKey key=channel.register(selector,SelectionKey.OP_READ)
```

注册到 server 上的 channel 必须设置成异步模式，否则异步 io 无法工作，这就意味着我们不可以把一个 Filechannel 注册到 selector，因为 filechannel 没有异步模式，但是 socketchannel 有异步模式

## 参考

- [nio_github](https://github.com/gongxb21/java_base/tree/master/src/main/java/nio)
- [掘金](https://juejin.im/post/5c21ed1bf265da61171cc11b)
- [博客园](https://www.cnblogs.com/tengpan-cn/p/5809273.html)
