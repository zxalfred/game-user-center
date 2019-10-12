import { message } from 'antd'
import axios from './axios'
import API from './apiList'

message.info('This is a normal message')
export default class {
  API = API

  async get(url, data = {}) {
    let result = {}
    try {
      result = await axios.get(url, {
        params: data,
      })
      result = result.data
    } catch (err) {
      result = err
    }
    if (result.code === 200) {
      return result
    }
    const errorMsg = result.message ? result.message : result
    // Message.error(String(errorMsg))
    throw new Error(errorMsg)
  }

  async post(url, data = {}) {
    let result = {}
    try {
      result = await axios.post(url, data)
    } catch (err) {
      result = err
    }
    return result
  }
}
