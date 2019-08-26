import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import './Welcome.css';

import headshot from './assets/Headshot.png';


const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  divider: {
      color: "white"
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
      ...theme.mixins.toolbar
    },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: "url(https://images.unsplash.com/photo-1526835230578-c62e8ff3c52d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)",
    backgroundPosition: "-15px",
    backgroundSize: "cover"
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    width: "70%",
    height: "100vh",
  },
  "@media (max-width: 600px)": {
    content: {
      width: "100%"
    }
  }
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
    function closeDrawer() {
        setMobileOpen(false);
    }
    const drawer = (
      <div style={{height: "100%"}} className="Drawer">
        <div className={`${classes.toolbar} Drawer-open-appbar`} style={{background: "rgba(0,3,29,.7)", color: "white"}}>
            <KeyboardArrowLeftIcon onClick={closeDrawer} />
        </div>
        <div style={{background: "rgba(0,3,29,.7)", height: "100%"}}>
            <div className="Drawer-namecard">
                <img src={headshot}/>
                <h1 style={{fontWeight: "700"}}>Zachary Bowman</h1>
                <h2 style={{fontWeight: "200"}}>Front-End Web Developer</h2>
            </div>
            <div className="Drawer-links">
                <NavLink exact activeClassName="active" to="/portfolio"><h2>Portfolio</h2></NavLink>
                <h2>Specializations</h2>
                <h2>Get in touch</h2>
            </div>
            <div className="Drawer-links">
                <div className="Drawer-links-single-container">
                    <a target="_blank" style={{textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://www.github.com/praggygruntt"><h2 style={{marginRight: "3%"}}>Github</h2></a>
                    <a target="_blank" style={{textDecoration: "none", color: "inherit", marginLeft: "10px"}}href="https://www.github.com/praggygruntt"><FontAwesomeIcon size="lg" icon={faGithub}/></a>
                </div>       
                <div className="Drawer-links-single-container">
                  <a target="_blank" style={{textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://www.linkedin.com/in/zacharybbowman/"><h2 style={{marginRight: "3%"}}>LinkedIn</h2></a>
                  <a target="_blank" style={{textDecoration: "none", color: "inherit", marginLeft: "10px"}}href="https://www.linkedin.com/in/zacharybbowman/"><FontAwesomeIcon size="lg" icon={faLinkedin}/></a>
                </div> 
                <div className="Drawer-links-single-container">
                    <h2 style={{marginRight: "3%"}}>zchrybwmn@gmail.com</h2>
                    <FontAwesomeIcon size="lg" icon={faEnvelopeOpenText}/>
                </div> 
            </div>
        </div>
      </div>
    );
    const screenWidth = window.screen.width;
    console.log(screenWidth);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="inherit" noWrap style={window.screen.width > 600 ? {opacity: "0"} : {opacity: "1"}}>Zachary Bowman</Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
            
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div className="stars">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
            </div>
            <div className="hero">
              <h1>Hi, I'm Zach!</h1>
              <h3>I'm an aspiring web developer specializing in</h3>
              <h2>React front-end development.</h2>
            </div>
            <div className="hero-buttons">
              <Link to="/portfolio" className="hero-buttons-button">PORTFOLIO</Link>
              <Link to="/contact" className="hero-buttons-button">HIRE ME</Link>
            </div>
        </main>
      </div>
    );
  }
  
  ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default ResponsiveDrawer;