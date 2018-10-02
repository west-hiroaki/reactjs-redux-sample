import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const SwitchSample = props => {
  const { classes, checked, handleChange } = props
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography>スイッチオブジェクトの動作テストをする画面だよ</Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                value="checked"
              />
            }
            label={checked ? '有効中' : '無効中'}
          />
        </FormGroup>
      </Paper>
    </div>
  )
}

SwitchSample.propTypes = {
  classes: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default withStyles(styles)(SwitchSample)
