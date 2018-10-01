import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Router as ReachRouter } from '@reach/router'
import MessageBar from './MessageBar'
import Header from '../components/Header'
import Home from '../components/Home'
import SideMenu from '../components/SideMenu'

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
})

const Router = props => {
  const { classes } = props
  return (
    <div style={{ display: 'flex' }}>
      <MessageBar />
      <Header />
      <SideMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ReachRouter>
          <Home path="/" />
          <Home path="/home" />
        </ReachRouter>
      </main>
    </div>
  )
}

Router.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Router)
