/**
 * Normalボタンサンプル用コンポーネント
 * @see https://material-ui.com/api/button/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const NormalButtonSample = props => {
  const { name, handleClickSelfMade } = props
  return (
    <span>
      <Button
        data-name={name}
        variant="outlined"
        color="inherit"
        onClick={handleClickSelfMade}
      >
        {name}
      </Button>
    </span>
  )
}

NormalButtonSample.propTypes = {
  name: PropTypes.string.isRequired,
  handleClickSelfMade: PropTypes.func.isRequired
}

export default withStyles(styles)(NormalButtonSample)
