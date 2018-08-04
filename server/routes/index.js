let express = require('express');
let router = express.Router();
let mysql =require('mysql');
let $sql=require('../sql/sqlMap');
let sqlConfig=require('../db/db');

//连接数据库
let conn=mysql.createConnection(sqlConfig.mysql);
conn.connect();
console.log("连接数据库成功！");

//封装返回数据
let JsonBack=function(res,ret){
  if(typeof ret ==='undefined'){
    res.json({
      code:'1',
      message:'操作失败'
    });
  }else{
    res.json(ret);
  }
};

// 获取文章内容
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
      total:Math.ceil(total/pageSize),
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

//获取文章详情
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
  })

});

module.exports = router;
