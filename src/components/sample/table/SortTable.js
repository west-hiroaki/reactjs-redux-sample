import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const titles = [
  {
    id: 'category_name',
    numeric: false,
    disablePadding: false,
    label: 'カテゴリ'
  },
  { id: 'master_name', numeric: false, disablePadding: false, label: 'マスタ' }
]

/**
 * @param {array} array
 * @param {number} cmp
 * @return {array}
 */
function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

/**
 * @param {Object} a
 * @param {Object} b
 * @param {string} orderBy
 * @return {number}
 */
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

/**
 * @param {string} order
 * @param {string} orderBy
 * @return {number}
 */
function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}

const TableSample = props => {
  const { onRequestSort, classes, rows, order, orderBy } = props

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="subheading">ソートできるTable</Typography>

        <Table>
          <TableHead>
            <TableRow>
              {titles.map(row => {
                return (
                  <TableCell
                    key={row.id}
                    numeric={row.numeric}
                    padding={row.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === row.id ? order : false}
                  >
                    <Tooltip
                      title="Sort"
                      placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={event => onRequestSort(event, row.id)}
                      >
                        {row.label}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getSorting(order, orderBy)).map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{row.category_name}</TableCell>
                  <TableCell>{row.master_name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

TableSample.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
}

export default withStyles(styles)(TableSample)
