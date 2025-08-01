// src/components/UserPage.js
import React from 'react';

export function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Book Your Ticket</h2>
      <form>
        <label>
          Select Flight:
          <select>
            <option>Flight A - 08:35 AM</option>
            <option>Flight B - 11:30 AM</option>
            <option>Flight C - 06:30 AM</option>
            <option>Flight D - 01:25 PM</option>
            <option>Flight E - 9:30 PM</option>
            <option>Flight F - 10:50 AM</option>
            <option>Flight G - 3:10 PM</option>
          </select>
        </label>
        <button type="submit">Book Now</button>
      </form>
      <button onClick={onLogout} style={{ marginTop: '1rem' }}>
        Logout
      </button>
    </div>
  );
}
