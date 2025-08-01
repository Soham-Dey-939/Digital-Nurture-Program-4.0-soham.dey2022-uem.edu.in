import React from 'react';

export const ListOfPlayers = () => {
  const players = [
    { name: 'Rohit Sharma',   score: 57 },
    { name: 'Shubman Gill',    score: 85 },
    { name: 'Virat Kohli',       score: 73 },
    { name: 'Shreyas Iyer',   score: 26 },
    { name: 'KL Rahul',     score: 91 },
    { name: 'Hardik Pandya',   score: 27 },
    { name: 'Ravindra Jadeja',  score: 68},
    { name: 'Ravichandran Ashwin', score: 8 },
    { name: 'Jasprit Bumrah', score: 7 },
    { name: 'Kuldeep Yadav',   score: 20 },
    { name: 'Ravi Bishnoi', score: 31 }
  ];
  // Filter players with score < 70
  const lowScorers = players.filter(p => p.score < 70);
  return (
    <div>
      <h2>All Players (11)</h2>
      <ul>
        {players.map(player => (
          <li key={player.name}>
            {player.name} – {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with Score &lt; 70</h3>
      <ul>
        {lowScorers.map(({ name, score }) => (
          <li key={name}>
            {name} – {score}
          </li>
        ))}
      </ul>
    </div>
  );
};
