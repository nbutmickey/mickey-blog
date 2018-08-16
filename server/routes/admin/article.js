let express = require('express');
let router = express.Router();
let $sql=require('../../sql/sqlMap');
let conn=require('../../db/dbConnect');

/**
 * @Description: 删除一篇文章
 * @author nbut_Mickey
 * @date 2018/8/14
*/
router.post('/deleteArticle',(req,res)=>{
  let {postId}=req.body.params;
  console.log(postId);
  let sql=$sql.articles.deleteArticle;
  conn.query(sql,[postId],(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      res.json({
        success:true,
        message:'删除成功！'
      })
    }
  })
});

/**
 * @Description: 新增一篇文章
 * @author nbut_Mickey
 * @date 2018/8/14
*/
router.post('/addArticle',(req,res)=>{
  let {newArticle}=req.body.params;
  let sql=$sql.articles.insertArticle;
  let tagslength=newArticle.newTags.length;
  let tagsNameArray=[];
  for(let i=0;i<tagslength;i++){
    tagsNameArray.push(newArticle.newTags[i].tag);
  }
  let tagName=tagsNameArray.join(",");

  conn.query(sql,[parseInt(newArticle.newTime),tagName,newArticle.newTitle,newArticle.newDesc,newArticle.newContent,0,0,newArticle.newImgSrc,parseInt(newArticle.newTime)],(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      let sql=$sql.articles.getPostId;
      conn.query(sql,[newArticle.newTitle],(err,result)=>{
        if(err){
          console.log(err);
          res.json({
            success:false,
            message:'文章发布失败！'
          });
        }
        if(result){
          let postId=result[0].postId;
          let sql=$sql.relations.insertRelation;
          for(let i=0;i<tagslength;i++){
            conn.query(sql,[postId,newArticle.newTags[i].tagId],(err,result)=>{
              if(err){
                console.log(err);
                res.json({
                  success:false,
                  message:'文章发布失败！'
                });
              }
            })
          }
          res.json({
            success:true,
            message:'文章发布成功！'
          });
        }
      });
    }
  });
});

/**
 * @Description: 更新一篇文章
 * @author nbut_Mickey
 * @date 2018/8/15
*/
router.post('/updateArticle',(req,res)=>{
  let sql=$sql.articles.updateArticle;
  let {title,des,lastModify,postId}=req.body.params;
  console.log(postId);
  console.log(des);
  conn.query(sql,[title,des,lastModify,postId],(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      res.json({
        success:true,
        message:'文章修改成功！'
      });
    }
  })
});

module.exports=router;
