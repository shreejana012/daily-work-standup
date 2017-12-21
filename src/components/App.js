import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

function FullWidthGrid(props) {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FullWidthGrid;
