import React from 'react';
export class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };
  }

  // Update rupees as user types
  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  // On form submit, convert to euros
  handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.011; 
    const euros = this.state.rupees * rate;
    this.setState({ euros: euros.toFixed(2) });
  };

  render() {
    return (
      <div style={{ marginBottom: 24 }}>
        <h2>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            INR:
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
              style={{ marginLeft: 8 }}
            />
          </label>
          <button type="submit" style={{ marginLeft: 8 }}>
            Convert
          </button>
        </form>
        {this.state.euros !== null && (
          <p>Euros: €{this.state.euros}</p>
        )}
      </div>
    );
  }
}
