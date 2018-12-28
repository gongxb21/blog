# Synchornized 和 ReentrantLock 的区别

## 可重入性

广义上的**可重入锁指的是可重复可递归调用的锁，在外层使用锁之后，在内层仍然可以使用，并且不发生死锁（前提得是同一个对象或者 class），这样的锁就叫做可重入锁**。

从名字上理解，ReenTrantLock 的字面意思就是再进入的锁，其实 synchronized 关键字所使用的锁也是可重入的，两者关于这个的区别不大。两者都是同一个线程没进入一次，锁的计数器都自增 1，所以要等到锁的计数器下降为 0 时才能释放锁。

## 锁的实现

Synchronized 是一个关键字，是依赖于 JVM 实现的，而 ReenTrantLock 是一个类，是 JDK 实现的，有什么区别，说白了就类似于操作系统来控制实现和用户自己敲代码实现的区别。前者的实现是比较难见到的，后者有直接的源码可供阅读。

## 性能的区别

在 Synchronized 优化以前，synchronized 的性能是比 ReenTrantLock 差很多的，但是自从 Synchronized 引入了偏向锁，轻量级锁（自旋锁）后，两者的性能就差不多了，在两种方法都可用的情况下，官方甚至建议使用 synchronized，其实 synchronized 的优化我感觉就借鉴了 ReenTrantLock 中的 CAS 技术。都是试图在用户态就把加锁问题解决，避免进入内核态的线程阻塞。

功能区别：

- 便利性：很明显 Synchronized 的使用比较方便简洁，并且由编译器去保证锁的加锁和释放，而 ReenTrantLock 需要手工声明来加锁和释放锁，为了避免忘记手工释放锁造成死锁，所以最好在 finally 中声明释放锁。

- 锁的细粒度和灵活度：很明显 ReenTrantLock 优于 Synchronized

- ReenTrantLock 独有的能力：

  1. ReenTrantLock 可以指定是公平锁还是非公平锁。而 synchronized 只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。

  2. ReenTrantLock 提供了一个 Condition（条件）类，用来实现分组唤醒需要唤醒的线程们，而不是像 synchronized 要么随机唤醒一个线程要么唤醒全部线程。

  3. ReenTrantLock 提供了一种能够中断等待锁的线程的机制，通过 lock.lockInterruptibly()来实现这个机制。

## 参考

- [csdn](https://blog.csdn.net/moonpure/article/details/80443817)
