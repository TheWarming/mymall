import Axios from 'axios'

export default function axios(option){
  //创建实例与基本配置
  const instance = Axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000
  });
  //请求和响应拦截
/*   instance.interceptors.request.use(config => {
    return config
  },err => {
    return err
  }) */
  instance.interceptors.response.use(response => {
    return response.data
  },err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  })

  return instance(option)
}