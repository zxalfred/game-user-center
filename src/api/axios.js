import axios from 'axios'
import { message } from 'antd'

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(
  (config) =>
    // Do something before request is sent
    config,
  (error) =>
    // Do something with request error
    Promise.reject(error)
  ,
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      const errMessage = res.message || String(res)
      message.error(errMessage)
    }
    return res
  },
  (error) => {
    throw new Error(error)
  }
  ,
)

export default axiosInstance
