# Java 集合框架

<!--图片来源于网络，如有侵权，请联系删除-->

![java集合框架图](../../images/java_collections_frame.png)

## List 集合

### 1.ArrayList:

底层数据结构是数组，线程不安全。

1. 既然底层数据结构是数组 ，那么为啥可以一直添加元素？

```java
 private void grow(int minCapacity) {
     // overflow-conscious code
     int oldCapacity = elementData.length;
     int newCapacity = oldCapacity + (oldCapacity >> 1);
     if (newCapacity - minCapacity < 0)
         newCapacity = minCapacity;
     if (newCapacity - MAX_ARRAY_SIZE > 0)
         newCapacity = hugeCapacity(minCapacity);
     // minCapacity is usually close to size, so this is a win:
     elementData = Arrays.copyOf(elementData, newCapacity);
 }
```

在调用 add 方法的时候，会去判断下是否需要扩容，扩容的主要逻辑就是上面的代码，每次扩容为之前的 1.5 倍， 左移右移的写法  看着好高级啊。

2.

```java

    ArrayList list=new ArrayList(10);
    list.add(“1”);
    list.add(“2”);
    list.add(1,”3”);
    这时候 list 的顺序是什么样的？
```

```java
public void add(int index, E element) {
   rangeCheckForAdd(index);

   ensureCapacityInternal(size + 1);  // Increments modCount!!
   System.arraycopy(elementData, index, elementData, index + 1,
                    size - index);
   elementData[index] = element;
   size++;
}
```

想起一个简单粗暴的梗，在比赛中超过了第几名，你就是第几名：）

3. 集合的遍历

   - for 循环 最普通
   - foreach 循环  使用最广泛
   - iterator 迭代器 速度最快
   - stream 流（Java8 新特性） 最骚气

4. 关于 arrayList 的思考？

   - **初始化的时候，尽量估计下集合的大小，避免无必要的扩容**
   - 尽量不要使用 indexof() 之类的方法，他会去  遍历完整的集合， 效率较低。

### 2.LinkedList:

底层结构是链表，线程不安全

1. 构造方法
   - 不存在扩容的问题，因为底层是链表
2. add()
   - 每次都放到链表的最后一个元素
3. addAll()
   - 循环添加，很暴力
4. get()

```java
public E get(int index) {
      checkElementIndex(index);
      return node(index).item;
  }
```

5. remove

```java
    public E remove(int index) {
        checkElementIndex(index);
        return unlink(node(index));
    }
```

6. 遍历
   - LinkedList 底层是数组，说明他可以按照  链表的方式去遍历数组，比如 peek。

### 3.Vercotr

底层是数据，线程安全，好多特性都和 ArrayList 一样，没有什么好说的。

1. 为什么他要  可以保证线程安全？

   ```java
   //添加
   public synchronized boolean add(E e) {
        modCount++;
        ensureCapacityHelper(elementCount + 1);
        elementData[elementCount++] = e;
        return true;
    }
    //修改
    public synchronized E set(int index, E element) {
        if (index >= elementCount)
            throw new ArrayIndexOutOfBoundsException(index);

        E oldValue = elementData(index);
        elementData[index] = element;
        return oldValue;
    }
    //删除
    public synchronized boolean removeElement(Object obj) {
        modCount++;
        int i = indexOf(obj);
        if (i >= 0) {
            removeElementAt(i);
            return true;
        }
        return false;
    }
   ```

   看了这段代码，好像也没什么了不起的啊，把涉及到集合的值的修改方法全部用 **[Synchornized](sync_reentrantLock.md)** 修饰，简单粗暴。
