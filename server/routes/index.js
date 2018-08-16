let express = require('express');
let router = express.Router();
let $sql=require('../sql/sqlMap');
let conn=require('../db/dbConnect');
let JsonBack=require('../utils/JsonBack');

/**
 * @Description: 每一篇文章阅览数改变
 * @author nbut_Mickey
 * @date 2018/8/13
*/
router.post('/readNumIncrease',(req,res)=>{
  let postId=req.body.params.postId;
  let sql=$sql.articles.readNumIncrease;
  console.log(postId);
  conn.query(sql,[postId],(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    if(result){
      JsonBack(res,"success");
    }
  })
});
module.exports = router;
