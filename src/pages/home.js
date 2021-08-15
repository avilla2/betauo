import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Intro from '../components/intro';
import Mission from '../components/mission';
import Subsection from '../components/subsections';
import Gallery from '../components/gallery'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    }
}));

export default function Home({ setPage }) {
    const classes = useStyles();
    useEffect(() => {
        setPage("Beta Theta Pi");
      });
    return (
        <div className={classes.root}>
            <Intro />
            <Mission />
            <Gallery />
            <Subsection />
        </div>
    );
}