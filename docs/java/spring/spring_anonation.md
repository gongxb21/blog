# Spring 中的常用注解

## @resource

如果同时指定了 name 和 type，则从 Spring 上下文中找到唯一匹配的 bean 进行装配，找不到则抛出异常
如果指定了 name，则从上下文中查找名称（id）匹配的 bean 进行装配，找不到则抛出异常
如果指定了 type，则从上下文中找到类型匹配的唯一 bean 进行装配，找不到或者找到多个，都会抛出异常
如果既没有指定 name，又没有指定 type，则自动按照 byName 方式进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配；

## @postConstruct

用来标记是在项目启动的时候执行这个方法。用来修饰一个非静态的 void()方法   也就是 spring 容器启动时就执行，多用于一些全局配置、数据字典之类的加载
被@PostConstruct 修饰的方法会在服务器加载 Servlet 的时候运行，并且只会被服务器执行一次。PostConstruct 在构造函数之后执行,init()方法之前执行。PreDestroy（）方法在 destroy()方法执行执行之后执

## @preDestory

被@PreDestroy 修饰的方法会在服务器卸载 Servlet 的时候运行，并且只会被服务器调用一次，类似于 Servlet 的 destroy()方法。被@PreDestroy 修饰的方法会在 destroy()方法之后运行，在 Servlet 被彻底卸载之前

## @scope

- singleton:单例模式,全局有且仅有一个实例
- prototype:原型模式,每次获取 Bean 的时候会有一个新的实例
- request:request 表示该针对每一次 HTTP 请求都会产生一个新的 bean，同时该 bean 仅在当前 HTTP request 内有效
- session:session 作用域表示该针对每一次 HTTP 请求都会产生一个新的 bean，同时该 bean 仅在当前 HTTP session 内有效
- global session:只在 portal 应用中有用，给每一个 global http session 新建一个 Bean 实例。

## @SessionAttributes

注解就可以使得模型中的数据存储一份到 session 域中

- names：这是一个字符串数组。里面应写需要存储到 session 中数据的名称。
- types：根据指定参数的类型，将模型中对应类型的参数存储到 session 中
- value：和 names 是一样的。

## @Controller

@SessionAttributes(value={"names"},types={Integer.class})
public class ScopeService {
        @RequestMapping("/testSession")
        public String test(Map<String,Object> map){
            map.put("names", Arrays.asList("a","b","c"));
            map.put("age", 12);
            return "hello";
       }
}

## @qualifer

当你创建多个具有相同类型的 bean 时，并且想要用一个属性只为它们其中的一个进行装配，在这种情况下，你可以使用 @Qualifier 注释和 @Autowired 注释通过指定哪一个真正的 bean 将会被装配来消除混乱

## @ConfigurationProperties

更加优雅的获取配置文件中的值

## @Component

// 还可以通过@PropertySource("classpath:jdbc.properties")来指定配置文件
@ConfigurationProperties("jdbc.mysql")
// 前缀=jdbc.mysql，会在配置文件中寻找 jdbc.mysql.\*的配置项
pulic class JdbcConfig {
public String url;
public String username;
public String password;
}
