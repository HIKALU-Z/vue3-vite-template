/**
 * 公共模块
 */
import request from '@/utils/request'

// interface ResponseData<T> {
//   status: number
//   msg: string
//   data:T
// }

export const getInfo = () => {
  // return request.get<ResponseData<{
  //   logo_url: string
  // }>>('/api/info')
  return request<{ logo_url: string }>({
    method: 'GET',
    url: '/api/info'
  })
}
