/** Action Types */
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE'

/**
 * メッセージを表示するActionCreator
 *
 * @param {String} message
 * @return {Object} action
 */
export function showMessage(message) {
  return {
    type: SHOW_MESSAGE,
    message: message
  }
}

/**
 * メッセージを非表示にするActionCreator
 *
 * @return {Object} action
 */
export function dismissMessage() {
  return {
    type: DISMISS_MESSAGE
  }
}
