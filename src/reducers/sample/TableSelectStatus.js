import {
  SELECT_ALL,
  SELECT_ROW,
  DELETE_ROW
} from '../../actions/sample/SelectTable'

// 列初期値
const columnsInitial = [
  {
    id: 'category_name',
    numeric: false,
    disablePadding: false,
    label: 'カテゴリ'
  },
  {
    id: 'master_name',
    numeric: false,
    disablePadding: false,
    label: 'マスタ'
  }
]

// 行初期値
const rowsInitial = [
  {
    id: 1,
    category_name: 'category1',
    master_name: 'master1-1'
  },
  {
    id: 2,
    category_name: 'category1',
    master_name: 'master1-2'
  },
  {
    id: 3,
    category_name: 'category2',
    master_name: 'master2-1'
  },
  {
    id: 4,
    category_name: 'category2',
    master_name: 'master2-2'
  }
]

// State初期状態
const initialState = {
  selectDeleteIds: [], // 選択されている行の id がセットされる配列
  columns: columnsInitial,
  rows: rowsInitial
}

/**
 * 選択可能テーブルサンプル用のreducer
 *
 * @param {Object} state State
 * @param {Object} action Action
 * @return {Object} state 更新するState
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_ALL:
      return {
        ...state,
        selectDeleteIds: action.selectDeleteIds
      }
    case SELECT_ROW:
      return {
        ...state,
        selectDeleteIds: action.selectDeleteIds
      }
    case DELETE_ROW:
      return {
        ...state,
        rows: action.rows,
        selectDeleteIds: []
      }
    default:
      return state
  }
}
