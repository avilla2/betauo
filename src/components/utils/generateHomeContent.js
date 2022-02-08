import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Intro from '../homePageComponents/intro';
import Gallery from '../homePageComponents/gallery';
import TextGrid from '../homePageComponents/textGrid';
import Media from '../homePageComponents/media';
import Cards from '../homePageComponents/cards';
import Freestyle from '../homePageComponents/freestyle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    head: {
        fontFamily: '"Poppins", "sans-serif"',
        margin: '5% 0% 2% 0%'
    },
}));

export default function GeneratePageContent(props) {
    const classes = useStyles();

    const renderComponent = (object) => {
        switch(object.__typename) {
            case 'ComponentHomePageComponentsIntro':
                return <Intro content={object} />;
            case 'ComponentHomePageComponentsGallery':
                return <Gallery content={object} />;
            case 'ComponentHomePageComponentsTextGrid':
                return <TextGrid content={object} />;
            case 'ComponentHomePageComponentsMedia':
                return <Media content={object} />;
            case 'ComponentHomePageComponentsCards':
                return <Cards content={object} />;
            case 'ComponentHomePageComponentsFreestyle':
                return <Freestyle content={object} />;
            default:
                return <h2>Error: Page Content Not Found</h2>;
          }
    }

    return (
        <div className={classes.root}>
            {
                props.content.__typename !== 'ComponentHomePageComponentsIntro' ? 
                    <Typography className={classes.head} variant="h2" gutterBottom> {props?.content?.Title}</Typography> 
                : <></> 
            }
            {renderComponent(props.content)}
        </div>
    );
}