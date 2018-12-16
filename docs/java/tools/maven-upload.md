# 上传 jar 包到私服

## 命令(**_命令不要换行_**)

mvn deploy:deploy-file
-DgroupId=com.alipay.sayyoo
-DartifactId=alipay
-Dversion=2.3.0
-Dpackaging=jar -Dfile=/Users/xianbinggong/Documents/jar/alipay-sdk-java-2.3.0.jar -Durl=your private server url
-DrepositoryId=nexus-snapshots

## 命令详解

- DgroupId：表示以后添加 jar 依赖的时候的 groupId
- DartifactId:表示以后添加 jar 依赖的时候的 artifactId
- Dversion:表示以后添加 jar 依赖的时候的版本 ID
- Dpackaging：打包的方式
- Dfile: 本地的文件路径
- Durl：私服的路径
- DrepositoryId：仓库 ID

## 引用

```
 <dependency>
    <groupId>com.alipay.sayyoo</groupId>
    <artifactId>alipay</artifactId>
    <version>2.3.0</version>
</dependency>
```
