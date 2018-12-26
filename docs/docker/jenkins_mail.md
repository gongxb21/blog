# Jenkins  邮件通知模板

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>${ENV, var="JOB_NAME"}-第${BUILD_NUMBER}次构建日志</title>
  </head>

  <body leftmargin="8" marginwidth="0" topmargin="8" marginheight="4" offset="0">
    <table width="95%" cellpadding="0" cellspacing="0" style="font-size: 11pt; font-family: Tahoma, Arial, Helvetica, sans-serif">
      <tr>
        <td>各位同事，大家好，以下为${PROJECT_NAME }项目构建信息</td>
      </tr>
      <tr>
        <td>
          <br />
          <b><font color="#0B610B">构建信息</font></b>
          <hr size="2" width="100%" align="center" />
        </td>
      </tr>
      <tr>
        <td>
          <ul>
            <li>项目名称 ： ${PROJECT_NAME}</li>
            <li>构建编号 ： 第${BUILD_NUMBER}次构建</li>
            <li>触发原因： ${CAUSE}</li>
            <li>构建状态： ${BUILD_STATUS}</li>
            <li>构建日志： <a href="${BUILD_URL}console">${BUILD_URL}console</a></li>
            <li>构建 Url ： <a href="${BUILD_URL}">${BUILD_URL}</a></li>
            <li>工作目录 ： <a href="${PROJECT_URL}ws">${PROJECT_URL}ws</a></li>
            <li>项目 Url ： <a href="${PROJECT_URL}">${PROJECT_URL}</a></li>
          </ul>
        </td>
      </tr>
    </table>
  </body>
</html>
```

[jenkins 配置邮件模板](https://blog.csdn.net/gxb2260/article/details/80933984)
