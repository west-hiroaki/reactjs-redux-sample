import { combineReducers } from 'redux'
import Message from './message'
import ButtonStatus from './sample/ButtonStatus'
import SwitchStatus from './sample/SwitchStatus'
import TableSelectStatus from './sample/TableSelectStatus'
import TableSortStatus from './sample/TableSortStatus'

export default combineReducers({
  Message,
  ButtonStatus,
  SwitchStatus,
  TableSelectStatus,
  TableSortStatus
})
