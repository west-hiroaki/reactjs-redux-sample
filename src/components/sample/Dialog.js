import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

/**
 * ダイアログを画面下から上に表示させる
 * @param {Object} props Props
 * @return {Object} JSX
 */
function Transition(props) {
  // "...props" は props の全てを渡すということ
  return <Slide direction="up" {...props} />
}

const DialogSample = props => {
  const { classes, open, handleClickOpen, handleClose } = props

  return (
    <div className={classes.root}>
      <Button color="primary" variant="raised" onClick={handleClickOpen}>
        ボタンを押すとダイアログ表示
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={event => handleClose(event, 'ダイアログ外')}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'ダイアログサンプル'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {'これはサンプルだよ'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={event => handleClose(event, 'OKボタン')}
            variant="raised"
            color="primary"
          >
            OK
          </Button>
          <Button
            onClick={event => handleClose(event, 'Cancelボタン')}
            variant="outlined"
            color="default"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

DialogSample.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default withStyles(styles)(DialogSample)
