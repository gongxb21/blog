# 奇怪的404

## 发现这个奇怪的404
  在controller中新增了一个很简单的查询接口，通过postMan 去调用，发现居然报错了，错误码是[404](https://baike.baidu.com/item/404%E7%8A%B6%E6%80%81%E7%A0%81/12678394)。

- 404 自己已经遇到过很多次，很有可能是自己的url 拼写错误了，但是自己检查了好几次，url 确定是正确的。
- 会不会是postMan 有问题？ 用restClient 试了试，依旧是同样的结果。没想到自己居然有怀疑工具的胆子。
- 在代码中新增了一个断点，发现断点其实是进来了的，而且控制台也会有日志输出，只是在返回的时候才转化成404异常。
- 仔细对比代码，这个controller 上用的注解是@controller 注解，并不是@RestController 注解，大胆的尝试了下，果然就是这个问题导致的。

## Controller 和RestController  有啥区别？
  @RestController注解相当于@ResponseBody ＋ @Controller合在一起的作用。
1. 如果只是使用@RestController注解Controller，则Controller中的方法无法返回jsp页面，或者html，配置的视图解析器 InternalResourceViewResolver不起作用，返回的内容就是Return 里的内容。
2. 如果需要返回到指定页面，则需要用 @Controller配合视图解析器InternalResourceViewResolver才行。
3. 如果需要返回JSON，XML或自定义mediaType内容到页面，则需要在对应的方法上加上@ResponseBody注解。

## 参考
- [莫负旅途的博客](https://blog.csdn.net/gg12365gg/article/details/51345601)
