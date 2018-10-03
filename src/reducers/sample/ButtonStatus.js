import {
  BUTTON_CLICK_COUNT_UP,
} from '../../actions/sample/Button'

// 初期状態
const initialState = {
  counter: 0
}

/**
 * ボタンサンプル用のreducer
 *
 * @param {Object} state State
 * @param {Object} action Action
 * @return {Object} state 更新するState
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case BUTTON_CLICK_COUNT_UP:
      // カウントアップ
      return {
        ...state,
        counter: state.counter += 1
      }
    default:
      return state
  }
}
