import axios from './myAxios'

export function getDetail(iid){
  return axios({
    url:'/detail',
    params:{
      iid
    }
  })
}