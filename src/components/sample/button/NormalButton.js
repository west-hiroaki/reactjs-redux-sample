/**
 * Normalボタンサンプル用コンポーネント
 * @see https://material-ui.com/api/button/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const NormalButtonSample = props => {
  const { name, handleClick_SelfMade } = props
  return (
    <span>
      <Button
        data-name={name}
        variant="outlined"
        color="inherit"
        onClick={handleClick_SelfMade}
      >{name}</Button>
    </span>
  )
}

NormalButtonSample.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick_SelfMade: PropTypes.func.isRequired
}

export default withStyles(styles)(NormalButtonSample)
