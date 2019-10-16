import { combineReducers } from 'redux-immutable'
import globalReducer from './globalReducer'
import { reducer as homeReducer } from '@/pages/home/store'
import { reducer as protocolReducer } from '@/pages/protocol/store'

export default combineReducers({
  global: globalReducer,
  home: homeReducer,
  protocol: protocolReducer,
})
