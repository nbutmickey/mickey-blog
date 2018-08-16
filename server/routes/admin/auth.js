let express = require('express');
let router = express.Router();
let $sql=require('../../sql/sqlMap');
let conn=require('../../db/dbConnect');
let jwt=require('jsonwebtoken');
let bcrypt=require('bcryptjs');
/**
 * @Description: 登陆注册进行验证
 * @author nbut_Mickey
 * @date 2018/8/14
*/
router.post('/confirm',(req,res)=>{
  const {username,password,type}=req.body.params;
  if(type==='login'){
    let sql=$sql.user.selectUser;
    conn.query(sql,[username],(err,result)=>{
      let user=result[0];
      if(user!==undefined){
          if(!bcrypt.compareSync(password,user.password)){
            res.json({
              success:false,
              message:'认证失败，密码错误！'
            });
          }else{
            const userToken={
              name:user.username,
            };
            //密钥
            const secret='mickey-blog';
            //生成token
            const token=jwt.sign(userToken,secret);
            //验证通过，返回确认信息以及token
            res.json({
              success:true,
              message:'认证成功！',
              token:token
            });
          }
      }else{
        res.json({
          success:false,
          message:'用户不存在'
        });
      }
    });
  }else if(type==='regist'){
    let sql=$sql.user.selectUserCount;
    conn.query(sql,[username],(err,result)=>{
      let row=result[0];
      if(row.count>0){
        res.json({
          success:false,
          message:'该用户已经存在'
        });
      }else{
        //对密码进行加盐处理
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(password,salt);
        let sql=$sql.user.insertUser;
        conn.query(sql,[username,hash],(err,result)=>{
          if(result) {
            const userToken = {
              name: username
            };
            const secret = 'mickey-blog';
            const token = jwt.sign(userToken, secret);
            res.json({
              success: true,
              message: '注册成功！',
              token: token
            });
          }
          if(err){
            console.log(err);
          }
        })
      }
    });
  }
});

module.exports=router;
