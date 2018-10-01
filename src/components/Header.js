import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
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
      <ToolBar>
        {}
        <Typography
          className={classes.brand}
          variant="title"
          color="inherit"
          component={Link}
          to="/"
        >
          管理画面
        </Typography>
      </ToolBar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
