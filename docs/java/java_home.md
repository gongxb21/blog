# 如何获取 Java Home 路径

1. `which java`

   /usr/bin/java

2. `ll -lrt /usr/bin/java`

   lrwxrwxrwx. 1 root root 22 11 月 12 18:52 /usr/bin/java -> /etc/alternatives/java

3. `ls -l /etc/alternatives/java`

lrwxrwxrwx. 1 root root 73 11 月 12 18:52 /etc/alternatives/java -> /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.191.b12-0.el7_5.x86_64/jre/bin/java

4. `cd /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.191.b12-0.el7_5.x86_64/jre/`

   这个就是 java 的安装路径
