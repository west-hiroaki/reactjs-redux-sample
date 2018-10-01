import { SHOW_MESSAGE, DISMISS_MESSAGE } from '../actions'

const initialState = {
  message: {
    open: true,
    message: 'デフォルトメッセージ'
  }
}

/**
 * メッセージバーを制御するためのreducer
 * @param {Object} state State
 * @param {Object} action Action
 * @return {Object} state 更新するState
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        message: {
          open: true,
          message: action.message
        }
      }
    case DISMISS_MESSAGE:
      return {
        ...state,
        message: {
          open: false,
          message: ''
        }
      }
    default:
      return state
  }
}
