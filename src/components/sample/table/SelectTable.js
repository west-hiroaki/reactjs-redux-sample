import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import { lighten } from '@material-ui/core/styles/colorManipulator'

const toolbarStyles = theme => ({
  title: {
    flex: '0 0 auto'
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  header: theme.mixins.gutters({
    paddingRight: theme.spacing.unit
  })
})

let EnhancedTableToolbar = props => {
  const { classes, onRowDeleteClick, numSelected } = props

  return (
    <Toolbar
      className={classNames(classes.header, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} 行選択
          </Typography>
        ) : (
          <Typography variant="subheading" id="tableTitle">
            行を選択 -> 削除できるTable
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon onClick={onRowDeleteClick} />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  onRowDeleteClick: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired
}

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar)

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const TableSample = props => {
  const {
    onSelectAllClick,
    onSelectRowClick,
    onRowDeleteClick,
    classes,
    selectDeleteIds,
    rows
  } = props

  const numSelected = selectDeleteIds.length
  const rowCount = rows.length

  return (
    <div>
      <Paper className={classes.root}>
        <EnhancedTableToolbar
          numSelected={numSelected}
          onRowDeleteClick={onRowDeleteClick}
        />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={numSelected === rowCount}
                  onChange={onSelectAllClick}
                />
              </TableCell>
              <TableCell>id</TableCell>
              <TableCell>カテゴリ</TableCell>
              <TableCell>マスタ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              // 対象行のidが選択状態になっているか？
              const isSelected = selectDeleteIds.indexOf(row.id) !== -1

              return (
                <TableRow
                  key={index}
                  hover
                  aria-checked={isSelected}
                  selected={isSelected}
                  tabIndex={-1}
                  onClick={event => onSelectRowClick(event, row.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
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
  classes: PropTypes.object.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  onSelectRowClick: PropTypes.func.isRequired,
  onRowDeleteClick: PropTypes.func.isRequired,
  selectDeleteIds: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
}

export default withStyles(styles)(TableSample)
