import axios from 'axios'
/**
 * @Description: 分页返回文章接口
 * @author nbut_Mickey
 * @date 2018/8/28
*/
export function getArticlesWithPage(pageSize,pageNum) {
return axios.get('/api/getAllArticles',
  {
    params:{
      pageSize:pageSize,
      pageNum:pageNum}
  }
  ).then(res => {
    return Promise.resolve(res.data);
})
}
