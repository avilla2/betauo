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


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 0",
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
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root} bgcolor="info.main" component="div">
            <Box component="div" className={classes.footerContent}>
                <img className={classes.image} src={logo} alt="Men of Principle Logo" />
                <div > 
                    <Typography variant='subtitle1'>  Beta Rho Chapter of Beta Theta Pi </Typography>
                    <Typography variant='subtitle1'> 1009 Patterson St, Eugene, OR 97401 </Typography>
                    <Typography variant='subtitle2' gutterBottom>  © 2021, Gamma Theta Chapter of Beta Theta Pi. All Rights Reserved.</Typography>
                    <Typography variant='body2'>  Website Design by <a style={{color: "#2f2f2f"}} href="https://www.alexandrovilla.com">Alexandro Villa</a></Typography>
                </div>
                <span>
                    <IconButton>
                        <InstagramIcon color="secondary" fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <MailOutlineIcon color="default" fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <img src={OregonLogo} className={classes.logoStyle} alt="Oregon Logo" />
                    </IconButton>
                </span>
            </Box>
        </Box>
    );
}