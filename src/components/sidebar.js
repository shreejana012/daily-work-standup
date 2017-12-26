import React, { Component } from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <Paper>
          <List>
            <ListItem button>
              <Link className='link' to="/standups"><ListItemText primary="Index" /></Link>
            </ListItem><Divider />
            <ListItem button>
              <Link className='link' to="/standups/new"><ListItemText primary="New" /></Link>
            </ListItem><Divider />
            <ListItem button>
              <Link className='link' to="/standups/"><ListItemText primary="Show" /></Link></ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

export default Sidebar;
