import React from 'react';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

const IndianTeam = [...T20Players, ...RanjiTrophyPlayers]; // Merge arrays

const OddPlayers = ([first, , third]) => (
  <div>
    <h3>Odd Players</h3>
    <ul>
      <li>{first}</li>
      <li>{third}</li>
    </ul>
  </div>
);

const EvenPlayers = ([, second, , fifth]) => (
  <div>
    <h3>Even Players</h3>
    <ul>
      <li>{second}</li>
      <li>{fifth}</li>
    </ul>
  </div>
);

const IndianPlayers = () => {
  return (
    <div>
      <OddPlayers players={IndianTeam} />
      <EvenPlayers players={IndianTeam} />

      <h3>List of Indian Players Merged:</h3>
      <ul>
        {IndianTeam.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
