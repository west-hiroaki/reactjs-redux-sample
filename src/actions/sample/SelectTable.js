/** Action Types */
export const SELECT_ALL = 'SELECT_TABLE_SELECT_ALL'
export const SELECT_ROW = 'SELECT_TABLE_SELECT_ROW'
export const DELETE_ROW = 'SELECT_TABLE_DELETE_ROW'

/**
 * 行選択状態の切り替えを行うActionCreator
 * @param {array} selectDeleteIds
 * @return {Object} action
 */
export async function selectRow(selectDeleteIds) {
  return {
    type: SELECT_ROW,
    selectDeleteIds: selectDeleteIds
  }
}

/**
 * 行削除処理を行うActionCreator
 * @param {array} selectDeleteIds
 * @param {array} rows
 * @return {Object} action
 */
export async function deleteRow(selectDeleteIds, rows) {
  for (let deleteId of selectDeleteIds) {
    let index = 0

    for (let row of rows) {
      if (row['id'] === deleteId) {
        rows.splice(index, 1)
        break
      }

      index++
    }
  }

  return {
    type: DELETE_ROW,
    rows: rows
  }
}
