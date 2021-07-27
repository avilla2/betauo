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
            Content Page
        </div>
    );
}