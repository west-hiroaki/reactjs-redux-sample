import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SwitchSampleComponent from '../../components/sample/Switch'
import { showMessage } from '../../actions/index'
import {
  fetchSwitchSampleStatus,
  requestSwitchSampleEnable,
  requestSwitchSampleDisable
} from '../../actions/sample/Switch'

/**
 * スイッチの状態を管理をするContainer
 */
class SwitchSample extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
  }

  /**
   * 初期化された時に呼ばれるライフサイクルイベント
   * トグルスイッチの状態を設定する。
   */
  componentDidMount() {
    this.props.dispatch(fetchSwitchSampleStatus())
  }

  /**
   * スイッチON/OFF用のトグルスイッチのコールバック
   * @see https://material-ui.com/api/switch/
   * @param {Object} event スイッチに渡されるイベント
   * @param {boolean} checked スイッチの状態
   */
  handleChange(event, checked) {
    if (checked) {
      // スイッチがONになった場合はEnableのイベントを発行する
      this.props.dispatch(requestSwitchSampleEnable())
      // メッセージ表示
      this.props.dispatch(showMessage('Enabled.'))
    } else {
      // スイッチがOFFになった場合はDisableのイベントを発行する
      this.props.dispatch(requestSwitchSampleDisable())
      // メッセージ表示
      this.props.dispatch(showMessage('Disabled.'))
    }
  }

  /**
   * ここで描画する
   * @return {Object} スイッチコンポーネント
   */
  render() {
    return (
      <SwitchSampleComponent
        checked={this.props.checked}
        handleChange={(event, checked) => this.handleChange(event, checked)}
      />
    )
  }
}

/**
 * @param {Object} state State
 * @return {Object} props props
 */
function mapStateToProps(state) {
  return {
    checked: state.SwitchStatus.switch_status.checked
  }
}

SwitchSample.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(SwitchSample)
