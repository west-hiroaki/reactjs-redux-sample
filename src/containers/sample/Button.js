import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NormalButtonComponent from '../../components/sample/button/NormalButton'
import SubmitButtonComponent from '../../components/sample/button/SubmitButton'
import { showMessage } from '../../actions/index'
import { buttonClickCountUp } from '../../actions/sample/Button'

/**
 * ボタンの状態を管理をするContainer
 */
class ButtonSample extends React.Component {
  /**
   * @constructor
   * @param {Object} props Props
   */
  constructor(props) {
    super(props)
  }

  /**
   * ボタンクリック用のコールバック関数
   * これは自作関数（この関数が自作関数であることを分かりやすくするため、名前に強引に SelfMade を付けています）
   * @param {Object} event ボタンに渡されるイベント
   */
  async handleClickSelfMade(event) {
    let name = event.currentTarget.getAttribute('data-name')

    // ボタンクリック回数カウントアップアクション発動
    // そして終わるまで待つ（awaitを付けているので）
    this.props.dispatch(await buttonClickCountUp())

    // メッセージ表示
    let msg = `[ ${name} ] button click! counter=${this.props.counter}`
    this.props.dispatch(showMessage(msg))
  }

  /**
   * ここで描画する
   * かつ、コンポーネントの `handleClickSelfMade` に関数を割り当てる
   * @return {Object} ボタンコンポーネント
   */
  render() {
    return (
      <div>
        <div>
          ボタンを押すと、カウントアップされていくサンプル（カウントは全ボタンで共有）
        </div>
        <div>
          今のカウント：
          {this.props.counter}
        </div>
        <div>
          ボタンの各要素は{' '}
          <a href="https://material-ui.com/api/button/">
            https://material-ui.com/api/button/
          </a>{' '}
          を参照
        </div>

        <SubmitButtonComponent
          name="button1"
          handleClickSelfMade={event => this.handleClickSelfMade(event)}
        />
        <SubmitButtonComponent
          name="button2"
          handleClickSelfMade={event => this.handleClickSelfMade(event)}
        />
        <NormalButtonComponent
          name="button3"
          handleClickSelfMade={event => this.handleClickSelfMade(event)}
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
    counter: state.ButtonStatus.counter
  }
}

ButtonSample.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(ButtonSample)
