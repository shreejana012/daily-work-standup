import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStandUp} from '../actions';
import Sidebar from '../components/sidebar';

import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import '../styles/index.css';

const divStyle = {
  padding: '10px',
}

const pStyle = {
  color: '#757575'
}

class StandUpIndex extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchStandUp();
  }

  renderStandup(){
    return (this.props.standups.map((list) => {
      return (
        <div style={divStyle}>
          <p key={list.id} style={pStyle}>{list.day}</p>
            <Paper className='listing'>
              <h4>What did you work on yesterday?</h4>
              {list.work_done}
              <h4>What are you planning to work on today?</h4>
              {list.work_planned}
              <h4>Any impediments in your way?</h4>
              {list.blocker}
            </Paper>
        </div>
      );
    }))
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Paper>
          <Typography>
            <h1 className='h3Style'>StandUps</h1>
          </Typography>
        </Paper>

        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Paper><Sidebar /></Paper>
          </Grid>
          <Grid item xs={18} sm={9}>
            <Paper>{typeof(this.props.standups) === 'undefined' ?
            <p>Loading</p> : <div>{this.renderStandup()}</div>}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {standups} = state.IndexStandup;
  return { standups };
}

export default connect(mapStateToProps, {fetchStandUp} )(StandUpIndex);
