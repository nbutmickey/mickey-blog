let mysql =require('mysql');
let sqlConfig=require('../db/db');
let conn=mysql.createConnection(sqlConfig.mysql);
conn.connect((err)=>{
  if(err){
    console.error('Error Connecting'+err.stack);
    return;
  }
  console.log("mysql Connecting Success,Connect ID:"+conn.threadId);
});
module.exports=conn;
