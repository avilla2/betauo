import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import logo from '../images/betalogo2.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
    },
    toolbar: {
        justifyContent: "center",
        margin: "0 10%",
        minHeight: 128,
        alignItems: 'center',
        color: 'white',
      },
    title: {
        fontFamily: '"Poppins", sans-serif',
    },
    fonts: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: "16px",
        flexGrow: 1,
        textShadow: "4px 4px 15px #2f2f2f",
    },
    svg: {
      width: 100,
      height: 100,
      position: "absolute",
      top: "0rem",
    },
    polygon: {
      fillOpacity:0,
      stroke: theme.palette.secondary.main,
      strokeWidth: 3,
    },
    betalogo: {
      width: "6rem",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    mobileLogo: {
      width: "3rem",
    },
    mobileTitle: {
      flexGrow: 1,
      textAlign: "left",
      fontFamily: '"Poppins", sans-serif',
    },
    mobileNav: {
      justifyContent: "space-between",
    },
    mobileDrawer: {
      width: 250,
      color: 'white',
      backgroundColor: "#002f6c",
      flexGrow: 1,
    },
    divider: {
      backgroundColor: "white",
    },
}));


export default function Navbar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ 
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const toggleHover = (anchor, tog) => {
    setState(state => ({ ...state, [anchor]: tog }));
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const NavButton = ({title, anchor, link}) => {
    return (
      <Button component={Link} to={link} onMouseEnter={() => toggleHover(anchor,true)} onMouseLeave={() => toggleHover(anchor,false)} className={classes.fonts} color={ state[anchor] ? "secondary" : "inherit" }>
        {title}
       <Grow in={state[anchor]} {...(state[anchor] ? { timeout: 800 } : {})}>
          <svg className={classes.svg}>
            <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
          </svg>
        </Grow>
      </Button>
    );
  }

  const MobileDrawer = () => {
    return (
      <div
        className={classes.mobileDrawer}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button>
            <ListItemText primaryTypographyProps={{"variant": "h5"}} primary="Beta Theta Pi" />
          </ListItem>
          <Divider variant="middle" className={classes.divider} />
          {[{title: 'Rush Beta', link: '/rush-beta'}, 
            {title: 'Calendar', link: '/calendar'}, 
            {title: 'About Us', link: '/about-us'},
            {title: 'Contact', link: '/contact'}, 
            {title: 'Alumni', link: '/alumni'}, 
            {title: 'Parents', link: '/parents'}].map((text, index) => (
            <ListItem button key={index} component={Link} to={text.link}>
              <ListItemText className={classes.title} primary={text.title} />
            </ListItem>
          ))}
        </List>
      </div>
  )};

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <AppBar position="fixed" elevation={!trigger ? 0 : 1} color={ !trigger ? "transparent" : "primary" } >
          <Toolbar className={classes.toolbar}>
            <NavButton title="Rush Beta" anchor={1} link="/rush-beta" />
            <NavButton title="Calendar" anchor={2} link="/calendar" />
            <NavButton title="About Us" anchor={3} link="/about-us" />
            <Button href="/" className={classes.title}>
              <img className={classes.betalogo} src={logo} alt="Beta Logo" />
            </Button>
            <NavButton title="Contact" anchor={4} link="/contact" />
            <NavButton title="Alumni" anchor={5} link="/alumni" />
            <NavButton title="Parents" anchor={6} link="/parents" />
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden mdUp>
        <AppBar position="fixed">
          <Toolbar className={classes.mobileNav}>
            <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer  anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
              <MobileDrawer />
            </Drawer>
            <Typography variant="h6" className={classes.mobileTitle}>
              Beta Theta Pi
            </Typography>
            <IconButton component={Link} to="/" edge="end">
              <img className={classes.mobileLogo}  src={logo} alt="Beta Logo"/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Hidden>
    </div>
  );
}