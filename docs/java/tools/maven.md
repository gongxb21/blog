# mvn 常用命令

- mvn -version/-v 查看版本信息
- mvn archetype:create -DgroupId=com.oreilly -DartifactId=my-app 创建 mvn 项目
- mvn package 生成 target 目录，编译、测试代码，生成测试报告，生成 jar/war 文件
- mvn jetty:run 运行项目于 jetty 上
- mvn -e 显示详细错误 信息
- mvn validate 验证工程是否正确，所有需要的资源是否可用
- mvn integration-test 在集成测试可以运行的环境中处理和发布包
- mvn verify 运行任何检查，验证包是否有效且达到质量标准
- mvn generate-sources 产生应用需要的任何额外的源代码，如 xdoclet
- mvn help:describe -Dplugin=help

---

- mvn compile

- mvn test-compile
- mvn test
- mvn site 生成 site
- mvn package
- mvn install
- mvn eclipse:eclipse 生成 eclipse 项目
- mvn idea:idea 生成 idea 项目
- mvn -Dtest package 只打包不测试
- mvn test-compile 编译测试的内容
- mvn jar:jar 只打 jar
- mvn test -skipping compile -skipping test-compile 只测试，不编译
- mvn eclipse:clean  清楚 eclipse 的系统设置
- mvn dependency:list 查看当前项目已被解析的依赖
- mvn deploy
- mvn clean install-U 强制检查更新，由于快照版本的更新策略(一天更新几次、隔段时间更新一次)存在，如果想强制更新就会用到此命令
- mvn source:jar 或 mvn source:jar-no-fork 源码打包

- mvn compile 与 mvn install、mvn deploy 的区别
  - mvn compile，编译类文件
  - mvn install，包含 mvn compile，mvn package，然后上传到本地仓库
  - mvn deploy,包含 mvn install,然后，上传到私服

* 一般使用情况是这样，首先通过 cvs 或 svn 下载代码到本机，然后执行 mvn eclipse:eclipse 生成 ecllipse 项目文件，然后导入到 eclipse 就行了；修改代码后执行 mvn compile 或 mvn test 检验，也可以下载 eclipse 的 maven 插件.
