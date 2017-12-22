import React, {Component} from 'react';
import Sidebar from '../components/sidebar';

import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

export default class StandUpShow extends Component {
  render() {
    return (
      <div>
        <Paper>
          <Typography>
            <h1 className='h3Style'>StandUps of User</h1>
          </Typography>
        </Paper>

        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Paper><Sidebar /></Paper>
          </Grid>
          <Grid item xs={18} sm={9}>
            <Paper>
              Listing Standup of a user
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
