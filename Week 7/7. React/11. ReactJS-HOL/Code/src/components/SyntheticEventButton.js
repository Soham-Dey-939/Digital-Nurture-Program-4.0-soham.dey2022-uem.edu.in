import React from 'react';
export class SyntheticEventButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressedMessage: '' };
  }

  handlePress = (e) => {
    console.log(e.type, e); 
    this.setState({ pressedMessage: 'I was clicked' });
  };

  render() {
    return (
      <div style={{ marginBottom: 24 }}>
        <button onClick={this.handlePress}>Click On Me</button>
        <p>{this.state.pressedMessage}</p>
      </div>
    );
  }
}
