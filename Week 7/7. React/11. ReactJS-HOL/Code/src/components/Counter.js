import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  // Method to increment the count
  incrementCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  // Method to decrement the count
  decrementCount = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  // Method to say hello with a static message
  sayHello = () => {
    this.setState({ message: 'Hello! You clicked Increment.' });
  };

  // Combined handler: increments count and says hello
  handleIncrease = () => {
    this.incrementCount();
    this.sayHello();
  };

  render() {
    return (
      <div style={{ marginBottom: 24 }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increment</button>
        <button onClick={this.decrementCount} style={{ marginLeft: 8 }}>
          Decrement
        </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
