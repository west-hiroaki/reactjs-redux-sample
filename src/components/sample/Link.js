import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from '@reach/router'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const LinkSample = props => {
  const { label, to } = props
  return (
    <div>
      <Link to={to}>{label}</Link>
    </div>
  )
}

LinkSample.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default withStyles(styles)(LinkSample)
