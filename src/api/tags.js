import axios from 'axios'
/**
 * @Description: 获取所有标签信息接口
 * @author nbut_Mickey
 * @date 2018/8/28
*/
export function getAllTags() {
  return axios.get('/api/getAllTags').then(res => {
    return Promise.resolve(res.data);
  })
}
