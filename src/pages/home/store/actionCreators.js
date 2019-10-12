import axios from 'axios'
import * as constants from './constants'

const setUserInfo = (data) => ({
  type: constants.SET_USER_INFO,
  data,
})

export const getUserInfo = () => async (dispatch) => {
  try {
    const result = await axios.get('/sdk/userInfo.json')
    const { data } = result
    dispatch(setUserInfo(data.data))
    return data.data
  } catch (err) {
    return err
  }
}
