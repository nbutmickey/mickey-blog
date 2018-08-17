let express = require('express');
let router = express.Router();
let emailConfig=require('../../utils/emailConfig');
let nodemailer=require('nodemailer');
let smtpTransport=require('nodemailer-smtp-transport');

/**
 * @Description: 调用QQ邮箱接口实现回复内容
 * @author nbut_Mickey
 * @date 2018/8/17
*/
router.post('/sendEmail',(req,res)=>{
  let smtpTransport=nodemailer.createTransport({
    smtpTransport:{
      service:emailConfig.email.service,
      auth:{
        user:emailConfig.email.user,
        pass:emailConfig.email.pass
      }
    }
  });
  smtpTransport.sendMail({
    from:emailConfig.email.user,
    to:'shiyixin2009@qq.com',
    subject:'【米奇博客测试】',
    html:'<p>测试博客内容回复</p>'
  },(err,response)=>{
    if(err){
      console.log(err);
    }
    if(response) {
      console.log("发送成功:" + response);
      res.json({
        success: true,
        message: '回复成功！'
      });
    }
  });
});

module.exports=router;
