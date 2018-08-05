let sqlMap={
  articles:{
    getArticles:'SELECT * FROM articles',
    getArticleDetail:'SELECT * FROM articles where postId=?',
  },
  tags:{
    getAllTags:'SELECT tag,relations.tagId,count(*) AS length FROM relations,tags WHERE relations.tagId=tags.tagId GROUP BY relations.tagId'
  }
};

module.exports=sqlMap;
