import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px",
    },
    title: {
        color: "#2f2f2f",
        fontFamily: '"Poppins", sans-serif',
        textAlign: "left",
        marginLeft: "10%",
    },
}));

export default function Mission() {
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return (
        <Box className={classes.root} component="div">
            <Typography className={classes.title} variant="h2" gutterBottom>
                Our Mission...
            </Typography>
            <Fade in={trigger} {...(trigger ? { timeout: 3000 } : {})}>
               <Typography className={classes.title} variant="h4">
                  To Develop Men of Principle for a Principled Life
                </Typography>
            </Fade>
        </Box>
    );
}