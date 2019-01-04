# ThreadLocal

## 什么是 ThreadLocal

ThreadLocal 是一个本地线程副本变量工具类。主要用于将私有线程和该线程存放的副本对象做一个映射，各个线程之间的变量互不干扰，在高并发场景下，可以实现无状态的调用，特别适用于各个线程依赖不通的变量值完成操作的场景。

- 每个 Thread 线程内部都有一个 Map。
- Map 里面存储线程本地对象（key）和线程的变量副本（value）
- 但是，Thread 内部的 Map 是由 ThreadLocal 维护的，由 ThreadLocal 负责向 map 获取和设置线程的变量值。

所以对于不同的线程，每次获取副本值时，别的线程并不能获取到当前线程的副本值，形成了副本的隔离，互不干扰。

## Set 方法

```java
    public void set(T value) {
        Thread t = Thread.currentThread();
        ThreadLocalMap map = getMap(t);
        if (map != null)
            map.set(this, value);
        else
            createMap(t, value);
    }

    ThreadLocalMap getMap(Thread t) {
        return t.threadLocals;
    }

    void createMap(Thread t, T firstValue) {
        t.threadLocals = new ThreadLocalMap(this, firstValue);
    }

```

主要思路：

1. 获取当前线程的成员变量 map
2. map 非空，则重新将 ThreadLocal 和新的 value 副本放入到 map 中。
3. map 空，则对线程的成员变量 ThreadLocalMap 进行初始化创建，并将 ThreadLocal 和 value 副本放入 map 中。

## Get 方法

```java
    public T get() {
        Thread t = Thread.currentThread();
        ThreadLocalMap map = getMap(t);
        if (map != null) {
            ThreadLocalMap.Entry e = map.getEntry(this);
            if (e != null) {
                @SuppressWarnings("unchecked")
                T result = (T)e.value;
                return result;
            }
        }
        return setInitialValue();
    }

  private T setInitialValue() {
        T value = initialValue();
        Thread t = Thread.currentThread();
        ThreadLocalMap map = getMap(t);
        if (map != null)
            map.set(this, value);
        else
            createMap(t, value);
        return value;
    }
```

主要思路：

1. 获取当前线程的 ThreadLocalMap 对象 threadLocals
2. 从 map 中获取线程存储的 K-V Entry 节点。
3. 从 Entry 节点获取存储的 Value 副本值返回。
4. map 为空的话返回初始值 null，即线程变量副本为 null，在使用时需要注意判断 NullPointerException。

## Remove 方法

```java
    public void remove() {
         ThreadLocalMap m = getMap(Thread.currentThread());
         if (m != null)
             m.remove(this);
     }

     private void remove(ThreadLocal<?> key) {
            Entry[] tab = table;
            int len = tab.length;
            int i = key.threadLocalHashCode & (len-1);
            for (Entry e = tab[i];
                 e != null;
                 e = tab[i = nextIndex(i, len)]) {
                if (e.get() == key) {
                    e.clear();
                    expungeStaleEntry(i);
                    return;
                }
            }
        }
```

主要思路:

1. 获取当前线程的 ThreadLocalMap 对象；
2. 然后清空它的值

## 静态内部类 ThreadLocalMap

虽然他叫 ThreadLocalMap,但是他没有实现 Map 接口，但是  内部也是以通过一个 Entry 数组来存储数据，这个 Entry 的 key 继承了 WeakReference，但是 value 没有继承。

```java
    static class Entry extends WeakReference<ThreadLocal<?>> {
            /** The value associated with this ThreadLocal. */
            Object value;

            Entry(ThreadLocal<?> k, Object v) {
                super(k);
                value = v;
            }
        }
```

### Hash 冲突

```java
private void set(ThreadLocal<?> key, Object value) {

            // We don't use a fast path as with get() because it is at
            // least as common to use set() to create new entries as
            // it is to replace existing ones, in which case, a fast
            // path would fail more often than not.

            Entry[] tab = table;
            int len = tab.length;
            int i = key.threadLocalHashCode & (len-1);

            for (Entry e = tab[i];
                 e != null;
                 e = tab[i = nextIndex(i, len)]) {
                ThreadLocal<?> k = e.get();

                if (k == key) {
                    e.value = value;
                    return;
                }

                if (k == null) {
                    replaceStaleEntry(key, value, i);
                    return;
                }
            }

            tab[i] = new Entry(key, value);
            int sz = ++size;
            if (!cleanSomeSlots(i, sz) && sz >= threshold)
                rehash();
        }
```

每个 ThreadLocal 对象都有一个 hash 值 threadLocalHashCode
每初始化一个 ThreadLocal 对象，hash 值就增加一个固定的 HASH_INCREMENT(0x61c88647)大小

在插入过程中，根据 ThreadLocal 对象的 hash 值，定位到 table 中的位置 i，过程如下

1. 如果当前位置是空的，那么正好，就初始化一个 Entry 对象放在位置 i 上
2. 位置 i 已有对象，如果这个 Entry 对象的 key 正好是即将设置的 key，那么覆盖 value
3. 位置 i 的对象，和即将设置的 key 没关系，那么只能找下一个空位置

这样的话，在 get 时，也会根据 ThreadLocal 对象的 hash 值，定位到 table 中的位置，然后判断该位置 Entry 对象中的 key 是否和 get 的 key 一致，如果不一致，就判断下一个位置

可以发现，set 和 get 如果冲突严重的话，效率很低，因为 ThreadLoalMap 是 Thread 的一个属性，所以即使在自己的代码中控制了设置的元素个数，但还是不能控制其它代码的行为

### ThreadLocal 内存泄露

线程池的一个线程使用完 ThreadLocal 对象之后，再也不用，由于线程池中的线程不会退出，线程池中的线程的存在，同时 ThreadLocal 变量也会存在，占用内存！造成 OOM 溢出！最根本原因是 ThreadLocalMap 中的 Entry 的 key 继承了  弱引用。

ThreadLocal.ThreadLocalMap. Map 中的 key 为一个 threadlocal 实例。这个 Map 的确使用了弱引用，不过弱引用只是针对 key。每个 key 都弱引用指向 threadlocal。 当把 threadlocal 实例置为 null 以后，没有任何强引用指向 threadlocal 实例，所以 threadlocal 将会被 gc 回收。
但是，我们的 value 却不能回收，而这块 value 永远不会被访问到了，所以存在着内存泄露。因为存在一条从 current thread 连接过来的强引用。只有当前 thread 结束以后，current thread 就不会存在栈中，强引用断开，Current Thread、Map value 将全部被 GC 回收。最好的做法是将调用 threadlocal 的 remove 方法，这也是等会后边要说的。在 ThreadLocal 的 get(),set(),remove()的时候都会清除线程 ThreadLocalMap 里所有 key 为 null 的 value。

### 怎么解决 OOM

1. 显示的调用 remove 方法，就有可能发生内存泄露。
2. JDK 建议 ThreadLocal 定义为 private static，这样 ThreadLocal 的弱引用问题则不存在了

## 参考

- [星夜雨年的博客](https://www.cnblogs.com/zhangjk1993/archive/2017/03/29/6641745.html)
- [MISout 的简书](https://www.jianshu.com/p/98b68c97df9b)
