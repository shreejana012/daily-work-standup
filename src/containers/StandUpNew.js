import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateStandup} from '../actions/add_standup';
import { MuiThemeProvider } from 'material-ui/styles';
import {Grid, Button, Typography} from 'material-ui';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Sidebar from '../components/sidebar';
import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';

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
    return(
      <MuiThemeProvider>
        <Paper>
          <h1 className='h3Style'>Create New Stand up</h1>
        </Paper>

        <Grid container>
          <Grid item sm={0.5} xs={1}></Grid>
          <Grid item sm={2} xs={12}>
            <Sidebar />
          </Grid>

          <Grid item sm={6} xs={12}>
            <form>
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
              </Paper>

              <Paper className='form'>
                <TextField fullWidth name= "work_planned" value = {standups.work_planned} onChange= {this.handleChange} type= "text" placeholder= "What are you planning to work on today?"/>
              </Paper>
              <Paper className='form'>
                <TextField fullWidth name= "blocker" value = {standups.blocker} onChange= {this.handleChange} type= "text" placeholder= "Any impediments in your way?"/>
              </Paper>
              <div className='button'>
                <Button onSubmit={this.handleSubmit} type="submit">Submit</Button>
                <Button>Cancel</Button>
              </div>
            </form>
          </Grid>
          <Grid item sm={2} xs={12}>
            <Card>
              <CardContent>
                <Typography type="headline">Calendar</Typography>
                <Typography type="subheading">Date</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={0.5} xs={1}></Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }

}

export default StandUpNew;
