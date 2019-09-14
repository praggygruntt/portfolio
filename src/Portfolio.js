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
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import PortfolioCard from './PortfolioCard';
import {Divider} from '@material-ui/core';

import './Welcome.css';
import './Portfolio.css';

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
      "@media (max-width: 450px)": {
        fontSize: "2rem !important"
      }
    },
    "@media (max-width: 450px)": {
      title: {
        fontSize: "2rem"
      }
      
    }
  }));
  

function Portfolio(props) {
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
                <div className="Drawer-links-single-container">
                  <a target="_blank"  rel="noopener noreferrer" style={{width: "100%", textDecoration: "none", color: "inherit", margin: "inherit"}}href={require("./assets/zbResume07-14-19.pdf")}><h2 style={{marginRight: "3%"}}>Resume</h2></a>
                  <a target="_blank"  rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit", marginLeft: "5px"}} href={require("./assets/zbResume07-14-19.pdf")}><FontAwesomeIcon size="lg" icon={faFileAlt}/></a>
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
            
            <div className="Portfolio" style={{position: "relative", zIndex: "6"}}>
                <h1 className={classes.title}>Portfolio // Recent Projects</h1>
                <Divider light />
                <div className="Portfolio-card-container">
                  {/* <PortfolioCard title="Couleur" image="./assets/Headshot.png"/> 
                  <PortfolioCard title="Sippit" image="./assets/Headshot.png"/>   
                  <PortfolioCard title="Yahtzee" image="./assets/Headshot.png"/> 
                  <PortfolioCard title="Lights Out" image="./assets/Headshot.png"/>
                  <PortfolioCard title="Hot Wheels Repo" image="./assets/Headshot.png"/>  */}
                  <PortfolioCard 
                    title="Couleur" 
                    image={require("./assets/CouleurImage.png")} 
                    text="As my capstone project in a React Bootcamp, this color palette design app pulled together many of the technologies and knowledge related to React and Front End Development. Material UI was used as the React UI, React Router allowed client-side routing, and various other libraries polished to the concept." 
                    chips={["React", "React Router", "Material UI", "Chroma.js", "JSS"]}
                    link="https://zb-couleur.herokuapp.com/"
                    githubLink="https://github.com/praggygruntt/Couleur"/>
                  <PortfolioCard 
                    title="Sippit" 
                    image={require("./assets/SippitImage.png")} 
                    text="I coined the idea for this App by wanting to try new cocktails, but always resorting to the same ones. The App uses Axios to make external API calls to grab cocktails. The most challenging part was refactoring the local storage access code to function properly once deployed." 
                    chips={["React", "Axios", "Local Storage", "Component Lifecycle"]}
                    link="https://zb-sippit.herokuapp.com/"
                    githubLink="https://github.com/praggygruntt/sippit-cocktail-board"/>
                  <PortfolioCard 
                    title="Yahtzee" 
                    image={require("./assets/YahtzeeImage.png")} 
                    text="By rebuilding Yahtzee, I studied complex Javascript logical operations applied to managing the state of the game, dice, and scores. I turned to external resources in order to develop the rules for scoring the Yahztee rolls in Javascript." 
                    chips={["React", "Complex JS Logic", "State Management", "Data Transfers"]}
                    link="https://zb-yahtzee.herokuapp.com/"
                    githubLink="https://github.com/praggygruntt/zb-yahtzee"/> 
                  <PortfolioCard 
                    title="Lights Out!" 
                    image={require("./assets/LightsOutImage.png")} 
                    text="By cloning the popular game Lights Out into a React App, I practiced working in a collaborative team environment by completing the App's code, written by another developer. I debugged issues with his JS logic for managing the state of the board as well." 
                    chips={["React", "State Management", "JS Iteration", "Collaborative Workflow"]}
                    link="https://zb-lights-out-game.herokuapp.com/"
                    githubLink="https://github.com/praggygruntt/reactLightsOutGame"/>
                  <PortfolioCard 
                    title="Hot Wheels Repo" 
                    image={require("./assets/HotWheelsRepoImage.png")} 
                    text="Tapping into my childhood, I made this demo of a neighborhood marketplace for Hot Wheel Cars. I implemented Client-Side Routing via React Router for allowing each Route to be rendered in the browser, as well as implemented a back-end API." 
                    chips={["React", "React Router", "Client-Side Rendering ", "Responsive Design"]}
                    link="https://zb-hot-wheels-repo.herokuapp.com"
                    githubLink="https://github.com/praggygruntt/hot-wheels-repo"/> 
                  <PortfolioCard 
                    title="Card Dealer" 
                    image={require("./assets/CardDealerImage.png")} 
                    text="With this demo, I studied React's Class-based Components, managing the state of the deck within the App. Working with the Component Lifecycle allowed me to implement an API call using Axios to load and track the deck as it mounts." 
                    chips={["React", "Class Components", "Component Lifecycle", "Axios"]}
                    link="https://zb-react-cards-api.herokuapp.com"
                    githubLink="https://github.com/praggygruntt/react-cards-api"/>
                </div>
            </div>
            {/* <div className="stars">
              <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div>
            </div> */}
        </main>
      </div>
    );
  }
  
  Portfolio.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
  };
  
  export default Portfolio;