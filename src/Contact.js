import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import {Divider} from '@material-ui/core';
import {Send, Textsms} from '@material-ui/icons';

import './Welcome.css';
import './Portfolio.css';
import './Contact.css';

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
      backgroundSize: "cover",
      backgroundPosition: "-15px"
    },
    content: {
      // flexGrow: 1,
      // padding: theme.spacing(3),
      width: "100%",
      height: "100vh"
    },
    title: {
      fontSize: "3rem",
      margin: "0 auto",
      paddingTop: "20px",
      color: "white"
    },
    contactCard: {
      background: "black !important",
      boxShadow: "inset 0px 0px 10px 2px rgba(255, 255, 255, 0.44)",
      border: "1px solid rgba(255, 255, 255, .8)"
    }
  }));
  

function Contact(props) {
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
                <Link to="/"><img src={headshot} alt="Zachary Bowman Headshot"/></Link>
                <h1 style={{fontWeight: "700"}}>Zachary Bowman</h1>
                <h2 style={{fontWeight: "200"}}>Front-End Web Developer</h2>
            </div>
            <div className="Drawer-links">
                <NavLink exact activeClassName="active" to="/portfolio"><h2>Portfolio</h2></NavLink>
                <NavLink exact activeClassName="active" to="/story"><h2>My Story</h2></NavLink>
                <NavLink exact activeClassName="active" to="/contact"><h2>GET IN TOUCH</h2></NavLink>
            </div>
            <div className="Drawer-links">
            <div className="Drawer-links-single-container">
                    <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://www.github.com/praggygruntt"><h2 style={{marginRight: "3%"}}>Github</h2></a>
                    <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "10px"}}href="https://www.github.com/praggygruntt"><FontAwesomeIcon size="lg" icon={faGithub}/></a>
                </div>       
                <div className="Drawer-links-single-container">
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://www.linkedin.com/in/zacharybbowman/"><h2 style={{marginRight: "3%"}}>LinkedIn</h2></a>
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "10px"}}href="https://www.linkedin.com/in/zacharybbowman/"><FontAwesomeIcon size="lg" icon={faLinkedin}/></a>
                </div>
                <div className="Drawer-links-single-container">
                  <a target="_blank"  rel="noopener noreferrer" style={{width: "100%",textDecoration: "none", color: "inherit", margin: "inherit"}}href="https://stackoverflow.com/users/10676693/praggygruntt?tab=profile"><h2 style={{marginRight: "3%"}}>Stack Overflow</h2></a>
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "5px"}}href="https://stackoverflow.com/users/10676693/praggygruntt?tab=profile"><FontAwesomeIcon size="lg" icon={faStackOverflow}/></a>
                </div> 
                {/* <div className="Drawer-links-single-container">
                    <h2 style={{marginRight: "3%"}}>zchrybwmn@gmail.com</h2>
                    <FontAwesomeIcon size="lg" icon={faEnvelopeOpenText}/>
                </div>  */}
            </div>
        </div>
      </div>
    );
    return (
      
      <div className={classes.root}>
        <div className="stars">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
            </div>  
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
            
            <div className="Contact">
                  <h1>Let's Create<br></br>Something Together!</h1>
                  <Divider />
                  <h2>If you like my journey so far, just send me an email or feel free to text me for quick questions! I can't wait to see what we make together. </h2>
                  <div className="Contact-buttons">
                    <a id="first-contact-link" className="Contact-link" href="mailto:zchrybwmn@gmail.com">
                      <div style={{display: "flex", alignItems: "center"}}>
                        <Send fontSize="large"/>
                      </div>
                      <div style={{textAlign: "right"}}>
                        <h3>Email</h3>
                        <h4>zchrybwmn@gmail.com</h4>
                      </div>
                    </a>
                    <a className="Contact-link" href="sms:+13174898185">
                      <div style={{display: "flex", alignItems: "center"}}>
                        <Textsms fontSize="large"/>
                      </div>
                      <div style={{textAlign: "right"}}>
                        <h3>Text</h3>
                        <h4>+1 (317) 489 - 8185</h4>
                      </div>
                      
                    </a>
                  </div>
            </div>
            
        </main>
      </div>
    );
  }
  
  Contact.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default Contact;