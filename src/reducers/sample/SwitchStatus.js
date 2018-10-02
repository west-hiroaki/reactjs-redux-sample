import {
  FETCH_SWITCH_SAMPLE_STATUS,
  REQUEST_SWITCH_SAMPLE_ENABLE,
  REQUEST_SWITCH_SAMPLE_DISABLE
} from '../../actions/sample/Switch'

// 初期状態
const initialState = {
  switch_status: {
    checked: false
  }
}

/**
 * Switchサンプル用のreducer
 *
 * @param {Object} state State
 * @param {Object} action Action
 * @return {Object} state 更新するState
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SWITCH_SAMPLE_STATUS:
      return {
        ...state,
        switch_status: {
          checked: action.result_checked
        }
      }
    case REQUEST_SWITCH_SAMPLE_ENABLE:
      return {
        ...state,
        switch_status: {
          checked: true
        }
      }
    case REQUEST_SWITCH_SAMPLE_DISABLE:
      return {
        ...state,
        switch_status: {
          checked: false
        }
      }
    default:
      return state
  }
}
