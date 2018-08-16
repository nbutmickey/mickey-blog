//封装返回数据
let JsonBack=function(res,ret){
  if(typeof ret ==='undefined'){
    res.json({
      code:'1',
      message:'操作失败'
    });
  }else if(ret==='success'){
    res.json({
      code:'0',
      message:ret,
    });
  }else{
    res.json(ret);
  }
};
module.exports=JsonBack;
