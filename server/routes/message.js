let express = require('express');
let router = express.Router();
let $sql=require('../sql/sqlMap');
let axios=require('axios');
let conn=require('../db/dbConnect');
let JsonBack=require('../utils/JsonBack');

/**
 * @Description: 获取所有留言
 * @author nbut_Mickey
 * @date 2018/8/13
*/
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

/**
 * @Description: 提交留言
 * @author nbut_Mickey
 * @date 2018/8/13
*/
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
  let fetchUrl='http://api.map.baidu.com/location/ip?ip='+'47.100.253.114'+'&ak=XKOlseUHMLdHZ7ZYF96DLw7q2IXdXEdD&coor=bd09ll';
  axios.get(fetchUrl).then(res=>{
    let TrueAddress=res.data.content.address;
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

module.exports=router;
