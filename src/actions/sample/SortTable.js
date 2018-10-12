import { showMessage } from '../index'

/** Action Types */
export const CHANGE_SORT = 'SORT_TABLE_CHANGE_SORT'

/**
 * カテゴリタブの切り替えを行うActionCreator
 * @param {number} categoryTabIndex
 * @return {Object} action
 */
export async function changeSort(order, orderBy) {
  return {
    type: CHANGE_SORT,
    order: order,
    orderBy: orderBy
  }
}
