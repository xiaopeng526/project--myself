import request from '@/untils/requestBiz'

//1、列表搜索
export function fetchList(params) {
  return request({
    url:'/customer/findCustomer',
    method: 'get',
    params: params
  })
}
export function addCustomer(data) {
  return request({
    url: '/customer/updateCustomer',
    method: 'put',
    data:data
  })
}
export function deleteAdress(Id) {
  return request({
    url: '/customer/cusAddress/deleteCusAds/'+Id,
    method: 'delete',
  })
}
