import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "40px 10% 40px 10%",
    },
    title: {
        fontFamily: "Inter, sans-serif",
        letterSpacing: 4,
        margin: "5% 10%",
        color: theme.palette.primary.main,
    },
    btnmenu: {
        color: theme.palette.warning.main,
        borderColor: theme.palette.warning.main + "!important",
    },
    buttonRoot: {
        display: "inline",
    },
    links: {
        display: "block",
    },
}));

export default function Template({ content }) {
    const classes = useStyles();

    const CustomButton = ({title, link, external}) => {
        return (
          <Button component={external? "a" : Link} href={link} to={link} className={classes.btnmenu}>
            {title}
          </Button>
        );
      }

    const isExternal = (text) => {
        if (text.charAt(0) === '/') {
            return false;
        } else {
            return true;
        }
    }

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{content.Title}</h2>
            <div className={classes.links}>
                <ButtonGroup
                            color="inherit"
                            aria-label="vertical contained primary button group"
                            size="large"
                            variant="text"
                            classes={{root: classes.buttonRoot}}
                        >
                    {content.Entry.map((entry, index) => {
                        return (
                            <CustomButton key={index} title={entry.Text} link={entry.Link} external={() => isExternal(entry.Link)}/>
                        )
                    })}
                </ButtonGroup>
            </div>
        </div>
    );
}