import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateStandup} from '../actions/add_standup';
import Sidebar from '../components/sidebar';
import '../styles/index.css';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl, FormHelperText } from 'material-ui/Form';
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
                          label="Uncontrolled"
                defaultValue="foo"
                margin="normal"
              />
              {/* <FormControl fullWidth>
                <InputLabel htmlFor='custom-color-input'>What did you work on yesterday?</InputLabel>
                <Input name="work_done" value={standups.work_done} onChange={this.handleChange} />
              </FormControl> */}
            </Paper>

            {/* <Paper className='form'>
              <FormControl fullWidth>
                <InputLabel>What are you planning to work on today?</InputLabel>
                <Input name="work_planned" value={standups.work_planned} onChange={this.handleChange} />
              </FormControl>
            </Paper>

            <Paper className='form'>
              <FormControl fullWidth>
                <InputLabel>Any impediments in your way?</InputLabel>
                <Input name="blocker" value={standups.blocker} onChange={this.handleChange} />
              </FormControl>
            </Paper>

            <div className='button'>
              <Button onSubmit={this.handleSubmit} raised color='contrast'>Submit</Button>
              <Button raised color='contrast'>Cancel</Button>
            </div> */}

            {/* <Paper className='form'>
              <FormControl fullWidth>
                <InputLabel>User Id</InputLabel>
                <Input name= "user_id" value={standups.user_id} onChange={this.handleChange} />
              </FormControl>
            </Paper>

            <Paper className='form'>
              <FormControl fullWidth>
                <InputLabel>Day</InputLabel>
                <Input name= "day" value={standups.day} onChange={this.handleChange} />
              </FormControl>
            </Paper> */}
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
