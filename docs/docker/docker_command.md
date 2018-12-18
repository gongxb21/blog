# Docker 常用命令

##  常用命令

- docker version
- docker info
- sudo groupadd docker 创建 docker 用户组
- sudo usermod -aG docker \$user 把用户添加到用户组
- sudo service docker start service 命令启动
- sudo systemctl start docker systemctl 命令启动
- \$ docker image ls # 列出本机的所有 image 文件。
- \$ docker image rm [imageName] # 删除 image 文件

## 镜像、容器、仓库

- docker search  搜  索镜像， 默认是在 dockerHub 中
- docker pull 拉取  镜像
- docker start webserver 开始运行某个镜像
- docker stop websever 结束某个镜像
- docker ps 查看 docker 进程
- docker image ls docker 镜像显示
  由于 Docker 使用 Union FS，相同的层只需要保存一份即可,因此实际镜像硬盘占用空间很可能要比这个列表镜像大小的总和要小的多。

- docker system df docker 内存使用
- docker image ls -f dangling=true
- docker commit [选项] <容器 ID 或容器名> [<仓库名>[:<标签>]] 发布镜像
- docker container stop container_id 停止某个服务
- docker container logs container_id 查看镜像日志
- docker container restart container_name  重启服务
- docker container stop container_name 停止服务
- docker container start container_name 开始服务
- docker container rm container_name
- docker container prune 清理所有处于终止状态的容器（**慎用**）

- docker attach
- docker run -dit ubuntu
- docker exec -i container_id bash
- docker export 7691a814370e > ubuntu.tar
- docker tag ubuntu:latest 127.0.0.1:5000/ubuntu:latest
- docker push 127.0.0.1:5000/ubuntu:latest

- docker volume create my-vol 创建数据卷
- docker volume ls
- docker volume inspect my-vol
-
- 数据卷   是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：
  数据卷：可以在容器之间共享和重用，对数据卷的修改会立马生效，对数据卷的更新，不会影响镜像，数据卷默认会一直存在，即使容器被删除。

外部访问容器

- \-p 可以指定要映射的端口，并且，在一个指定端口上只可以绑定一个容器
- \-P 它会随机映射一个端口至容器内部开放的网络端口(范围不详，似乎都上万)

- docker network create -d bridge my-net docker 网络
- docker run -it --rm --name busybox1 --network my-net busybox sh

- 服务 (service)：一个应用容器，实际上可以运行多个相同镜像的实例。
- 项目 (project)：由一组关联的应用容器组成的一个完整业务单元
