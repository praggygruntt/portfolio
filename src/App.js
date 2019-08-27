import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Welcome from './Welcome';
import Portfolio from './Portfolio';


import './App.css';

function App() {
  
  return (
    <div className="App">
      <Route 
        render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={700}>
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
                render={(routeProps) => <Welcome />}
              />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        
        )}/>
    </div>
  );
}

export default App;
