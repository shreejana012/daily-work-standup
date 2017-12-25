import React, {Component} from 'react';
import Sidebar from '../components/sidebar';
import {connect} from 'react-redux';
import {showStandup} from '../actions/show_standup';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

class StandUpShow extends Component {
  componentDidMount(){
    if(!this.props.standup){
      this.props.showStandup(this.props.match.params.id)
    }
  }

  render() {
    const {standup} = this.props;
    if(!standup) {return (<p>Loading...</p>);}
    return (
      <div>
        <Paper>
          <Typography>
            <h1 className='h3Style'>StandUps of User</h1>
          </Typography>
        </Paper>

        <Grid container spacing={8}>
          <Grid item xs={6} sm={3}>
            <Paper><Sidebar /></Paper>
          </Grid>
          <Grid item xs={18} sm={9}>
            <Paper className='listing'>
              {
                typeof(standup) === 'undefined' ?
                <p>Loading</p> :
                <div>
                  {standup.day}
                  <h4>What did you work on yesterday?</h4>
                  {standup.work_done}
                  <h4>What are you planning to work on today?</h4>
                  {standup.work_planned}
                  <h4>Any impediments in your way?</h4>
                  {standup.blocker}
                </div>
              }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {standup} = state.ShowStandupReducer;
  return { standup };
}

export default connect(mapStateToProps, {showStandup})(StandUpShow);
