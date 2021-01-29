import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './containers/Clock';

import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  state = {
    value: 'test',
  };

  render() {
    return (
      <div className="App">
        <main className="App-main">
          <Header title="Hello world" />

          <Clock />

          <img src={logo} className="App-logo" alt="logo" />

          <Form />
          <List />

          {/* <Item title={data[0].title} status={data[0].status}>
            {data[0].children}
          </Item>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a> */}
        </main>
      </div>
    );
  }
}

export default App;
