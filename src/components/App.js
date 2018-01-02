import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import {Grid, Button, Typography} from 'material-ui';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Sidebar from './sidebar';
// import Paper from 'material-ui/Paper';

class App extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Grid container>
          <Grid item sm={3} xs={12}>
            <Sidebar />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography type="headline">Title</Typography>
                <Typography type="subheading">Location</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card>
              <CardContent>
                <Typography type="headline">Title</Typography>
                <Typography type="subheading">Location</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }

}

export default App;
