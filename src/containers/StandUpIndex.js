import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStandUp} from '../actions';
import Sidebar from '../components/sidebar';

import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const h3Style = {
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#ECEFF1'
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
        <div>
          <Paper>
            <p key= {list.id} >{list.day} <br />
              <Typography>
                <p>What did you work on yesterday?</p>
                {list.work_done} <br />
                <p>What are you planning to work on today?</p>
                {list.work_planned}<br />
                <p>Any impediments in your way?</p>
                {list.blocker}
              </Typography>
            </p>
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
          <Typography type='headline'>
            <h3 style={h3Style}>StandUps</h3>
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

            {/* {typeof(this.props.standups) === 'undefined' ?
            <p>Loading</p> : <div>{this.renderStandup()}</div>} */}


      </div>
    );
    }
            }
function mapStateToProps(state){
    const {standups} = state.IndexStandup;
    return { standups };
}

// StandUpIndex.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps, {fetchStandUp} )(StandUpIndex);
