let express = require('express');
let router = express.Router();
let mysql =require('mysql');
let $sql=require('../sql/sqlMap');
let sqlConfig=require('../db/db');
let http=require('http');
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

//获取全部标签
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

router.post('/postMessage',(req,resto)=>{
  //获取客户端IP地址
  let ipAddress;
  let forwardedIpsStr = req.header('x-forwarded-for');
  if (forwardedIpsStr) {
    let forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    ipAddress = req.connection.remoteAddress;
  }
  let fetchUrl='http://api.map.baidu.com/location/ip?ip=223.104.35.179&ak=XKOlseUHMLdHZ7ZYF96DLw7q2IXdXEdD&coor=bd09ll';
  http.get(fetchUrl,function (res) {
    res.setEncoding('utf8');
    let rawData='';
    res.on('data',function (chunk) {
      rawData+=chunk;
      let TrueAddress=JSON.parse(rawData).content.address;
      let message=req.body.params.message;
      let sql=$sql.message.insertMessage;
      conn.query(sql,[message.name,message.email,message.content,ipAddress,TrueAddress,message.time],(err,result)=>{
        if(err){
          console.log(err);
        }
        if(result){
          JsonBack(resto,"success");
        }
      });
    });
  });
});

router.get('/getAllMessages',(req,res)=>{
  let sql=$sql.message.getAllMessages;
  conn.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      JsonBack(res,result.reverse());
    }
  })
});

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
module.exports = router;
