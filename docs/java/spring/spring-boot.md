# Spring ,SpringMVC 和 Spring Cloud 的关系

1. Spring

   Spring 框架就像一个家族，有众多衍生产品例如 boot、security、jpa 等等。但他们的基础都是 Spring 的 ioc 和 aop ioc 提供了依赖注入的容器 aop ，解决了面向横切面的编程，然后在此两者的基础上实现了其他延伸产品的高级功能。Spring MVC 是基于 Servlet 的一个 MVC 框架 主要解决 WEB 开发的问题，因为 Spring 的配置非常复杂，各种 XML、 JavaConfig、hin 处理起来比较繁琐。于是为了简化开发者的使用，从而创造性地推出了 Spring boot，约定优于配置，简化了 spring 的配置流程。

   说得更简便一些：Spring 最初利用“工厂模式”（DI）和“代理模式”（AOP）解耦应用组件。大家觉得挺好用，于是按照这种模式搞了一个 MVC 框架（一些用 Spring 解耦的组件），用开发 web 应用（ SpringMVC ）。然后有发现每次开发都写很多样板代码，为了简化工作流程，于是开发出了一些“懒人整合包”（starter），这套就是 Spring Boot。

2. Spring MVC

   Spring MVC 提供了一种轻度耦合的方式来开发 web 应用。

   Spring MVC 是 Spring 的一个模块，式一个 web 框架。通过 Dispatcher Servlet, ModelAndView 和 View Resolver，开发 web 应用变得很容易。解决的问题领域是网站应用程序或者服务开发——URL 路由、Session、模板引擎、静态 Web 资源等等。

3. Spring Boot 的功能

   Spring Boot 实现了自动配置，降低了项目搭建的复杂度。
   众所周知 Spring 框架需要进行大量的配置，Spring Boot 引入自动配置的概念，让项目设置变得很容易。Spring Boot 本身并不提供 Spring 框架的核心特性以及扩展功能，只是用于快速、敏捷地开发新一代基于 Spring 框架的应用程序。也就是说，它并不是用来替代 Spring 的解决方案，而是和 Spring 框架紧密结合用于提升 Spring 开发者体验的工具。同时它集成了大量常用的第三方库配置(例如 Jackson, JDBC, Mongo, Redis, Mail 等等)，Spring Boot 应用中这些第三方库几乎可以零配置的开箱即用(out-of-the-box)，大部分的 Spring Boot 应用都只需要非常少量的配置代码，开发者能够更加专注于业务逻辑。

   Spring Boot 只是承载者，辅助你简化项目搭建过程的。如果承载的是 WEB 项目，使用 Spring MVC 作为 MVC 框架，那么工作流程和你上面描述的是完全一样的，因为这部分工作是 Spring MVC 做的而不是 Spring Boot。

   对使用者来说，换用 Spring Boot 以后，项目初始化方法变了，配置文件变了，另外就是不需要单独安装 Tomcat 这类容器服务器了，maven 打出 jar 包直接跑起来就是个网站，但你最核心的业务逻辑实现与业务流程实现没有任何变化。

4.  小结

- Spring 是一个“引擎”；

- Spring MVC 是基于 Spring 的一个 MVC 框架 ；

- Spring Boot 是基于 Spring4 的条件注册的一套快速开发整合包
