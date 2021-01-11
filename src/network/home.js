import axios from "network/axios";

export function getHomeMultidata() {
  return axios({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}