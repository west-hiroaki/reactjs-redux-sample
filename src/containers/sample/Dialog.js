import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DialogSampleComponent from '../../components/sample/Dialog'
import { showMessage } from '../../actions/index'
import { openDialog, closeDialog } from '../../actions/sample/Dialog'

/**
 * ダイアログサンプルContainer
 */
class DialogSample extends React.Component {
  /**
   * @constructor
   * @param {Object} props Props
   */
  constructor(props) {
    super(props)
  }

  /**
   * ダイアログオープンボタンクリック用のコールバック関数
   * @param {Object} event ボタンに渡されるイベント
   */
  async handleClickOpen(event) {
    this.props.dispatch(openDialog())
  }

  /**
   * ダイアログのOK、Cancel、範囲外クリック用のコールバック関数
   * @param {Object} event ボタンに渡されるイベント
   * @param {Object} actionState アクション文字列
   */
  async handleClose(event, actionState) {
    // メッセージ表示
    const msg = `${actionState} が押されたよ`
    this.props.dispatch(showMessage(msg))

    this.props.dispatch(closeDialog())
  }

  /**
   * ここで描画する
   * @return {Object} JSX（描画対象コンポーネント）
   */
  render() {
    const dialogApiUrl = 'https://material-ui.com/api/dialog'

    return (
      <div>
        <div>
          Dialogの各要素は
          <a href={dialogApiUrl}>{dialogApiUrl}</a>
          を参照
        </div>

        <DialogSampleComponent
          open={this.props.open}
          handleClickOpen={event => this.handleClickOpen(event)}
          handleClose={(event, actionState) =>
            this.handleClose(event, actionState)
          }
        />
      </div>
    )
  }
}

/**
 * State(redux用) から Props(react用) への変換
 * @param {Object} state State
 * @return {Object} props Props
 */
function mapStateToProps(state) {
  return {
    open: state.DialogStatus.open
  }
}

DialogSample.propTypes = {
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(DialogSample)
