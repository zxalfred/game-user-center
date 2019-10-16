import api from '@/api'
import * as constants from './constants'

const setProtocolData = (data) => ({
  type: constants.SET_PROTOCOL_DATA,
  data,
})

export const getProtocolData = (type) => async (dispatch) => {
  try {
    const url = api.API.getProtocol
    const result = await api.get(url, { type })
    dispatch(setProtocolData(result.data))
    return true
  } catch (err) {
    return false
  }
}
