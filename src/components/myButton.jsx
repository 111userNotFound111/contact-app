import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

export default function MyButton (props) {
  const { text, onClick, disabled, style } = props;
  return (
    <Button title="click me" variant="contained" color="primary" disabled={disabled}

    style={{ margin: '10px', ...style }} onClick={onClick}>{text}</Button>
  );
}
MyButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
