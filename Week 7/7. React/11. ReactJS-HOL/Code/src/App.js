import logo from './logo.svg';
import React from 'react';
import { Counter } from './components/Counter';
import { SayWelcomeButton } from './components/SayWelcomeButton';
import { SyntheticEventButton } from './components/SyntheticEventButton';
import { CurrencyConvertor } from './components/CurrencyConvertor';

function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Event App</h1>
      <Counter />
      <SayWelcomeButton />
      <SyntheticEventButton />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
