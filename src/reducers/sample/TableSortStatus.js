import { CHANGE_SORT } from '../../actions/sample/SortTable'

// 初期状態
const initialState = {
  orderBy: 'master_name',
  order: 'asc' // 'desc' or 'asc'
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
    case CHANGE_SORT:
      return {
        ...state,
        order: action.order,
        orderBy: action.orderBy
      }
    default:
      return state
  }
}
