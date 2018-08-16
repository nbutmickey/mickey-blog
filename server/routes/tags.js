let express = require('express');
let router = express.Router();
let $sql=require('../sql/sqlMap');
let conn=require('../db/dbConnect');
let JsonBack=require('../utils/JsonBack');

 /**
 * @Description: 获取全部标签
 * @author nbut_Mickey
 * @date 2018/8/13
*/
router.get('/getAllTags',(req,res)=>{
  let sql=$sql.tags.getAllTags;
  conn.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }
    let tagList;
    tagList=result;
    if(tagList){
      JsonBack(res,tagList);
    }
  })
});

router.get('/getTagsAll',(req,res)=>{
  let sql=$sql.tags.getTagsAll;
  conn.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      JsonBack(res,result);
    }
  })
});
module.exports=router;
