/** Action Types */
export const OPEN = 'DIALOG_SAMPLE_OPEN'
export const CLOSE = 'DIALOG_SAMPLE_CLOSE'

/**
 * ボタンクリック時のカウントアップActionCreator
 * @return {Object} action
 */
export async function openDialog() {
  return {
    type: OPEN
  }
}

/**
 * ボタンクリック時のカウントアップActionCreator
 * @return {Object} action
 */
export async function closeDialog() {
  return {
    type: CLOSE
  }
}
