import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import NormalTableSampleComponent from '../../components/sample/table/NormalTable'
import SortTableSampleComponent from '../../components/sample/table/SortTable'
import Paper from '@material-ui/core/Paper'

import { changeSort } from '../../actions/sample/SortTable'

/**
 * テーブルサンプルを管理をするContainer
 */
class TableSample extends React.Component {
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
    // アクションなし
  }

  /**
   * リンククリック用のコールバック関数
   * これは自作関数（この関数が自作関数であることを分かりやすくするため、名前に強引に SelfMade を付けています）
   * @param {Object} event ボタンに渡されるイベント
   */
  async handleRowClick_SelfMade(event, category, masterName) {
    navigate(`/sample/table/${category}/${masterName}`)
  }

  /**
   * リンククリック用のコールバック関数
   * これは自作関数（この関数が自作関数であることを分かりやすくするため、名前に強引に SelfMade を付けています）
   * @param {Object} event ボタンに渡されるイベント
   */
  async onSortHandler_SelfMade(event, property) {
    const orderBy = property
    let order = 'desc'

    if (this.props.orderBy === property && this.props.order === 'desc') {
      order = 'asc'
    }

    console.log(`order=${order}, orderBy=${orderBy}`)

    this.props.dispatch(await changeSort(order, orderBy))
  }

  /**
   * ここで描画する
   */
  render() {
    return (
      <div>
        <Paper>
          <div>
            Tableタグの各要素は{' '}
            <a href="https://material-ui.com/api/table/">
              https://material-ui.com/api/table/
            </a>{' '}
            を参照
          </div>
        </Paper>

        <NormalTableSampleComponent
          handleRowClick={(event, category, masterName) =>
            this.handleRowClick_SelfMade(event, category, masterName)
          }
          rows={this.props.rows}
        />

        <SortTableSampleComponent
          onRequestSort={(event, property) =>
            this.onSortHandler_SelfMade(event, property)
          }
          rows={this.props.rows}
          order={this.props.order}
          orderBy={this.props.orderBy}
        />
      </div>
    )
  }
}

/**
 * @param {Object} state State
 * @return {Object} props Props
 */
function mapStateToProps(state) {
  const rows = [
    {
      category_name: 'category1',
      master_name: 'master1-1'
    },
    {
      category_name: 'category1',
      master_name: 'master1-2'
    },
    {
      category_name: 'category2',
      master_name: 'master2-1'
    },
    {
      category_name: 'category2',
      master_name: 'master2-2'
    }
  ]

  const aaa_bbb = 1

  return {
    rows: rows,
    order: state.TableSortStatus.order,
    orderBy: state.TableSortStatus.orderBy
  }
}

TableSample.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(TableSample)
