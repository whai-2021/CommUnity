import { combineReducers } from 'redux'

import regionReducer from './region'
import userReducer from './user'
import groupsReducer from './groups'

export default combineReducers({
  region: regionReducer,
  user: userReducer,
  groups: groupsReducer

})
