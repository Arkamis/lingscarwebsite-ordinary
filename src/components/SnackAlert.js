import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

function SnackAlert(props) {
  const { onClose, message, severity, open } = props;

    return (
    <Snackbar open={open} onClose={onClose}>
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

SnackAlert.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  open: PropTypes.bool
}

export default SnackAlert

