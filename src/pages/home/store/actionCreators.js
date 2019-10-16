import api from '@/api'
import * as constants from './constants'

const setUserInfo = (data) => ({
  type: constants.SET_USER_INFO,
  data,
})

export const getUserInfo = () => async (dispatch) => {
  try {
    const url = api.API.getUserInfo
    const result = await api.get(url)
    dispatch(setUserInfo(result.data))
    return true
  } catch (err) {
    return false
  }
}
