# 线程池

## java 常用的线程池

### CachedThreadPool

创建一个可缓存线程池，如果线程池长度超过处理需要，可灵活回收空闲线程，若无可回收，则新建线程。

```java
ExecutorService cachedThreadPool = Executors.newCachedThreadPool();
```

这种类型的线程池特点是：

- 工作线程的创建数量几乎没有限制(其实也有限制的,数目为 Interger. MAX_VALUE), 这样可灵活的往线程池中添加线程。
- 如果长时间没有往线程池中提交任务，即如果工作线程空闲了指定的时间(默认为 1 分钟)，则该工作线程将自动终止。终止后，如果你又提交了新的任务，则线程池重新创建一个工作线程。
- 在使用 CachedThreadPool 时，一定要注意控制任务的数量，否则，由于大量线程同时运行，很有会造成系统瘫痪。

### newFixedThreadPool

创建一个指定工作线程数量的线程池。每当提交一个任务就创建一个工作线程，如果工作线程数量达到线程池初始的最大数，则将提交的任务存入到池队列中。

```java
ExecutorService fixedThreadPool = Executors.newFixedThreadPool(3);
```

其中线程池的  大小可以根据系统的配置确定:**Runtime.getRuntime().availableProcessors()**

- FixedThreadPool 是一个典型且优秀的线程池，它具有线程池提高程序效率和节省创建线程时所耗的开销的优点。但是，在线程池空闲时，即线程池中没有可运行任务时，它不会释放工作线程，还会占用一定的系统资源。

### newSingleThreadExecutor

创建一个单线程化的 Executor，即只创建唯一的工作者线程来执行任务，它只会用唯一的工作线程来执行任务，保证所有任务按照指定顺序(FIFO, LIFO, 优先级)执行。如果这个线程异常结束，会有另一个取代它，保证顺序执行。单工作线程最大的特点是可保证顺序地执行各个任务，并且在任意给定的时间不会有多个线程是活动的。

```java
ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();
```

### newScheduleThreadPool

创建一个定长的线程池，而且支持定时的以及周期性的任务执行，支持定时及周期性任务执行。 例如每次延迟 5 秒执行：

```java
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
public class ThreadPoolExecutorTest {
 public static void main(String[] args) {
  ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);
  scheduledThreadPool.schedule(new Runnable() {
   public void run() {
    System.out.println("delay 3 seconds");
   }
  }, 3, TimeUnit.SECONDS);
 }
}
```

## 自定义线程池

### 核心参数

ThreadPoolExecutor 的够着方法有四个，其中  最后调用的都是下面这个。

```java
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler);

```

- corePoolSize：核心线程池的大小
- maximumPoolSize：最大线程数量是多少。它标志着这个线程池的最大线程数量。如果没有最大数量，当创建的线程数量达到了 某个极限值，到最后内存肯定就爆掉了。
- keepAliveTime：当线程没有任务时，最多保持的时间，超过这个时间就被终止了。默认情况下，只有 线程池中线程数量 大于 corePoolSize 时，keepAliveTime 值才会起作用。
- unit：参数 keepAliveTime 的时间单位，就是 TimeUnit 类当中的几个属性。
- workQueue：用来存储待执行任务的队列，不同的线程池它的队列实现方式不同（因为这关系到排队策略的问题）比如有以下几种

  - ArrayBlockingQueue：基于数组的队列，创建时需要指定大小。
  - LinkedBlockingQueue：基于链表的队列，如果没有指定大小，则默认值是 Integer.MAX_VALUE。（newFixedThreadPool 和 newSingleThreadExecutor 使用的就是这种队列）。
  - SynchronousQueue：这种队列比较特殊，因为不排队就直接创建新线程把任务提交了。（newCachedThreadPool 使用的就是这种队列）。

- threadFactory:线程工厂，用来创建线程。

- Handler：拒绝执行任务时的策略，一般来讲有以下四种策略，
  - ThreadPoolExecutor.AbortPolicy 丢弃任务，并抛出 RejectedExecutionException 异常。
  - ThreadPoolExecutor.CallerRunsPolicy：该任务被线程池拒绝，由调用 execute 方法的线程执行该任务。
  - ThreadPoolExecutor.DiscardOldestPolicy ： 抛弃队列最前面的任务，然后重新尝试执行任务。
  - ThreadPoolExecutor.DiscardPolicy，丢弃任务，不过也不抛出异常。

## 如何配置线程池大小

- corePoolSize 与 maximumPoolSize ：由于 ThreadPoolExecutor 将根据 corePoolSize 和 maximumPoolSize 设置的边界自动调整池大小，当执行 execute(java.lang.Runnable) 方法提交新任务时：
  1. 如果运行的线程少于  corePoolSize，则创建新线程来处理请求，即使其他辅助线程是空闲的；
  2. 如果设置的 corePoolSize  和  maximumPoolSize 相同，则创建的线程池是大小固定的，如果运行的线程与 corePoolSize 相同，当有新请求过来时，若 workQueue 任务阻塞队列未满，则将请求放入 workQueue 中，等待有空闲的线程从 workQueue 中取出任务并处理。
  3. 如果运行的线程多于  corePoolSize  而少于  maximumPoolSize，则仅当 workQueue 任务阻塞队列满时才创建新线程去处理请求；
  4. 如果运行的线程多于 corePoolSize 并且等于 maximumPoolSize，若 workQueue 任务阻塞队列已满，则通过 handler 所指定的策略来处理新请求；
  5. 如果将 maximumPoolSize  设置为基本的无界值（如 Integer.MAX_VALUE），则允许池适应任意数量的并发任务。

也就是说，处理任务的优先级为：

- 核心线程 corePoolSize > 阻塞队列 workQueue > 最大线程 maximumPoolSize，如果三者都满了，使用 handler 处理被拒绝的任务。
- 当池中的线程数大于 corePoolSize 的时候，多余的线程会等待 keepAliveTime 长的时间，如果无请求处理，就自行销毁。
