import React from 'react';

const OddPlayers = ({ players }) => {
  const [first, , third, , fifth] = players;

  return (
    <ul>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </ul>
  );
};

export default OddPlayers;
