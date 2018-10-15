import { combineReducers } from 'redux'
import Message from './message'
import ButtonStatus from './sample/ButtonStatus'
import DialogStatus from './sample/DialogStatus'
import SwitchStatus from './sample/SwitchStatus'
import TableSelectStatus from './sample/TableSelectStatus'
import TableSortStatus from './sample/TableSortStatus'

export default combineReducers({
  Message,
  ButtonStatus,
  DialogStatus,
  SwitchStatus,
  TableSelectStatus,
  TableSortStatus
})
