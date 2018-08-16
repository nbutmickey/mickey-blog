let express = require('express');
let router = express.Router();

let qiniuconfig=require('../../utils/qiniuConfig');
router.get('/token',(req,res)=>{
  console.log(qiniuconfig);
  res.json({
    success:true,
    token:qiniuconfig.upLoadToken
  });
});

module.exports=router;
