import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
//import founders from '../images/foundersalpha.jpeg'
import rushvideo from '../images/rushvideo.mp4'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    title: {
      position: "absolute",
      bottom: "100px",
      left: "120px",
      textAlign: "left",
      fontFamily: '"Poppins", sans-serif',
    },
    ends: {
      fontFamily: '"Poppins", sans-serif',
      color: "white",
    },
    middle: {
      fontFamily: '"Poppins", sans-serif',
      color: "#872",
    },
  }));

  export default function Intro() {
    const classes = useStyles();
    return (
        <Box component="div">
            <video className={classes.root} loop autoPlay muted>
              <source src={rushvideo} type="video/mp4" />
            </video>
            {/*<img className={classes.root} src={founders} alt="Founding Fathers" />*/}
            <div className={classes.title}>
              <Typography className={classes.ends} variant="h3" gutterBottom>We Are</Typography>
              <Typography className={classes.middle} variant="h2" gutterBottom>Beta Theta Pi</Typography>
              <Typography className={classes.ends} variant="h3">University of Oregon Beta Rho Chapter</Typography>
            </div>
        </Box>
    );
  }