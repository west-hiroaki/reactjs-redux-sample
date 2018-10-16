import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from '@reach/router'

import Alarm from '@material-ui/icons/alarm'
import LinkIcon from '@material-ui/icons/link'

const drawerWidth = 240

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
})
const SideMenu = props => {
  const { classes } = props

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.toolbar} />

      <List component="nav">
        <ListItem button key="root" component={Link} to="/">
          <ListItemIcon>
            <Alarm />
          </ListItemIcon>
          <ListItemText primary="Home(ルートURL)" />
        </ListItem>
        <ListItem button key="home" component={Link} to="/home">
          <ListItemIcon>
            <Alarm />
          </ListItemIcon>
          <ListItemText primary="Home(違うURL)" />
        </ListItem>
        <ListItem
          button
          key="switch_sample"
          component={Link}
          to="/sample/switch"
        >
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Switch サンプル" />
        </ListItem>
        <ListItem
          button
          key="button_sample"
          component={Link}
          to="/sample/button"
        >
          <ListItemText primary="Button サンプル" />
        </ListItem>
        <ListItem
          button
          key="link_sample"
          component={Link}
          to="/sample/link"
        >
          <ListItemText primary="Link サンプル" />
        </ListItem>
        <ListItem
          button
          key="table_sample"
          component={Link}
          to="/sample/table"
        >
          <ListItemText primary="Table サンプル" />
        </ListItem>
        <ListItem
          button
          key="dialog_sample"
          component={Link}
          to="/sample/dialog"
        >
          <ListItemText primary="Dialog サンプル" />
        </ListItem>
      </List>

      <Divider />

      <List component="nav">
        <ListItem button key="icons_list">
          <a
            target="_blank"
            href="https://material.io/tools/icons/?style=baseline"
          >
            参考 アイコン一覧
          </a>
        </ListItem>
      </List>
    </Drawer>
  )
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideMenu)
