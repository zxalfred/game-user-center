import axios from './axios'

export default class {
  async post(url, data = {}) {
    const result = await axios.post(url, data)
    return result
  }

  async get(url, data = {}) {
    const result = await axios.get(url, {
      params: data,
    })
    return result
  }
}
