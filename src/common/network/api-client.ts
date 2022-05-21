import axios from 'axios'
import storageLocal from 'shared/helper/storage-local'
import STORAGE_LOCAL from 'shared/constants/storage-local'
import { sleep } from 'shared/utils/sleep'

const apiClient = axios.create({
  // relative baseUrl means we are getting response from mock service worker
  baseURL: '/api/',

  headers: {
    'Content-type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  async (config) => {
    if (process.env.NODE_ENV === 'development') {
      await sleep(2000)
    }
    const token = storageLocal.get(STORAGE_LOCAL.token)
    if (token && config.headers) {
      config.headers.Authorization = token
    }
    return {
      ...config,
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
