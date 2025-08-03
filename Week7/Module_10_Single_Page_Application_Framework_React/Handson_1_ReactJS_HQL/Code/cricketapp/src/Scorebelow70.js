import React from 'react';

const Scorebelow70 = ({ players }) => {
  const below70 = players.filter(player => player.score < 70);

  return (
    <ul>
      {below70.map((player, index) => (
        <li key={index}>{player.name} {player.score}</li>
      ))}
    </ul>
  );
};

export default Scorebelow70;
