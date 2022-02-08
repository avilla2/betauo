import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Faq from '../contentPageComponents/faq';
import Paragraph from '../contentPageComponents/paragraph';
import Form from '../contentPageComponents/contact';
import Grid from '../contentPageComponents/grid';
import Buttons from '../contentPageComponents/buttonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    title: {
        fontFamily: "Inter, sans-serif",
        letterSpacing: 4,
        margin: "2% 10%",
        color: theme.palette.primary.main,
    },
}));

export default function GeneratePageContent(props) {
    const classes = useStyles();

    const renderComponent = (object) => {
        switch(object.__typename) {
            case 'ComponentContentPageComponentsParagraph':
                return <Paragraph content={object} />;
            case 'ComponentContentPageComponentsFaq':
                return <Faq content={object} />;
            case 'ComponentContentPageComponentsForm':
                return <Form content={object} />;
            case 'ComponentContentPageComponentsGrid':
                return <Grid content={object} />;
            case 'ComponentContentPageComponentsButtons':
                return <Buttons content={object} />;
            default:
                return <h2>Error: Page Content Not Found</h2>;
          }
    }

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{props.content?.Title}</h2>
            {renderComponent(props.content)}
        </div>
    );
}