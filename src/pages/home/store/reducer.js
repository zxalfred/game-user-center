import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  userInfo: {
    accountId: '',
    accountName: '',
    isGuest: false,
    channelId: '',
    channelIcon: '',
  },
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case constants.SET_USER_INFO: {
      return state.set('userInfo', action.data)
    }
    default: return state
  }
}
