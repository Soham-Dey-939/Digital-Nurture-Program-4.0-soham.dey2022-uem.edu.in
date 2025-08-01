import React from 'react';
export function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Here are today’s flights:</p>
      <ul>
        <li>Flight A - 08:35 AM</li>
        <li>Flight B - 11:30 AM</li>
        <li>Flight C - 06:30 AM</li>
        <li>Flight D - 01:25 PM</li>
        <li>Flight E - 9:30 PM</li>
        <li>Flight F - 10:50 AM</li>
        <li>Flight G - 3:10 PM</li>
      </ul>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
