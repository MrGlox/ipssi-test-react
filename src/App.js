import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Clock from './containers/Clock';
import Header from './components/Header';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main className="App-main">
            <Header title="Hello world" />
            <Switch>
              <Route path="/clock">
                <Clock />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
