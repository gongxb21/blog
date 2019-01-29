# Autowired 和 Resource 的区别

## 区别

- @Autowired 注解是按类型装配依赖对象，默认情况下它要求依赖对象必须存在，如果允许 null 值，可以设置它 required 属性为 false。

- @Resource 注解和@Autowired 一样，也可以标注在字段或属性的 setter 方法上，但它默认按名称装配。名称可以通过@Resource 的 name 属性指定，如果没有指定 name 属性，当注解标注在字段上，即默认取字段的名称作为 bean 名称寻找依赖对象，当注解标注在属性的 setter 方法上，即默认取属性名作为 bean 名称寻找依赖对象。
- @Resources 按名字，是ＪＤＫ的，@Autowired 按类型，是Ｓｐｒｉｎｇ的。

## 参考

- [路人的回答](https://www.zhihu.com/question/39356740/answer/267659934)
