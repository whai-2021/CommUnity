import { combineReducers } from 'redux'

import regionReducer from './region'
import userReducer from './user'
import userGroupsReducer from './groups'

export default combineReducers({
  region: regionReducer,
  user: userReducer,
  userGroups: userGroupsReducer

})
