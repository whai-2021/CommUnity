import { combineReducers } from 'redux'

import regionReducer from './region'
import userReducer from './user'

export default combineReducers({
  region: regionReducer,
  user: userReducer

})
