import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MessageBarComponent from '../components/MessageBar'
import { dismissMessage } from '../actions'

/** エラーメッセージを画面に表示する */
class MessageBar extends React.Component {
  /**
   * メッセージバーを閉じる時のフック
   */
  handleOnClose() {
    this.props.dispatch(dismissMessage())
  }

  /**
   * ここで描画する
   * @return {Object} メッセージバーコンポーネント
   */
  render() {
    const { open, message } = this.props
    return (
      <MessageBarComponent
        open={open}
        message={message}
        onClose={() => this.handleOnClose()}
      />
    )
  }
}

MessageBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
}

/**
 * @param {Object} state State
 * @return {Object} props props
 */
function mapStateToProps(state) {
  return {
    open: state.Message.message.open,
    message: state.Message.message.message
  }
}

export default connect(mapStateToProps)(MessageBar)
