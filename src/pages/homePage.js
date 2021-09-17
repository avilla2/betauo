import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GenerateHomeContent from '../components/utils/generateHomeContent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    }
}));

export default function ContentPage({setPage, content}) {
    const classes = useStyles();
    useEffect(() => {
        setPage("Beta Theta Pi");
      });
    return (
        <div className={classes.root}>
            <div>
                {content.map((item, index) => {
                    return (
                        <GenerateHomeContent key={index} content={item}/>
                    );
                })}
            </div>
        </div>
    );
}