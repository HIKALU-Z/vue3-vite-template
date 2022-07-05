/**
 * 公共模块
 */
import request from '@/utils/request'
import { IUserInfo } from './types/common'

// interface ResponseData<T> {
//   status: number
//   msg: string
//   data:T
// }

export const getInfo = () => {
  // return request.get<ResponseData<{
  //   logo_url: string
  // }>>('/api/info')
  return request<IUserInfo>({
    method: 'GET',
    url: '/api/info'
  })
}
