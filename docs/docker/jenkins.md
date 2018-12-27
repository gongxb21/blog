# Docker 配置 jenkins

1. docker search jenkins      //在 docker 官方的库中搜索 Jenkins 的镜像。

2. docker pull jenkins    //从 docker 官方的库中拉取镜像到本地

3. docker run  -v /Users/dockerData/jenkins -p 8080:8080 -p 50000:50000 --name my_jenkins jenkins  //运行本地的 jenkins 镜像。这里的-v 选项是把 docker 挂载到本地的/Users/dockerData/jenkins 目录下面。**这里最好是把这个命令写成一个 shell 脚本，这样更好维护和修改** 。比较麻烦的一点是，在以后如果发现没有找到挂载文件，那就需要重装了:(

4. docker ps |grep my_jenkins  查看本地的 jenkins 镜像

5. 访问 localhost:8080，进入 jenkins 配置页面

- [设置 jenkins](jenkins_setup.md)
