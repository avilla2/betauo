import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Faq from './faq';
import Paragraph from './paragraph';
import Form from './contact';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
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
            default:
                return <h2>Error: Page Content Not Found</h2>;
          }
    }

    return (
        <div className={classes.root}>
            {renderComponent(props.content)}
        </div>
    );
}