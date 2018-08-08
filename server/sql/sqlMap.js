let sqlMap={
  articles:{
    getArticles:'SELECT * FROM articles',
    getArticleDetail:'SELECT * FROM articles where postId=?',
  },
  tags:{
    getAllTags:'SELECT tag,relations.tagId,count(*) AS length FROM relations,tags WHERE relations.tagId=tags.tagId GROUP BY relations.tagId\n' +
    ',tags.tag',
    getTagName:'SELECT tag from tags WHERE tagId=?',
    getTagArticle:'SELECT date,title,articles.postId FROM articles,relations WHERE articles.postId=relations.Id AND relations.tagId=?'
  },
  message:{
    insertMessage:'INSERT INTO message VALUES(NULL,?,?,?,?,?,?)',
    getAllMessages:'SELECT name,content,address,time FROM message'
  }
};

module.exports=sqlMap;
