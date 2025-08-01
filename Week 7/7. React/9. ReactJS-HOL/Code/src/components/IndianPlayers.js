// src/components/IndianPlayers.js
import React from 'react';

export const IndianPlayers = () => {
  // Base list
  const players = [
    'MS Dhoni',
    'Virat Kohli',
    'Rohit Sharma',
    'KL Rahul',
    'Rahul Dravid',
    'Rishabh Pant',
    'Sachin Tendulkar',
    'Shreyas Iyer',
    'Sourav Ganguly',
    'Cheteshwar Pujara',
    'Abhishek Sharma',
    'Hardik Pandya',
  ];

  // Odd/even by index
  const oddTeam  = players.filter((_, idx) => idx % 2 === 0);
  const evenTeam = players.filter((_, idx) => idx % 2 !== 0);

  // Two separate arrays to merge
  const T20players       = ['MS Dhoni', 'Ahbishek Sharma', 'Tilak Verma'];
  const RanjiTrophyPlays = ['Cheteshwar Pujara', 'Karun Nair', 'Sai Kishore'];
  const mergedPlayers    = [...T20players, ...RanjiTrophyPlays];

  return (
    <div>
      <h2>Indian Team Breakdown</h2>

      <h3>Odd-Indexed Players</h3>
      <ul>
        {oddTeam.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h3>Even-Indexed Players</h3>
      <ul>
        {evenTeam.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <h3>All Players (T20 + Ranji)</h3>
      <ul>
        {mergedPlayers.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
};
