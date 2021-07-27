import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../images/betalogo.png'
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import OregonLogo from '../images/ducklogo.png'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 20px",
        marginTop: "50px",
    },
    footerContent: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontFamily: '"Poppins", sans-serif',
    },
    image: {
        width: "200px",
    },
    logoStyle: {
        width: "68%",
        padding: "6px 0",
    },
    inter: {
        fontFamily: "Inter, sans-serif",

    },
    red: {
        color: theme.palette.warning.main,
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root} bgcolor="info.main" component="div">
           <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
            >
                <Grid item md={3} className={classes.core}>
                    <img className={classes.image} src={logo} alt="Men of Principle Logo" />
                </Grid>
                <Grid item md={6} className={classes.core}>
                    <div > 
                        <Typography className={classes.inter} variant='subtitle1'>  Beta Rho Chapter of Beta Theta Pi </Typography>
                        <Typography className={classes.inter} variant='subtitle1'> 1009 Patterson St, Eugene, OR 97401 </Typography>
                        <Typography className={classes.inter} variant='subtitle2' gutterBottom>  © 2021, Beta Rho Chapter of Beta Theta Pi. All Rights Reserved.</Typography>
                        <Typography className={classes.inter} variant='body2'>  Website Design by <a style={{color: "#2f2f2f"}} href="https://www.alexandrovilla.com">Alexandro Villa</a></Typography>
                    </div>
                </Grid>
                <Grid item md={3} className={classes.core}>
                    <span>
                        <IconButton component={Link} href="https://www.instagram.com/betauo/">
                            <InstagramIcon color="secondary" fontSize="large" />
                        </IconButton>
                        <IconButton component={Link} href="https://www.facebook.com/BetaOregon/">
                            <FacebookIcon color="primary" fontSize="large" />
                        </IconButton>
                        <IconButton component={Link} href="mailto:uobetacommunications@gmail.com">
                            <MailOutlineIcon className={classes.red} color="inherit" fontSize="large" />
                        </IconButton>
                        <IconButton component={Link} href="https://www.uoifc.com/">
                            <img src={OregonLogo} className={classes.logoStyle} alt="Oregon Logo" />
                        </IconButton>
                    </span>
                </Grid>
            </Grid>
        </Box>
    );
}