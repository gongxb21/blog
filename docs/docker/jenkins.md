# Docker 配置jenkins
1. docker search jenkins      //在docker官方的库中搜索Jenkins的镜像。

2. docker pull jenkins    //从docker官方的库中拉取镜像到本地

3.  docker run  -v /Users/dockerData/jenkins -p 8080:8080 -p 50000:50000 --name my_jenkins jenkins  //运行本地的jenkins镜像。这里的-v选项是把docker挂载到本地的/Users/dockerData/jenkins目录下面。这里最好是把这个命令写成一个shell脚本，这样更好维护和修改。

4. docker ps |grep my_jenkins  查看本地的jenkins镜像

5. 访问localhost:8080，进入jenkins配置页面

- [设置jenkins](jenkins_setup.md)
