let express = require('express');
let router = express.Router();
let $sql=require('../sql/sqlMap');
let conn=require('../db/dbConnect');
let JsonBack=require('../utils/JsonBack');

/**
 * @Description:获取全部文章内容
 * @author nbut_Mickey
 * @date 2018/8/13
*/
router.get('/getAllArticles',(req,res)=>{
  let params=req.query;
  let total=0;
  let pageSize =parseInt(params.pageSize) ;
  let pageNum = parseInt(params.pageNum) ;
  let sql=$sql.articles.getArticles;
  let dataList=[];
  conn.query(sql,(err,result)=>{
    total=result.length;
    dataList=result.reverse().slice(pageSize*(pageNum-1),pageSize+pageSize*(pageNum-1));
    let resData={
      total:total,
      pageNum:pageNum,
      pageSize:pageSize,
      dataList:dataList
    };
    if(err){
      console.log(err);
    }
    if(resData){
      JsonBack(res,resData);
    }
  })
});

/**
 * @Description: 获取每一篇文章的详情
 * @author nbut_Mickey
 * @date 2018/8/13
*/

router.get('/getArticleDetails',(req,res)=>{
  let postId=req.query.postId;
  let detail={};
  let sql=$sql.articles.getArticleDetail;
  conn.query(sql,[postId],(err,result)=>{
    detail=result[0];
    if(err){
      console.log(err);
    }
    if(detail){
      JsonBack(res,detail);
    }
  });
});

/**
 * @Description: 获取标签对应的文章
 * @author nbut_Mickey
 * @date 2018/8/13
*/
router.get('/getTagArticle',(req,res)=>{
  let sqlName=$sql.tags.getTagName;
  let query=req.query;
  console.log(query);
  let sqlArticle=$sql.tags.getTagArticle;
  let tags={};
  conn.query(sqlName,[query.tagId],(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      tags.tagName=result[0];
    }
    conn.query(sqlArticle,[query.tagId],(err,result)=>{
      if(err){
        console.log(err);
      }
      if(result){
        tags.tagArticle=result;
        JsonBack(res,tags);
      }
    });
  })
});

/**
 * @Description: 获取归档文章
 * @author nbut_Mickey
 * @date 2018/8/13
*/
router.get('/getArchives',(req,res)=>{
  let sql=$sql.articles.getArticles;
  let yearList=[];
  let list=[];
  conn.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      for(let i=0;i<result.length;i++){
        yearList.push(new Date(result[i].date).getFullYear());
      }
      yearList = [...new Set(yearList)];
      for(let i=0;i<yearList.length;i++){
        let obj={
          year:yearList[i],
          result:[],
          total:Number,
        };
        for(let j=0;j<result.length;j++){
          if(yearList[i]===new Date(result[j].date).getFullYear()){
            obj.result.push(result[j]);
          }
        }
        obj.total=result.length;
        list.push(obj);
      }
      JsonBack(res,list);
    }
  })
});

router.get('/getArticle',(req,res)=>{
  let sql=$sql.articles.getArticles;
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


