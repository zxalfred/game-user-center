import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  loading: false,
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case constants.SET_LOADING: {
      return state.set('loading', action.data)
    }
    default: return state
  }
}
