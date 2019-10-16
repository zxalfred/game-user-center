import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  protocolData: {},
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case constants.SET_PROTOCOL_DATA: {
      return state.set('protocolData', fromJS(action.data))
    }
    default: return state
  }
}
