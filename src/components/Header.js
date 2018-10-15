import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from '@reach/router'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  brand: {
    textDecoration: 'none'
  }
})

const Header = props => {
  const { classes } = props

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        {}
        <Typography
          className={classes.brand}
          variant="title"
          color="inherit"
          component={Link}
          to="/"
        >
          ReactJS、Reduxサンプル
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
