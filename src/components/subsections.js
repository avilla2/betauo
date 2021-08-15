import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import newsletter from "../images/newsletter2021.pdf";
import { Link } from "react-router-dom";
import PDF from './pdf';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "50px",
    },
    marg: {
        margin: "70px 5% 0 5%",
        padding: "0 8px",
    },
    head: {
        fontFamily: '"Poppins", "sans-serif"',
    },
    card: {
        margin: "10px auto",
        backgroundColor: theme.palette.common.white,
        padding: "2%",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            minHeight: "380px",
          },
        [theme.breakpoints.between('md', 'md')]: {
            minHeight: "450px",
          },
        [theme.breakpoints.up('lg')]: {
            minHeight: "520px",
          },
    },
    core: {
        width:"100%",
    },
    header: {
        color: "black",
        fontFamily: "Inter, sans-serif",
      },
    pos: {
        marginBottom: 12,
      },
    desc: {
        fontFamily: "Inter, sans-serif",
        color: "black",
        lineHeight: 2,
        marginBottom: "40px",
    },
    btnColor: {
        position: "absolute",
        bottom: "10px",
        color: theme.palette.warning.main,
        borderColor: theme.palette.warning.main,
    },
    btnmenu: {
        color: theme.palette.warning.main,
        borderColor: theme.palette.warning.main + "!important",
        margin: "10px 10px 0px",
    },
    buttonRoot: {
        display: "inline",
    },
    links: {
        display: "block",
    },
}));

function CustomCard(props) {
    const classes = useStyles();
    return (
        <Card elevation={6} className={classes.card}>
        <CardContent>
            <Typography className={classes.header} variant="h4" component="h2" align="left" gutterBottom>
                {props.title}
            </Typography>
            <Typography className={classes.desc} variant="body1" align="left" component="p">
                {props.children}
            </Typography>
        </CardContent>
        <CardActions>
            {props.external ? 
            <Button href={props.href} className={classes.btnColor} variant="outlined" size="large">{props.button}</Button>
            : <Button component={Link} to={props.href} className={classes.btnColor} variant="outlined" size="large">{props.button}</Button>
            }
        </CardActions>
    </Card>
    );
}
export default function Subsection() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Typography className={classes.head} variant="h2" gutterBottom>
                    Alumni
                </Typography>
                <div className={classes.links}>
                    <ButtonGroup
                        color="inherit"
                        aria-label="vertical contained primary button group"
                        size="large"
                        classes={{root: classes.buttonRoot}}
                    >
                        <Button component={Link} to="/contact" className={classes.btnmenu}>Contact Us</Button>
                        <Button href="https://my.beta.org/reports/LostMembers/Lost100195.html" className={classes.btnmenu}>Lost Brothers</Button>
                        <Button href="mailto:baileysweeney@gmail.com" className={classes.btnmenu}>Reconnect</Button>
                        <Button href="https://www.legfi.com/app/fundraisers/foreverbetarho/969" className={classes.btnmenu}>Housing Campaign</Button>
                    </ButtonGroup>
                </div>
                <PDF src={newsletter} />
            </div>
            <div className={classes.marg}>
                <Typography className={classes.head} variant="h2" gutterBottom>
                    Parents
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={4}
                >
                    <Grid item md={6} lg={4} className={classes.core}>
                        <CustomCard href="/about-us" button="Learn More" title="Discover Beta Theta Pi">
                            <strong>Our Mission</strong><br />
                            To develop men of principle for a principled life.<br />
    ​                        <strong>Our Vision</strong><br />
                            Every member will live Beta Theta Pi’s values.<br />
                            <strong>Strategic Priorities</strong><br />
                            Brotherhood<br />
                            Personal Growth<br />
                            Home<br />
                        </CustomCard>
                    </Grid>
                    <Grid item md={6} lg={4} className={classes.core}>
                        <CustomCard href="/contact" button="Contact Us" title="Contact Our Chapter">
                            To reach a specific member of our executive board or contact the Beta Rho Chapter of BTP please click the link below
                        </CustomCard>
                    </Grid>
                    <Grid item md={12} lg={4} className={classes.core}>
                        <CustomCard external href="https://beta.org/about/parents/" button="Read More" title="Parent Testimonials">
                        Sending a child to college can be a challenging and stressful time in a parent's life. Your son will encounter many opportunities to become involved outside of their classroom experience. It is important that you be educated about the enriching experience that your son will find by joining Beta Theta Pi.​
                        </CustomCard>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}