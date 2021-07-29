import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "50px",
        marginTop: "30px",
    },
    title: {
        fontFamily: "Inter, sans-serif",
        letterSpacing: 4,
        color: theme.palette.primary.main,
    },
    body: {
        fontFamily: "Inter, sans-serif",
        padding: "0 10%",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "28px",
    },
}));

export default function Paragraph({ content }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{content.Title}</h2>
            <p className={classes.body}>{content.Body}</p>
        </div>
    );
}