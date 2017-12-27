import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateStandup} from '../actions/add_standup';
import Sidebar from '../components/sidebar';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})

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
        blocker: '',
        submitted: false
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
      <MuiThemeProvider theme={theme}>
      <div>
        <Paper>
          <Typography>
            <h1 className='h3Style'>Create New Standup</h1>
          </Typography>
        </Paper>

        <Grid container spacing={8}>
          <Grid item xs={3} sm={3}>
            <Sidebar />
          </Grid>

          <Grid item xs={9} sm={9}>
            <form onSubmit={this.handleSubmit} >
              {/* <Paper>
                <TextField fullWidth name= "user_id" value = {standups.user_id} onChange= {this.handleChange} type= "text" placeholder= "user_id"/>
              </Paper>
              <Paper>
                <TextField fullWidth name= "day" value = {standups.day} onChange= {this.handleChange} type= "text" placeholder= "Day"/>
              </Paper> */}
              <Paper className='form'>
                <TextField fullWidth name= "work_done"
                  value = {standups.work_done}
                  onChange= {this.handleChange}
                  type= "text"
                  placeholder= "What did you work on yesterday?"/>
                  {this.submitted && !this.work_done && <div>Work done is required</div>}
              </Paper>

              <Paper className='form'>
                <TextField fullWidth name= "work_planned" value = {standups.work_planned} onChange= {this.handleChange} type= "text" placeholder= "What are you planning to work on today?"/>
              </Paper>
              <Paper className='form'>
                <TextField fullWidth name= "blocker" value = {standups.blocker} onChange= {this.handleChange} type= "text" placeholder= "Any impediments in your way?"/>
              </Paper>
              <div className='button'>
                <Button type="submit">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state){
  return{
    standups: state.standups
  }
}

export default connect(mapStateToProps)(StandUpNew);
