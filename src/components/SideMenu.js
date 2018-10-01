import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from '@reach/router'

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
      <List>
        <ListItem button key="home" component={Link} to="/">
          <ListItemText primary="Home(ルートURL)" />
        </ListItem>
        <ListItem button key="home" component={Link} to="/home">
          <ListItemText primary="Home(違うURL)" />
        </ListItem>
      </List>
    </Drawer>
  )
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideMenu)