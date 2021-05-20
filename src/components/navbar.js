import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
        color: "#2f2f2f",
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
    title: {
        flexGrow: 1,
        display: "flex",

    },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} color="transparent">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            Beta Theta Pi
          </Typography>
          <Button color="inherit">Rush Beta</Button>
          <Button color="inherit">Calender</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Alumni</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}