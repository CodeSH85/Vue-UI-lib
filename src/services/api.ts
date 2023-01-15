import axios from 'axios'

// class HttpRequest {
//   constructor (baseURL) {
//     this.baseURL = baseURL
//   }
// }

const api = (url = import.meta.env.VITE_API_URL) => {
  return axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
    // timeout: 10000
  })
}

// instance.interceptors.request.use((config)=>{
//   document.body.classList.add('loading-indicator');
// })

export default api
// export default instance
