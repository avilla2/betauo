import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    }
}));

export default function ContentPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Looks Like This Page is Under Construction</h1>
        </div>
    );
}