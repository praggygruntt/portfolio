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
import {Container, Row, Col} from 'react-bootstrap';
import {faHistory, faCode, faTools, faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

import './Welcome.css';
import './Portfolio.css';
import './Contact.css';
import './Story.css';
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
  

function Story(props) {
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
        {/* <div className="stars">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
            </div>   */}
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
              <Container fluid className="Story-paper">
                <Row className="Story-elevator">
                  <Col>
                    <h1 className="title">The American Dream, One Line at a Time</h1>
                    <div className="blockquote-container">
                      <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="quote quoteLeft"/>
                      <blockquote>The ideal by which equality of opportunity is available to any American, allowing the highest aspirations and goals to be achieved.</blockquote>
                      <FontAwesomeIcon icon={faQuoteRight} size="2x" className="quote quoteRight"/>
                    </div>
                    <div className="story-image-container">
                      <div className="image1" >
                        <img alt="zach rock climbing" src={require("./assets/climbing.jpg")}></img>
                      </div>
                      <p className="story">
                        <strong style={{color: "#00c0ff"}}>Hello again, Zach here!</strong> <br></br>Since beginning my coding journey with my first Minecraft server many years ago, I knew I had a <u>logic-based mindset</u> . That mindset led me to pursue Law throughout my undergrad, but something still felt empty. So, I made the choice to take the reins of my career and pull back in to the world I truly wanted. Since then, my journey has been nothing but the American Dream, navigating logistical and financial constraints to make that dream a reality. <br></br><em style={{color: "#00c0ff"}}>Check out more of my journey below, and feel free to drop me a line!</em>
                      </p>
                      <div className="image2">
                        <img alt="happy zach with a girl" src={require("./assets/happyZ.jpg")}></img>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="Story-tools">
                  <Col xl className="tools-col">
                    <FontAwesomeIcon icon={faHistory} className="Story-icon" size="3x"/>
                    <h2 style={{fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", color: "#00c0ff"}}>Education</h2>
                    <p className="Story-tools-excerpt">Knowledge is a journey, not a destination; I can never stop learning. That being said, here are some of my sources of education and continued growth.</p>
                    <h4 className="Story-tools-list-title" style={{color: "#00c0ff"}}>Sources of my Education:</h4>
                    <ul className="Story-tools-ul">
                    <li>Online Technology Documentation</li>
                      <li>Codecademy</li>
                      <li>DevSlopes</li>
                      <li>Colt Steele Bootcamps</li>
                      <li>Udemy</li>
                      <li>Youtube</li>
                      <li><span style={{fontStyle: "italic"}}>Javascript &amp; jQuery: Interactive Front-End Development</span> - Jon Duckett</li>
                      <li><span style={{fontStyle: "italic"}}>HTML &amp; CSS: Design Interactive Websites</span> - Jon Duckett</li>
                      <li><span style={{fontStyle: "italic"}}>Code: The Hidden Languange of Computer Hardware and Software</span> - Charles Petzold</li>
                    </ul>
                  </Col>
                  <Col xl className="tools-col">
                    <FontAwesomeIcon icon={faCode} className="Story-icon" size="3x"/>
                    <h2 style={{fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", color: "#00c0ff"}}>Current Work</h2>
                    <p className="Story-tools-excerpt"> I genernally enjoy building front-end applications with React, but enjoy the opportunities to use new open-source technologies as they premier in my development as well.</p>
                    <h4 className="Story-tools-list-title" style={{color: "#00c0ff"}}>Technologies I enjoy: </h4>
                    <ul className="Story-tools-ul">
                      <li>React.js</li>
                      <li>Express.js</li>
                      <li>Node.js</li>
                      <li>AdobeXD</li>
                      <li>Postman</li>
                      <li>React-Router</li>
                      <li>MongoDB</li>
                    </ul>
                  </Col>
                  <Col xl className="tools-col">
                    <FontAwesomeIcon icon={faTools} className="Story-icon"size="3x"/>
                    <h2 style={{fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", color: "#00c0ff"}}>Aspirations</h2>
                    <p className="Story-tools-excerpt">My journey does not stop here. The world of web development is only growing, and my thirst for knowledge keeps me involved in the latest trends in tech.</p>
                    <h4 className="Story-tools-list-title" style={{color: "#00c0ff"}}>I am excited by: </h4>
                    <ul className="Story-tools-ul">
                      <li>Progressive Web Apps</li>
                      <li>Android/iOS Development w/ React Native</li>
                      <li>Client-Side Rendering</li>
                      <li>Web Assembly</li>
                      <li>Machine Learning</li>
                      <li>Game Development</li>
                      <li>Humanitarian Projects via Code</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
        </main>
      </div>
    );
  }
  
  Story.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default Story;