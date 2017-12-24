import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateStandup} from '../actions/add_standup';
import Sidebar from '../components/sidebar';
import '../styles/index.css';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
    event.preventDefault();
    this.props.dispatch(UpdateStandup(this.state.standups))
    this.setState({
      standups: {
        user_id: '',
        day: '',
        work_done: '',
        work_planned: '',
        blocker: ''
      }
    })
  }

  handleChange = (event) => {
    const  {name, value} = event.target;
    const {standups} = this.state;
    this.setState({
      standups: {
        ...standups,
        [name]: value
      }
    });
  }

  render() {
    const {standups} = this.state
    return (
      <div>
        <Paper>
          <Typography>
            <h1 className='h3Style'>Create new Standup</h1>
          </Typography>
        </Paper>

        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Paper><Sidebar /></Paper>
          </Grid>

          <Grid item xs={18} sm={9}>
            <Paper className='form'>
              <TextField fullWidth
                          label='What did you work on yesterday?'
                          name="work_done"
                          value={standups.work_done}
                          onChange={this.handleChange}
              />
            </Paper>

            <Paper className='form'>
              <TextField fullWidth
                          label='What are you planning to work on today?'
                          name='work_planned'
                          value={standups.work_planned}
                          onChange={this.handleChange}
              />
            </Paper>

            <Paper className='form'>
              <TextField fullWidth
                          label='Any impediments in your way?'
                          name='blocker'
                          value={standups.blocker}
                          onChange={this.handleChange}
              />
            </Paper>

            <div className='button'>
              <Button onSubmit={this.handleSubmit} raised color='contrast'>Submit</Button>
              <Button raised color='contrast'>Cancel</Button>
            </div>

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
