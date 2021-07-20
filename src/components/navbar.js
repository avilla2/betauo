import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import logo from '../images/betalogo2.png';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        color: "#2f2f2f",
        backgroundColor: "#002f6c",
    },
    toolbar: {
        justifyContent: "center",
        margin: "0 10%",
        minHeight: 128,
        alignItems: 'center',
        color: 'white',
      },
    title: {
        display: "flex",
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
}));


export default function Navbar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleChange2 = () => {
    setChecked2((prev) => !prev);
  };
  const handleChange3 = () => {
    setChecked3((prev) => !prev);
  };
  const handleChange4 = () => {
    setChecked4((prev) => !prev);
  };
  const handleChange5 = () => {
    setChecked5((prev) => !prev);
  };
  const handleChange6 = () => {
    setChecked6((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={!trigger ? 0 : 1} color={ !trigger ? "transparent" : "primary" } >
        <Toolbar className={classes.toolbar}>
          <Button onMouseEnter={() => handleChange()} onMouseLeave={() => handleChange()} className={classes.fonts} color={ checked ? "secondary" : "inherit" }>
            Rush Beta
            <Grow in={checked} {...(checked ? { timeout: 800 } : {})}>
              <svg className={classes.svg}>
                <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
              </svg>
            </Grow>
          </Button>
          <Button onMouseEnter={() => handleChange2()} onMouseLeave={() => handleChange2()} className={classes.fonts} color={ checked2 ? "secondary" : "inherit" }>
            Calendar
            <Grow in={checked2} {...(checked2 ? { timeout: 800 } : {})}>
              <svg className={classes.svg}>
                <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
              </svg>
            </Grow>
          </Button>
          <Button onMouseEnter={() => handleChange3()} onMouseLeave={() => handleChange3()} className={classes.fonts} color={ checked3 ? "secondary" : "inherit" }>
            About Us
            <Grow in={checked3} {...(checked3 ? { timeout: 800 } : {})}>
              <svg className={classes.svg}>
                <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
              </svg>
            </Grow>
          </Button>
          <Button className={classes.title}>
            <img className={classes.betalogo} src={logo} alt="Beta Logo" />
          </Button>
          <Button onMouseEnter={() => handleChange4()} onMouseLeave={() => handleChange4()} className={classes.fonts} color={ checked4 ? "secondary" : "inherit" }>
            Contact
            <Grow in={checked4} {...(checked4 ? { timeout: 800 } : {})}>
              <svg className={classes.svg}>
                <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
              </svg>
            </Grow>
          </Button>
          <Button onMouseEnter={() => handleChange5()} onMouseLeave={() => handleChange5()} className={classes.fonts} color={ checked5 ? "secondary" : "inherit" }>
            Alumni
            <Grow in={checked5} {...(checked5 ? { timeout: 800 } : {})}>
              <svg className={classes.svg}>
                <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
              </svg>
            </Grow>
          </Button>
          <Button onMouseEnter={() => handleChange6()} onMouseLeave={() => handleChange6()} className={classes.fonts} color={ checked6 ? "secondary" : "inherit" }>
            Parents
            <Grow in={checked6} {...(checked6 ? { timeout: 800 } : {})}>
              <svg className={classes.svg}>
                <rect x="-5" y="2" width="120" height="35" className={classes.polygon} />
              </svg>
            </Grow>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}