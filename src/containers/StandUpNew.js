import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateStandup} from '../actions/add_standup';
import Sidebar from '../components/sidebar';
import '../styles/index.css';

// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';

const h3Style = {
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#ECEFF1'
}

const paperStyle ={
  color: 'red'
}

class StandUpNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      standups: {
        user_id: '',
        day: '',
        work_done: '',
        work_planned: '',
        blocker: ''
      }
    };
  }

  handleSubmit = (event)=> {
    this.props.dispatch(UpdateStandup(this.state.standups))
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      standups: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Paper>
          <Typography type='headline'>
            <h3 style={h3Style}>Create new Standup</h3>
          </Typography>
        </Paper>

        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Paper><Sidebar /></Paper>
          </Grid>

          <Grid item xs={18} sm={9}>
            <Paper className='form'>
              <FormControl fullWidth onSubmit={this.handleSubmit}>
                <InputLabel>What did you work on yesterday?</InputLabel>
                <Input value={this.state.standups.day} onChange={this.handleChange} />
              </FormControl>
            </Paper>

            <Paper>
              <FormControl fullWidth>
                <InputLabel>What are you planning to work on today?</InputLabel>
                <Input value={this.state.standups.work_done} onChange={this.handleChange} />
              </FormControl>
            </Paper>

            <Paper>
              <FormControl fullWidth>
                <InputLabel>Any impediments in your way?</InputLabel>
                <Input value={this.state.standups.work_planned} onChange={this.handleChange} />
              </FormControl>
            </Paper>

            <Paper>
              <Button raised color='contrast'>Submit</Button>
              <Button raised color='contrast'>Cancel</Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    standups: state.standups
  }
}

export default connect(mapStateToProps)(StandUpNew);
