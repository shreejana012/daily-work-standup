import React, { Component } from 'react';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

const divStyle = {
  // marginTop: '5px',
};

class Sidebar extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Paper>
          <MenuList>
            <MenuItem>
              <Link to="/standups">Index</Link></MenuItem>
            <MenuItem>
              <Link to="/standups/new">Create</Link></MenuItem>
            <MenuItem>
              <Link to="/standups/show">Show</Link></MenuItem>
          </MenuList>
        </Paper>
      </div>
    );
  }
}

export default Sidebar;
