import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Router as ReachRouter } from '@reach/router'

import Header from '../components/Header'
import Home from '../components/Home'
import SideMenu from '../components/SideMenu'

import ButtonSample from './sample/Button'
import DialogSample from './sample/Dialog'
import LinkSample from './sample/Link'
import MessageBar from './MessageBar'
import SwitchSample from './sample/Switch'
import TableDetailSample from './sample/TableDetail'
import TableSample from './sample/Table'

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
          <TableSample path="/sample/table" />
          <TableDetailSample path="/sample/table/:category/:masterName" />
          <DialogSample path="/sample/dialog" />
        </ReachRouter>
      </main>
    </div>
  )
}

Router.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Router)
