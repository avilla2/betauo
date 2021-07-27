import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    returnButton: {
        color: theme.palette.warning.main,
        borderColor: theme.palette.warning.main,
    },
}));

export default function ContentPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Looks Like your Lost...</h1>
            <h2>This Page is Not Available</h2>
            <Button variant="outlined" size="large" component={Link} to="/" className={classes.returnButton}>
                Return Home
            </Button>
        </div>
    );
}