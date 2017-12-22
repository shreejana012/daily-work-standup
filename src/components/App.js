import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

class TextFields extends React.Component {
  render() {
    return (
      <form>
        <TextField
          id="uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          margin="normal"
        />
        <TextField
          error
          id="error"
          label="Error"
          defaultValue="Hello World"
          margin="normal"
        />
      </form>
    );
  }
}

export default (TextFields);
