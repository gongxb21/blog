# Aliyun 服务器通过nginx 配置https

## 配置过程
1. 购买证书，如果要求的级别不那么高的话，可以申请Symantec的免费型DV SSL，这个是免费的。
    ![images](https://img-blog.csdnimg.cn/20181105173708696.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d4YjIyNjA=,size_16,color_FFFFFF,t_70)
2. 证书的申请：如实填写相关的信息，很快就可以验证完成。

3. 证书下载：根据服务器的类型下载相关类型的证书，这里我选择的是Nginx类型的。

4. 配置nginx：编辑nginx.conf文件，重启nginx。 

docker 运行nginx的语句，请忽略这乱糟糟的路径：
```docker
docker run -d \
        --name nginx  \
        -p 80:80 -p 443:443 \
        -v `pwd`/conf.d:/etc/nginx/conf.d \
        -v `pwd`/nginx.conf:/etc/nginx/nginx.conf \
        -v `pwd`/html:/etc/nginx/html \
        -v `pwd`/cert:/etc/nginx/cert \
        nginx
```

查看nginx的运行状态：docker ps|grep nginx

5、验证：在浏览器上输入你配置的域名，然后你就可以看到一个小锁的标志
![images2](https://img-blog.csdnimg.cn/20181105175640833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d4YjIyNjA=,size_16,color_FFFFFF,t_70)


## 问题记录

为什么我配置完成之后，http请求可以正常访问，https 不能正常访问？？

1. nginx是不是没有正常监听443端口?  

    通过netstat -an 查看443端口正常监听。

2. nginx.conf 文件中关于证书的配置是不是有问题？别人的证书都是***.pem 和***.key 而我的是***.crt和***.key
   
   通过openssl 的命令，把***.crt 转化成***.pem，上传到服务器，然后重新启动nginx，问题依然没有解决。:( 后面的事实证明这个好像没有什么关系。

3. 是不是阿里云服务器没有打开443端口？
   
    通过阿里云的控制台，查看安全组规则，果然没有配置。配置上443端口，重启nginx ，问题就解决了。

4. 为什么我直接按照上面的docker命令，NGINX根本就运行不起来，一起来就挂了？
    因为你一开始运行的时候，你在容器外的nginx.conf 和conf.d里面是空的，导致容器内的nginx的配置文件也是空的，能跑起来就奇怪了？现在有两种方法：
    - 从别的NGINX去抄一个配置文件过来，包括nginx.conf和conf.d；
    - 先不挂载配置文件，直接让nginx 运行起来，然后使用docker cp 命令把容器内的配置文件复制出来，然后在使用挂载命令，把复制出来的配置文件，有映射到容器里面。

5. 一切都按照之前自己总结的步骤去操作，为什么有不能实现nginx 跳转呢？
    最后知道真相的我眼泪掉下来，我特么把域名解析给配置错了……被自己蠢哭，域名解析的IP 是外网IP。

--- 
- [参考1：csdn](https://blog.csdn.net/gxb2260/article/details/83753508)
- [参考2：腾讯云配置https](https://zh-rocco.github.io/a-linux/server.html)
