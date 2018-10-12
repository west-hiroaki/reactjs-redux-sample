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

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const TableSample = props => {
  const { handleRowClick, classes, rows } = props
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="subheading">
          行をタップできるTable. 行をタップするとパラメータをメッセージ表示
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>カテゴリ</TableCell>
              <TableCell>マスタ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  hover
                  onClick={event =>
                    handleRowClick(event, row.category_name, row.master_name)
                  }
                >
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
  handleRowClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired
}

export default withStyles(styles)(TableSample)
