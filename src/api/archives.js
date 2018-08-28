import axios from 'axios'
/**
 * @Description: 获取归档文章接口
 * @author nbut_Mickey
 * @date 2018/8/28
*/
export function getArchives() {
  return axios.get('/api/getArchives').then(res => {
    return Promise.resolve(res.data);
  })
}
