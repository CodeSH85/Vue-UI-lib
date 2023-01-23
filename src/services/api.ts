import axios from 'axios'

const BASE_URL:string = import.meta.env.VITE_API_URL

// class HttpRequest {
//   constructor (baseURL) {
//     this.baseURL = baseURL
//   }
// }

const api = (url:string = BASE_URL) => {
  return axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
    // timeout: 10000
  })
}

export default api
