# FileUpload

---
## UploadService
1. 概念
    - ExcelType 对应不同类型的文件，枚举类型
    - Cloumn excel中不同的列，枚举类型
    - ExcelColumnMapping 表单和列的对应关系
2. 表结构设计

    - import_excel_field_mapping

      |   字段名      | 类型    |  备注|
      | --------   | :-----  |------|
      | mapping_code |  varchar | 主键|
      | ent_code  | varchar | 企业code|
      | excel_type | varchar | excel类型|
      | mapping_data  | json | 映射关系|
      | mapping_name| varchar | 映射规则名称|
3. 对外提供一些基础的查询接口

---
文档上传

1. 固定的表单：（往来单位及账户、选项组）
   可以使用主板封装的注解实现，但是暂时还没有关注他有哪些列，待验证
2. 自定义的表单（企业支付订单导入）
   用poi 工具去生成，校验，生成费用
    1. 基础校验
    2. 把excel 转成list，校验必填项，封装到errMsg 中
    3. 业务校验（唯一性，有效性），封装到errMsg中
      - 如果有错误，生成新的excel，上传到oss, 修改任务记录。
    4. 生成订单记录表（import_tmc_order）
    5. 调用接口写费用表和第三方费用表

3. 数据库表设计
    上传的任务记录表
    - import_excel_task

      |   字段名      | 类型    |  备注|
      | --------   | :-----  |------|
      | code |  varchar | 主键|
      | ent_code  | varchar | 企业code|
      | excel_type | varchar | excel类型|
      | user_code  | varchar | 用户code|
      | import_at| timestamp | 上传时间|
      | import_params  | json | 上传时候的参数|
      | import_status  |varchar  | 状态|
      | import_error| varchar | 错误|
      | import_result  | 上传的结果 | 用来存放错误url的列|
      | completed_time| timestamp | 完成时间|

    - 导入订单记录表（import_tmc_order）
      |   字段名      | 类型    |  备注|
      | --------   | :-----  |------|
      | code |  varchar | 主键|
      | ent_code  | varchar | 企业code|
      | excel_type | varchar | excel类型|
      | mapping_code  | varchar | 用户code|
      | order_data  | json | 上传时候的参数|



4. 其他问题
    1. 导入订单记录表
       列不固定，所以一行数据封装成json 保存。另外 excel 中订单详情是k-v结构的数据，可能需要转化成json。
    2. 带数据报表的模板下载
      暂时可以先不做
