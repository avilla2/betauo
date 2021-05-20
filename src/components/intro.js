import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import founders from '../images/founders.jpeg'
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: "128px"
    },
  }));

  export default function Intro() {
    const classes = useStyles();
    return (
        <Box component="div">
            <img className={classes.root} src={founders} alt="Founding Fathers" />
        </Box>
    );
  }