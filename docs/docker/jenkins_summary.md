# Jenkins 自动化中遇到的问题

## 已解决

1. **【已解决】** 关于配置构建后的邮件提醒，主要的坑有两个：

   1. 邮箱的密码，不是邮箱的登录密码，而是邮箱在申请 pop/smtp 服务之后，得到的一个授权码；
   2. 邮箱必须要和 jenkins 的管理员邮箱一致。这个点真的困扰我很久，但是在搞定之后，好像一切又是那么的合情合理。

2. **【已解决】** 在构建 maven 项目的时候，不支持 Java8 中的 lambda 表达式。

   这个点也困扰了我很久。一开始我以为是我没有在 Jenkins 中配置 jdk 的原因，我在 Jenkins 配置了各种 jdk 始终不能解决这个问题。后来，怀疑是代码的 pom 文件中没有添加编译的插件导致，我在 pom 后面添加了支持的 java8 的插件还是不可以。后来把编译插件的版本降了几个，_降了几个，降了几个_ ，居然又可以了。编译插件如下：

```java(maven)
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>2.3.2</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

3. **【已解决】** Jenkins 构建报错

   <strong>/var/jenkins_home/workspace/test_test/src/test/java/com/sayyoo/auto/autotest/SubLetContractTest.java:[206,18] error: cannot find symbol</strong>
       通过对比发现是因为在这个类中使用了 Lombok 注解，导致 maven 编译报错，从而导致 mvn compiler 的时候报错。有两种方法结局：

   1. 不再使用@Getter 和@Setter 注解，通过 IDE 的快捷键生成相关的 getter 和 setter 方法；但是这个方法很愚蠢，因为 Lombok 的注解  就是为了开放方便。

   2.（推荐）提高 maven-compiler-plugin 的版本

```java(maven)
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.7.0</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

## 未解决

4. **【未解决】** 运行在 Docker 中的 Jenkins，怎么配置测试报告，配置的路径始终找不到，会报 404 错误。

我觉这个问题其实也  不难解决，主要问题在于自己在 docker 运行 jenkins 的时候，没有挂载 docker 目录到宿主机上，导致自己设置的  目录是宿主机的目录 ，但是 jenkins 运行在 docker 中。所以注意在[安装](jenkins.md)的时候，就要把文件挂载好。

5. **【未解决】** 为什么要用 Jenkins 执行自动化测试案例？

   我对 Jenkins 构建的理解是持续集成，持续交付。我觉得不应该用来做自动化测试，因为自动化测试的项目不需要打包。即使在 Jenkins 构建项目的时候，会执行测试用例也只是因为这是 maven 项目的特性，在执行 mvn  install 的时候，会自动执行 mvn test。正是因为 mvn test 这个命令才导致 Jenkins 去执行了我们的自动化测试。我觉得自己没有把 Jenkins 用在正途上，只是用了 Jenkins 的小功能，比如邮件提醒和可以配置的执行频率。

有了 Jenkins，可以不需要通过命令行手动去执行 mvn test 命令，可以对所有用例的执行结果和输出的日志有很好的展示。希望过几天再回头看的时候，会认为自己现在的想法是错误的。

## 参考

- [按不坏的 Ctrl 的博客](https://blog.csdn.net/gxb2260/article/details/80934351)
- [配置通知邮件](jenkins_mail.md)
- [jenkins 配置](jenkins_setup.md)
- [docker 安装 jenkins](jenkins.md)
