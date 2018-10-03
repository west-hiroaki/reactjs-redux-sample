import { combineReducers } from 'redux'
import Message from './message'
import ButtonStatus from './sample/ButtonStatus'
import SwitchStatus from './sample/SwitchStatus'

export default combineReducers({
  Message,
  ButtonStatus,
  SwitchStatus
})
