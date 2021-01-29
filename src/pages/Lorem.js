import React, { Component } from 'react';

import './Lorem.css';
class Lorem extends Component {
  state = {
    data: '',
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(
        'https://baconipsum.com/api/?type=meat-and-filler',
      );
      const data = await response.json();

      this.setState({
        data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);

      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="lds-circle">
            <div></div>
          </div>
        ) : (
          this.state.data
        )}
      </div>
    );
  }
}

export default Lorem;
