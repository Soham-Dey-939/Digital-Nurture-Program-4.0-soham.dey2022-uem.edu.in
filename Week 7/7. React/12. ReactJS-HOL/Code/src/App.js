import logo from './logo.svg';
import React, { useState } from 'react';
import { GuestPage } from './components/GuestPage';
import { UserPage } from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let page;
  if (isLoggedIn) {
    page = <UserPage onLogout={() => setIsLoggedIn(false)} />;
  } else {
    page = <GuestPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ticket Booking App</h1>
      {page}
    </div>
  );
}

export default App;

