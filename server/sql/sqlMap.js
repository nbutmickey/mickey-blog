let sqlMap={
  articles:{
    getArticles:'SELECT * FROM articles',
    getArticleDetail:'SELECT * FROM articles where postId=?',
    deleteArticle:'DELETE FROM articles WHERE postId=?',
    insertArticle:'INSERT INTO articles VALUES(NULL,?,?,?,?,?,?,?,?,?)',
    updateArticle:'UPDATE articles SET title=?,des=?,lastModify=? WHERE postId=?',
    getPostId:'SELECT postId FROM articles WHERE title=?',
    readNumIncrease:'UPDATE articles SET readNum=readNum+1 WHERE postId=?'
  },
  relations:{
    insertRelation:'INSERT INTO relations VALUES(NULL,?,?)'
  },
  tags:{
    getAllTags:'SELECT tag,relations.tagId,count(*) AS length FROM relations,tags WHERE relations.tagId=tags.tagId GROUP BY relations.tagId\n' +
    ',tags.tag',
    getTagName:'SELECT tag from tags WHERE tagId=?',
    getTagArticle:'SELECT date,title,articles.postId FROM articles,relations WHERE articles.postId=relations.postId AND relations.tagId=?',
    insertTag:'INSERT INTO tags VALUES(NULL,?)',
    deleteTag:'DELETE FROM tags WHERE tagId=?',
    updateTag:'UPDATE tags SET tag=? WHERE tagId=?',
    getTagsAll:'SELECT * FROM tags',
    getTagsCount:'SELECT COUNT(*) AS count FROM tags WHERE tag=?',
    getTagId:'SELECT tagId FROM tags WHERE tag=?'
  },
  message:{
    insertMessage:'INSERT INTO message VALUES(NULL,?,?,?,?,?,?)',
    getAllMessages:'SELECT name,content,address,time FROM message',
    deleteMessage:'DELETE FROM message WHERE id=?'
  },
  user:{
    selectUser:'SELECT * FROM users where username=?',
    selectUserCount:'SELECT COUNT(*) as count FROM users WHERE username=?',
    insertUser:'INSERT INTO users VALUES(NULL,?,?)'
  }
};

module.exports=sqlMap;
