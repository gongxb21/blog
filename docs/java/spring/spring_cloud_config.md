#Spring cloud 配置中心

## 1.什么是 spring cloud config?

Spring Cloud Config 为分布式系统中的外部配置提供服 务器和客户端支持。使用 Config Server，您可以为所有环境中的应用程序管理其外部属性。它非常适合 spring 应用，也可以使用在其他语言的应用上。随着应用程序通过从开发到测试和生产的部署流程，您可以管理这些环境之间的配置，并确定应用程序具有迁移时需要运行的一切。服务器存储后端的默认实现使用 git，因此它 轻松支持标签版本的配置环境，以及可以访问用于管理内容的各种工具。

### Spring Cloud Config 服务端特性

- HTTP，为外部配置提供基于资源的 API（键值对，或者等价的 YAML 内容）
- 属性值的加密和解密（对称加密和非对称加密）
- 通过使用@EnableConfigServer 在 Spring boot 应用中非常简单的嵌入。

### Config 客户端的特性（特指 Spring 应用）

- 绑定 Config 服务端，并使用远程的属性源初始化 Spring 环境。
- 属性值的加密和解密（对称加密和非对称加密）

## 2. 配置完成后的 spring cloud 长啥样？

- spring cloud config server 服务器端
- spring cloud config client 客户端
- spring cloud config git 真正的配置文件

## 3. 具体的配置过程？

### 关于服务器端的配置

1.  pom

    添加 spring cloud config 的 pom 依赖

2.  yml

            ```java

            security:
              basic:
                  enabled: false
          server:
              port: 10000
          spring:
              profiles:
                  active: dev
              application:
                  name: spring-config
              cloud:
                  config:
                      server:
                          git:
                              uri: http://sygit.sayyoo.cn/gongxb/spring-config.git
                          default-label: master
                          username: gongxb
                          password: gongxb-2260
          encrypt:
              key: 123
          ```

3.  run

4.  test

- /{application}/{profile}[/{label}]
- /{application}-{profile}.yml
- /{label}/{application}-{profile}.yml
- /{application}-{profile}.properties
- /{label}/{application}-{profile}.properties

### 关于客户端的配置

1. pom

   - 添加 spring cloud config 的 pom 依赖

2. yml

   ```java
   spring:
   application:
   name: config-client
   profiles:
   active: dev
   cloud:
   config:
     discovery:
       enabled: true
       service-id: spring-config
     prfile: ${spring.profiles.active}
     label: master

    ---

    spring:
        profiles: test
    eureka:
        client:
            serviceUrl:
                defaultZone: http://116.62.166.134:10100/eureka,http://116.62.171.11:10100/eureka
            registry-fetch-interval-seconds: 10
        instance:
            prefer-ip-address: true
            ip-address: 192.168.1.35
            lease-renewal-interval-in-seconds: 5
            lease-expiration-duration-in-seconds: 20
            instance-id: config-client:\${random.long}
    
   ```

   **同理设置开发环境和生产环境的配置文件**

3. 测试

- 服务  是否正常运行？
- 修改配置文件之后， 调用/refresh 接口，查看获取到的值是否是新的值

## 4.配置的时候需要注意的问题

1. [application.yml 和 bootstrap.yml 的区别](https://www.jianshu.com/p/bc573e0b4f91)
2. spring.application.name 必须要和配置文件中的名字一直，比如服务名叫 helloWorld ,那么配置文件中的名字必须叫 helloWorld-dev(test,prd).yml(properties);
3. 加密的时候，特别注意 Mac OS 的 java home 路径与 windows 和 Linux 存在区别， 大部分的教程都是基于 windows 的和 Linux 的， 如何在 Mac OS 上配置加密信息一直没有实现。 **这个问题已经解决，[详情点我](配置中心对称加密.md)**。
