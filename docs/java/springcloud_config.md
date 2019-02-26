### 配置中心

- 什么是 spring cloud config?

  Spring Cloud Config 为分布式系统中的外部配置提供服务器和客户端支持。
  使用 Config Server，您可以为所有环境中的应用程序管理其外部属性。它非常适
  合 spring 应用，也可以使用在其他语言的应用上。随着应用程序通过从开发到测试
  和生产的部署流程，您可以管理这些环境之间的配置，并确定应用程序具有迁移时需
  要运行的一切。服务器存储后端的默认实现使用 git，因此它轻松支持标签版本的配
  置环境，以及可以访问用于管理内容的各种工具。

  - Spring Cloud Config 服务端特性

    - HTTP，为外部配置提供基于资源的 API（键值对，或者等价的 YAML 内容）
    - 属性值的加密和解密（对称加密和非对称加密）
    - 通过使用@EnableConfigServer 在 Spring boot 应用中非常简单的嵌入。

  - Config 客户端的特性（特指 Spring 应用）

    - 绑定 Config 服务端，并使用远程的属性源初始化 Spring 环境。
    - 属性值的加密和解密（对称加密和非对称加密）

- 配置完成后的 spring cloud 长啥样？
  - spring cloud config server 服务器端
  - spring cloud config client 客户端
  - spring cloud config git 真正的配置文件
- 具体的配置过程？
  - 关于服务器端的配置
    1. pom

    2. yml
    3. run
    4. test
       - /{application}/{profile}[/{label}]
       - /{application}-{profile}.yml
       - /{label}/{application}-{profile}.yml
       - /{application}-{profile}.properties
       - /{label}/{application}-{profile}.properties
  - 关于客户端的配置
    1. pom
    2. yml
    3. 测试
- 配置的时候遇到的问题？
  1. [application.yml 和 bootstrap.yml 的区别](https://www.jianshu.com/p/bc573e0b4f91)

  2. 加密的时候遇到的问题
- 你们的疑问？
