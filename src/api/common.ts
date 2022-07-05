/**
 * 公共模块
 */
import request from '@/utils/request'

interface ResponseData<T> {
  status: number
  msg: string
  data:T
}

export const getInfo = () => {
  // request({
  // method: 'GET'
  // })
  return request.get<ResponseData<{
    logo_url: string
  }>>('/api/info')
}
