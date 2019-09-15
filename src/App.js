import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Welcome from './Welcome';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Story from './Story';

import './App.css';


function App() {
  
  return (
    <div className="App">
      <Route 
        render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={(routeProps) => <Welcome />}
              />
              <Route
                exact
                path="/portfolio"
                render={(routeProps) => <Portfolio />}
              />
              <Route
                exact
                path="/contact"
                render={(routeProps) => <Contact />}
              />
              <Route
                exact
                path="/story"
                render={(routeProps) => <Story />}
              />
              <Redirect
                exact
                to="/"/>}
              />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        
        )}/>
    </div>
  );
}

export default App;
