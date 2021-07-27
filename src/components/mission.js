import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import GavelIcon from '@material-ui/icons/Gavel';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px",
    },
    title: {
        color: "#2f2f2f",
        fontFamily: "Poppins, sans-serif",
        textAlign: "left",
        marginLeft: "5%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "250%",
          },
    },
    subtitle: {
        color: theme.palette.primary.main,
        fontFamily: "Poppins, sans-serif",
        textAlign: "left",
        marginLeft: "5%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "150%",
          },
    },
    values: {
        marginTop: "30px",
        fontFamily: "Poppins, sans-serif",
        [theme.breakpoints.down('sm')]: {
            fontSize: "200%",
          },
    },
    iconColor: {
        color: theme.palette.secondary.main,
        opacity: .2,
        fontSize: "20rem",
    },
    core: {
        position: "relative"
    },
    heading: {
        position: "absolute",
        top: "70px",
        fontSize: "1.2rem",
        fontFamily: "Inter, sans-serif",
    },
    desc: {
        margin: "0 17%",
    },
    sub: {
        fontSize: "1.4rem",
    },
}));

export default function Mission() {
    const classes = useStyles();
    const scroller = React.useRef(null);
    const [scrollTarget, setScrollTarget] = React.useState(undefined) 
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        target: scrollTarget,
      });

    return (
        <div className={classes.root} ref={scroller} onLoad={() => {setScrollTarget(scroller.current);}}>
            <Typography className={classes.title} variant="h2" gutterBottom>
                Our Mission...
            </Typography>
            <Typography className={classes.subtitle} variant="h4" gutterBottom>
                To Develop Men of Principle for a Principled Life
            </Typography>
            <Typography className={classes.values} variant="h3">
                Core Values
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item md className={classes.core}>
                    <GroupIcon className={classes.iconColor} />
                    <Fade in={trigger} {...(trigger ? { timeout: 1500 } : {})}>
                        <Typography className={classes.heading} variant="subtitle1" gutterBottom>
                            <strong className={classes.sub}>Mutual Assistance</strong><br />
                            <div className={classes.desc}>
                                Betas believe that men are mutually obligated to help others in the honorable labors and aspirations of life.
                            </div>
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item md className={classes.core}>
                    <EmojiObjectsIcon className={classes.iconColor} />
                    <Fade in={trigger} {...(trigger ? { timeout: 1500 } : {})}>
                        <Typography className={classes.heading} variant="subtitle1" gutterBottom>
                            <strong className={classes.sub}>Intellectual Growth</strong><br />
                            <div className={classes.desc}>
                            Betas are devoted to continually cultivating their minds, including high standards of academic achievement.                            </div>
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item md className={classes.core}>
                    <VpnKeyIcon className={classes.iconColor} />
                    <Fade in={trigger} {...(trigger ? { timeout: 1500 } : {})}>
                        <Typography className={classes.heading} variant="subtitle1" gutterBottom>
                            <strong className={classes.sub}>Trust</strong><br />
                            <div className={classes.desc}>
                            Betas develop absolute faith and confidence in one another by being true to themselves and others.                            </div>
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item md className={classes.core}>
                    <GavelIcon className={classes.iconColor} />
                    <Fade in={trigger} {...(trigger ? { timeout: 1500 } : {})}>
                        <Typography className={classes.heading} variant="subtitle1" gutterBottom>
                            <strong className={classes.sub}>Responsible Conduct</strong><br />
                            <div className={classes.desc}>
                            Betas choose to act responsibly, weighing the consequences of their actions on themselves and those around them.                            </div>
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item md className={classes.core}>
                    <EmojiPeopleIcon className={classes.iconColor} />
                    <Fade in={trigger} {...(trigger ? { timeout: 1500 } : {})}>
                        <Typography className={classes.heading} variant="subtitle1" gutterBottom>
                            <strong className={classes.sub}>Integrity</strong><br />
                            <div className={classes.desc}>
                            Betas preserve their character by doing what is morally right and demanding the same from their brothers.                            </div>
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    );
}