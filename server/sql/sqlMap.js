let sqlMap={
  articles:{
    getArticles:'SELECT * FROM articles',
    getArticleDetail:'SELECT * FROM articles where postId=?',
  }
};

module.exports=sqlMap;
