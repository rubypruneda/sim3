import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth'
import Friend from './components/Friend/Friend'
import Dashboard from './components/Dashboard/Dashboard'
// import Dummy from './components/Dummy/Dummy'


class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
          <Switch>
            <Route exact path ='/' component={ Auth } />
            <Route path ='/friend' component={ Friend } />
            <Route path = '/dashboard' component = { Dashboard } />
            {/* <Route path = '/dummy' component = { Dummy } /> */}
          </Switch>
        </HashRouter>
        
      </div>
    );
  }
}

export default App;
