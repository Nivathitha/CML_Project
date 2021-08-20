
import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    margin: 25
  },
  center: {
    align: 'center',
    marginTop: 40,
  }

});


class NameForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {

    axios.post(' https://e25cfc77b2.execute-api.us-east-1.amazonaws.com/modelApi', [
      {
        "Gender": "Male",
        "Customer": "Loyal Customer",
        "Age": "13",
        "Type of Travel": "Personal Travel",
        "Class": "Eco Plus",
        "Inflight wifi service": 3,
        "Departure/Arrival time convenient": 4,
        "Ease of Online booking": 3,
        "Gate location": 1,
        "Food and drink": 5,
        "Online boarding": 3,
        "Seat comfort": 5,
        "Inflight entertainment": 5,
        "On-board service": 4,
        "Leg room service": 3,
        "Baggage handling": 4,
        "Checkin service": 4,
        "Inflight service": 5,
        "Cleanliness": 5,
        "Departure Delay in Minutes": 25
      }
    ])
      .then(function (response) {
        alert('Predicted Value from Model : ' + response.data);
        console.log(response);
      })


  }

  render() {
    const { classes } = this.props;

    return (

      <form className={classes.root} noValidate autoComplete="off" >
        <Typography align='center' variant="h3">
          Airline Customer Satisfaction Prediction
        </Typography>

        <Typography align='center' variant="h6">
          Rate the services from 1 to 5
        </Typography>


        <Grid
          container
          direction="row"
          justify="space-evenly"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-evenly"
            >
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Gender" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Customer" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Age" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Type of Travel" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Class" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>


            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-evenly"
            >
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Inflight wifi service" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Departure/Arrival time convenient" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Ease of Online booking" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Gate location" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Food and drink" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>


            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-evenly"
            >
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Online boarding" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Seat comfort" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Inflight entertainment" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="On-board service" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Leg room service" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>


            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-evenly"
            >
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Baggage handling" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Checkin service" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Inflight service" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Cleanliness" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>
              <Grid item>
                <TextField className={classes.center} id="outlined-basic" label="Departure Delay in Minutes" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              </Grid>


            </Grid>
            </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >

              <Grid item xs={3}>
                <Button className={classes.center} onClick={() => this.handleSubmit()} variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>

            </Grid>
      </form>
          );
  }
}

          NameForm.propTypes = {
            classes: PropTypes.object.isRequired,
};

          export default withStyles(styles)(NameForm);