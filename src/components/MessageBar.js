import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing.unit
  }
})

const MessageBar = props => {
  const { classes, open, message, onClose, ...other } = props

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      autoHideDuration={5000}
      open={open}
      onClose={onClose}
    >
      <SnackbarContent
        className={classNames(classes['error'], classes.margin)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <ErrorIcon
              className={classNames(classes.icon, classes.iconVariant)}
            />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
        {...other}
      />
    </Snackbar>
  )
}

MessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default withStyles(styles)(MessageBar)
