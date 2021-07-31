import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "50px",
        marginTop: "30px",
    },

}));

export default function Template({ content }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>

        </div>
    );
}