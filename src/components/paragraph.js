import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "40px 0px"
    },
    title: {
        fontFamily: "Inter, sans-serif",
        letterSpacing: 4,
        margin: "0 10%",
        color: theme.palette.primary.main,
    },
    body: {
        fontFamily: "Inter, sans-serif",
        padding: "0 5%",
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
            <ReactMarkdown className={classes.body}>{content.Body}</ReactMarkdown>
        </div>
    );
}