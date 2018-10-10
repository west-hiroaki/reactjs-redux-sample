import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Router as ReachRouter } from '@reach/router'

import Header from '../components/Header'
import Home from '../components/Home'
import SideMenu from '../components/SideMenu'

import MessageBar from './MessageBar'
import ButtonSample from './sample/Button'
import LinkSample from './sample/Link'
import SwitchSample from './sample/Switch'

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
          <SwitchSample path="/sample/switch" />
          <ButtonSample path="/sample/button" />
          <LinkSample path="/sample/link" />
        </ReachRouter>
      </main>
    </div>
  )
}

Router.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Router)
