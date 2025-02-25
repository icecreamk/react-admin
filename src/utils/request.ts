import { message } from 'antd'
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  timeoutErrorMessage: 'Request timed out',
  withCredentials: true
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return { ...config }
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const data = response.data
    if (data.code !== 200) {
      message.error(data.error)
      return Promise.reject(data.error)
    }
    localStorage.setItem('token', data.token)
    return response
  },
  error => {
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default {
  get(url: string, params?: any) {
    return instance.get(url, { params })
  },
  post(url: string, data?: any) {
    return instance.post(url, data)
  }
}
