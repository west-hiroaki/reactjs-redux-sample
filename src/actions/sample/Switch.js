import {
  showMessage
} from '../index'

/** Action Types */
export const FETCH_SWITCH_SAMPLE_STATUS = 'FETCH_SWITCH_SAMPLE_STATUS'
export const REQUEST_SWITCH_SAMPLE_ENABLE = 'REQUEST_SWITCH_SAMPLE_ENABLE'
export const REQUEST_SWITCH_SAMPLE_DISABLE = 'REQUEST_SWITCH_SAMPLE_DISABLE'

/**
 * Switchの状態を取得するActionCreator
 *
 * Switchサンプル画面の初期ロード時にアクセスして（したテイにして）、
 * スイッチのON/OFFを設定する
 * @return {Object} action
 */
export async function fetchSwitchSampleStatus() {
  try {
    var result = true;  // 本当はここで現在保存されている値を取得してくるイメージ

    return {
      type: FETCH_SWITCH_SAMPLE_STATUS,
      result_checked: result
    }
  } catch (err) {
    return showMessage(err.message)
  }
}

/**
 * Switchの状態を有効にするActionCreator
 *
 * @return {Object} action
 */
export async function requestSwitchSampleEnable() {
  try {
    return {
      type: REQUEST_SWITCH_SAMPLE_ENABLE
    }
  } catch (err) {
    return showMessage(err.message)
  }
}

/**
 * Switchの状態を無効にするActionCreator
 *
 * @return {Object} action
 */
export async function requestSwitchSampleDisable() {
  try {
    return {
      type: REQUEST_SWITCH_SAMPLE_DISABLE
    }
  } catch (err) {
    return showMessage(err.message)
  }
}
