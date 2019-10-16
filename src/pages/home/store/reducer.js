import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  userInfo: {
    account_id: '',
    account_name: '',
    is_guest: false,
    channel_id: '',
    channels: [],
    channel_icon: '',
  },
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case constants.SET_USER_INFO: {
      return state.set('userInfo', fromJS(action.data))
    }
    default: return state
  }
}
