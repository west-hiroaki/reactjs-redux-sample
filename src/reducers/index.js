import { combineReducers } from 'redux'
import Message from './message'
import ButtonStatus from './sample/ButtonStatus'
import SwitchStatus from './sample/SwitchStatus'
import TableSortStatus from './sample/TableSortStatus'

export default combineReducers({
  Message,
  ButtonStatus,
  SwitchStatus,
  TableSortStatus
})
