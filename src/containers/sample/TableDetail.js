import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from '@reach/router'
import { showMessage } from '../../actions/index'

/**
 * テーブルサンプルから遷移してパラメータをメッセージ表示するContainer
 */
class TableDetailSample extends React.Component {
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
    // 動的URLからパラメータ値を取得
    // <TableDetailSample path="/sample/table/:category/:masterName" />
    const category = this.props.category
    const masterName = this.props.masterName

    const message = `Click! category=${category}, masterName=${masterName}`
    this.props.dispatch(showMessage(message))
  }

  /**
   * ここで描画する
   * @return {Object} JSX（描画対象コンポーネント）
   */
  render() {
    return (
      <div>
        <div>
          カテゴリ：
          {this.props.category}
        </div>
        <div>
          マスタ　：
          {this.props.masterName}
        </div>
        <Link to="/sample/table">戻る</Link>
      </div>
    )
  }
}

/**
 * @param {Object} state State
 * @return {Object} props Props
 */
function mapStateToProps(state) {
  return { state }
}

TableDetailSample.propTypes = {
  dispatch: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  masterName: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(TableDetailSample)
