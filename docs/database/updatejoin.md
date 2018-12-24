# update join 的使用

## 问题背景
表一：
| tableName | order | 
| - | :-: | -: | 
| column1 | order_id |
|  column2 | room_id | 
|  column3 | company_id | 

表二：
| tableName | room | 
| - | :-: | -: | 
| column1 | room_id |
|  column2 | hosue_id | 


表三：
| tableName | house_company_mapping | 
| - | :-: | -: | 
| column1 | house_id |
|  column2 | company_id | 

如上述中的三个表格所示，需要根据house_company_mapping把order表的company_id更新为正确的数据。数据量大概有10W条，肯定是不能通过程序写了，肯定很费时间。于是我采用了存储过程，这个虽然不推荐使用，但是我觉得用存储过程维护数据也没有什么问题。代码如下：

## 存储过程

``` sql
DROP PROCEDURE IF EXISTS FountTable;

DELIMITER $$

CREATE PROCEDURE FountTable()

  BEGIN

    DECLARE v_room_id VARCHAR(32);

    DECLARE v_house_id VARCHAR(32);

    DECLARE v_company_id VARCHAR(32);

    DECLARE v_order_id VARCHAR(32);

    #声明游标

    DECLARE cur_FountTable CURSOR FOR SELECT id
                                      FROM
                                        order  t 
                                      WHERE
                                         company_id = '123'
                                        AND exists(SELECT 1
                                                   FROM house_company_mapping a
                                                   WHERE a.house_id IN (
                                                     SELECT b.house_id
                                                     FROM room  b
                                                     WHERE b.id = t.house_id
                                                   ));

    DECLARE EXIT HANDLER FOR NOT FOUND CLOSE cur_FountTable;

    #打开游标

    OPEN cur_FountTable;

    REPEAT

      FETCH cur_FountTable
      INTO v_order_id;

      SELECT room_id
      INTO v_room_id
      FROM order 
      WHERE id = v_order_id;

      SELECT house_id
      INTO v_house_id
      FROM room
      WHERE id = v_room_id;


      SELECT ifnull(company_id, '123')
      INTO v_company_id
      FROM house_company_mapping m
      WHERE m.house_id = v_house_id;

      UPDATE order
      SET company_id = v_company_id
      WHERE id = v_order_id;

    UNTIL 0 END REPEAT;
    #关闭游标
    CLOSE cur_FountTable;
  END $$
DELIMITER ;

CALL FountTable();
```
### 存储过程的不足
我尽量让所有的查询和修改都通过索引操作，但是要遍历一个10w条数据的cursor 还是很费时间，大概需要2.5小时,简直可怕。后来知道了update join这种写法，于是我把存储过程改写成了下面这种写法：

## update join 
``` sql
UPDATE pay.pay_order a
  JOIN (
         SELECT
           t.id                                                     order_id,
           b.id                                                     house_id,
           ifnull(c.company_id, '123') company_id
         FROM pay_order t
           LEFT JOIN room b
             ON t.room_id = b.id
           LEFT JOIN house_company_mapping c
             ON b.house_id = c.house_id

         WHERE t.company_id = '123'
               ) temp
    ON a.id = temp.order_id
SET a.company_id = temp.company_id;

```

尝试了一下，基本在1分钟内就可以更新完10万条数据,简直刺激。所以推荐还是使用update join这种写法：

update table_a join table_b on a.id=b_id set a.name=b.name where 1=1;

## 参考
- [csdn](https://blog.csdn.net/gxb2260/article/details/81490993) 
