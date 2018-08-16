let express = require('express');
let router = express.Router();
let $sql=require('../../sql/sqlMap');
let conn=require('../../db/dbConnect');

/**
 * @Description: 新增一个标签
 * @author nbut_Mickey
 * @date 2018/8/15
*/
router.post('/addTag',(req,res)=>{
  let {tag}=req.body.params;
  let sql=$sql.tags.insertTag;
  let sqlCount=$sql.tags.getTagsCount;
  conn.query(sqlCount,[tag],(err,result)=>{
    if(err){
      console.log(err);
      res.json({
        success:false,
        message:'添加标签失败'
      })
    }
    let count=result[0].count;
    if(count>0){
      res.json({
        success:false,
        message:'存在重复标签'
      });
    }else{
      conn.query(sql,[tag],(err,result)=>{
        if(err){
          console.log(err);
          res.json({
            success:false,
            message:'新增标签失败！'
          })
        }
        if(result){
          res.json({
            success:true,
            message:'新增标签成功！'
          });
        }
      })
    }
  });
});

/**
 * @Description: 删除一个标签
 * @author nbut_Mickey
 * @date 2018/8/15
*/
router.post('/deleteTag',(req,res)=>{
  let {tagId}=req.body.params;
  let sql=$sql.tags.deleteTag;
  conn.query(sql,[tagId],(err,result)=>{
    if(err){
      console.log(err);
      res.json({
        success:false,
        message:'删除标签失败！'
      })
    }
    if(result){
      res.json({
        success:true,
        message:'标签删除成功！'
      });
    }
  })
});

/**
 * @Description: 更新一个标签名
 * @author nbut_Mickey
 * @date 2018/8/15
*/
router.post('/updateTag',(req,res)=>{
  let {tag,tagId}=req.body.params;
  let sql=$sql.tags.updateTag;
  conn.query(sql,[tag,tagId],(err,result)=>{
    if(err){
      console.log(err);
      res.json({
        success:false,
        message:'标签名更新失败！'
      })
    }
    if(result){
      res.json({
        success:true,
        message:'标签名更新成功!'
      })
    }
  })
});

module.exports=router;
