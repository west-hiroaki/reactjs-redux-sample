import { OPEN, CLOSE } from '../../actions/sample/Dialog'

// 初期状態
const initialState = {
  open: false
}

/**
 * ダイアログサンプル用のreducer
 *
 * @param {Object} state State
 * @param {Object} action Action
 * @return {Object} state 更新するState
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        open: true
      }
    case CLOSE:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}
