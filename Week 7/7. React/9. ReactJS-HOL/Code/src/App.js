import React from 'react';
import { ListOfPlayers } from './components/ListOfPlayers';
import { IndianPlayers }  from './components/IndianPlayers';

function App() {
  const flag = true; //true or false toggle
  return (
    <div className="App">
      <h1>Cricket App</h1>
      {flag
        ? <ListOfPlayers />
        : <IndianPlayers />
      }
    </div>
  );
}

export default App;
