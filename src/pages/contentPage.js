import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        flexGrow: 2,
    },
    base: {
        backgroundColor: theme.palette.warning.main,
        width: "100%",
        height: "35vh",
        position: "relative",
    },
    title: {
        position: 'absolute',
        color: 'white',
        bottom: 30,
        left: 25,
        right: 0,
    },
}));

export default function ContentPage(props) {
    const classes = useStyles();
    console.log(props.content);
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <Paper elevation={5} className={classes.base} square>
                    <h1 className={classes.title}>{props.name}</h1>
                </Paper>
            </Hidden>
            <Hidden mdUp>
                <h1>{props.name}</h1>
            </Hidden>
            <h2>Looks Like This Page is Under Construction</h2>
        </div>
    );
}