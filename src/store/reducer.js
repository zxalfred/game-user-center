import { combineReducers } from 'redux-immutable'
import globalReducer from './globalReducer'
import { reducer as homeReducer } from '@/pages/home/store'

export default combineReducers({
  global: globalReducer,
  home: homeReducer,
})
