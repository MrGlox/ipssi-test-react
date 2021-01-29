import React, { Component } from 'react';
import logo from '../logo.svg';

import Form from '../components/Form';
import List from '../components/List';

class Home extends Component {
  state = {
    value: '',
  };

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value,
    });
  };

  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <Form value={this.state.value} handleChange={this.handleChange} />
        <List value={this.state.value} />
      </>
    );
  }
}

export default Home;

{
  /* <Item title={data[0].title} status={data[0].status}>
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
          </a> */
}
