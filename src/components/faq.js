import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    accordion: {
        margin: "0 10%"
    },
    heading: {
        fontFamily: "Inter, sans-serif",
    },
    description: {
        fontFamily: "Inter, sans-serif",
    }
}));

export default function Faq({ content }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{content.Title}</h2>
                <div className={classes.accordion}>
                    {content.Entry.map((entry, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={`accordian-${content.id}-${index}`}
                                >
                                    <Typography className={classes.heading}>{entry.Title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.description}>
                                        {entry.Body}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
        </div>
    );
}