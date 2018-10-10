import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Link } from '@reach/router'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const LinkSample = props => {
  const { classes, label, to } = props
  return (
    <div>
      <Link to={to}>
        {label}
      </Link>
    </div>
  )
}

LinkSample.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default withStyles(styles)(LinkSample)
