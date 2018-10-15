import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import LinkSampleComponent from '../../components/sample/Link'

/**
 * リンクを管理をするContainer
 */
class LinkSample extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props)
  }

  /**
   * 初期化された時に呼ばれるライフサイクルイベント
   */
  componentDidMount() {
    // action 不要
  }

  /**
   * リンククリック用のコールバック関数
   * これは自作関数（この関数が自作関数であることを分かりやすくするため、名前に強引に SelfMade を付けています）
   * @param {Object} event ボタンに渡されるイベント
   */
  async handleClickSelfMade(event) {
    // ホーム画面に遷移させる
    navigate('/home')
  }

  /**
   * ここで描画する
   * @return {Object} JSX（描画対象コンポーネント）
   */
  render() {
    return (
      <div>
        <div>
          Linkタグの各要素は
          <a href="https://reach.tech/router/api/Link">
            https://reach.tech/router/api/Link
          </a>
          を参照
        </div>

        <ul>
          <li>
            Linkタグサンプル（通常パターン）
            <LinkSampleComponent
              to="/home"
              label="このリンクはhrefで遷移（Linkタグを使用）"
            />
          </li>
          <li>
            <div>サンプル2：hrefを潰して onClickイベントで遷移するパターン</div>
            <div>
              本当はLinkタグを使いたいが、toが必須で無効にする記述がなさそう。onClickを付与しても先に走った後にtoが適用されるらしくうまく遷移できない
            </div>
            <a href="javascript:void(0)" onClick={this.handleClickSelfMade}>
              このリンクはイベント経由で遷移（aタグを使用）
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

/**
 * @param {Object} state State
 * @return {Object} props props
 */
function mapStateToProps(state) {
  return { state }
}

LinkSample.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(LinkSample)
