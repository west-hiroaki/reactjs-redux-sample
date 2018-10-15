import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'

import NormalTableSampleComponent from '../../components/sample/table/NormalTable'
import SelectTableSampleComponent from '../../components/sample/table/SelectTable'
import SortTableSampleComponent from '../../components/sample/table/SortTable'

import { selectRow, deleteRow } from '../../actions/sample/SelectTable'
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
   * @param {string} category カテゴリ名
   * @param {string} masterName マスタ名
   */
  async handleRowClickSelfMade(event, category, masterName) {
    navigate(`/sample/table/${category}/${masterName}`)
  }

  /**
   * 列ヘッダのソートクリック用のコールバック関数
   * これは自作関数（この関数が自作関数であることを分かりやすくするため、名前に強引に SelfMade を付けています）
   * @param {Object} event ボタンに渡されるイベント
   * @param {string} property ソート対象ヘッダ文字列（このサンプルの場合、'category_name' or 'master_name'）
   */
  async onSortHandlerSelfMade(event, property) {
    const orderBy = property
    let order = 'desc'

    if (this.props.orderBy === property && this.props.order === 'desc') {
      order = 'asc'
    }

    console.log(`order=${order}, orderBy=${orderBy}`)

    this.props.dispatch(await changeSort(order, orderBy))
  }

  /**
   * Tableの一括選択・解除クリック用のコールバック関数
   * @param {Object} event 渡されるイベント
   */
  async onSelectAllClick(event) {
    if (event.target.checked) {
      // 全チェック
      const selectDeleteIds = this.props.rows.map(n => n.id)
      this.props.dispatch(await selectRow(selectDeleteIds))
      return
    }

    // 全チェック解除
    this.props.dispatch(await selectRow([]))
  }

  /**
   * Table行クリック用のコールバック関数
   * @param {Object} event 渡されるイベント
   * @param {number} id クリック対象行データのid（データを特定できる何か）
   */
  async onSelectRowClick(event, id) {
    const { selectDeleteIds } = this.props

    // チェック前の選択状況を取得
    const selectedIndex = selectDeleteIds.indexOf(id)

    let newSelected = []

    if (selectedIndex === -1) {
      // 未チェックの行だった場合は追加
      newSelected = newSelected.concat(selectDeleteIds, id)
    } else if (selectedIndex === 0) {
      // チェックされていた場合。かつ、一番上の行の場合。0indexのみ省く
      newSelected = newSelected.concat(selectDeleteIds.slice(1))
    } else if (selectedIndex === selectDeleteIds.length - 1) {
      // チェックされていた場合。かつ、一番下の行の場合。最後の行indexのみ省く
      newSelected = newSelected.concat(selectDeleteIds.slice(0, -1))
    } else if (selectedIndex > 0) {
      // チェックされていた場合。かつ、中間行の場合。
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    // 状態変更
    this.props.dispatch(await selectRow(newSelected))
  }

  /**
   * 行削除アイコンクリック用のコールバック関数
   * @param {Object} event 渡されるイベント
   */
  async onRowDeleteClick(event) {
    const { selectDeleteIds, rows } = this.props
    this.props.dispatch(await deleteRow(selectDeleteIds, rows))
  }

  /**
   * ここで描画する
   * @return {Object} 描画対象コンポーネント
   */
  render() {
    return (
      <div>
        <Paper>
          <div>
            Tableタグの各要素は
            <a href="https://material-ui.com/api/table/">
              https://material-ui.com/api/table/
            </a>{' '}
            を参照
          </div>
        </Paper>

        <NormalTableSampleComponent
          handleRowClick={(event, category, masterName) =>
            this.handleRowClickSelfMade(event, category, masterName)
          }
          rows={this.props.rows}
        />

        <SortTableSampleComponent
          onRequestSort={(event, property) =>
            this.onSortHandlerSelfMade(event, property)
          }
          columns={this.props.columns}
          rows={this.props.rows}
          order={this.props.order}
          orderBy={this.props.orderBy}
        />

        <SelectTableSampleComponent
          onSelectAllClick={event => this.onSelectAllClick(event)}
          onSelectRowClick={(event, id) => this.onSelectRowClick(event, id)}
          onRowDeleteClick={(event, id) => this.onRowDeleteClick(event, id)}
          selectDeleteIds={this.props.selectDeleteIds}
          rows={this.props.rows}
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
  return {
    columns: state.TableSelectStatus.columns,
    rows: state.TableSelectStatus.rows,
    selectDeleteIds: state.TableSelectStatus.selectDeleteIds,
    order: state.TableSortStatus.order,
    orderBy: state.TableSortStatus.orderBy
  }
}

TableSample.propTypes = {
  dispatch: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  selectDeleteIds: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(TableSample)
