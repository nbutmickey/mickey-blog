let qiniu=require('qiniu');
// 创建上传凭证
const accessKey="LzbIfbmRnl29eb3Ic24VZTT7zBde4ZGcxpU24Pcq";
const secretKey="GYdcw8V4Q1K3Us1MBFBbCatiQark9deRmQL0oD02";

const mac=new qiniu.auth.digest.Mac(accessKey,secretKey);
const options={
  scope:'blog',
  expires:18000
};

const putPolicy=new qiniu.rs.PutPolicy(options);
const upLoadToken=putPolicy.uploadToken(mac);

module.exports={
  upLoadToken
};
