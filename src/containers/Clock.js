import React, { Component } from 'react';

class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(() => {
      this.setState({
        date: new Date(),
      });
    });
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
