import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import Portfolio from './Portfolio';


import './App.css';

function App() {
  
  return (
    <div className="App">
      <Switch>
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
    </div>
  );
}

export default App;
