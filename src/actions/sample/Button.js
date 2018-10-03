import {
  showMessage
} from '../index'

/** Action Types */
export const BUTTON_CLICK_COUNT_UP = 'BUTTON_CLICK_COUNT_UP'

/**
 * ボタンクリック時のカウントアップActionCreator
 * @return {Object} action
 */
export async function buttonClickCountUp() {
    return {
      type: BUTTON_CLICK_COUNT_UP
    }
}
