import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';
import GeneratePageContent from '../components/generatePageContent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        flexGrow: 2,
    },
    base: {
        backgroundColor: theme.palette.warning.main,
        width: "100%",
        height: "29vh",
        minHeight: "225px",
        position: "relative",
    },
    title: {
        position: 'absolute',
        color: 'white',
        bottom: 30,
        left: 0,
        right: 0,
    },
}));

export default function ContentPage(props) {
    const classes = useStyles();
    useEffect(() => {
        props.setPage(props.name);
      }, []);
    return (
        <div className={classes.root}>
            <Hidden smDown>
                <Paper elevation={5} className={classes.base} square>
                    <h1 className={classes.title}>{props.name}</h1>
                </Paper>
            </Hidden>
            <div>
                {props.content.map((item, index) => {
                    return (
                        <GeneratePageContent key={index} content={item}/>
                    );
                })}
            </div>
        </div>
    );
}