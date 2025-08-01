import React from 'react';
export class SayWelcomeButton extends React.Component {
  sayWelcome = (msg) => {
    alert(`Welcome message: ${msg}`);
  };

  render() {
    return (
      <div style={{ marginBottom: 24 }}>
        <button onClick={() => this.sayWelcome('welcome')}>
          Say Welcome
        </button>
      </div>
    );
  }
}
