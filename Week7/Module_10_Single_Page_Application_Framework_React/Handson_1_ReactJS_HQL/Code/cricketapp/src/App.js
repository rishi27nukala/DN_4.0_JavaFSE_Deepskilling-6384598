import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

const App = () => {
  const flag = true;

  const players = [
    { name: "Mr. Jack", score: 80 },
    { name: "Mr. Michael", score: 70 },
    { name: "Mr. John", score: 60 },
    { name: "Mr. Alan", score: 48 },
    { name: "Mr. Elisabeth", score: 61 },
    { name: "Mr. Sarah", score: 95 },
    { name: "Mr. Chuck", score: 100 },
    { name: "Mr. Mark", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Rohit", score: 80 },
  ];

  const T20 = ['Sachin1', 'Virat3', 'Yuvraj5'];
  const Ranji = ['Dhoni2', 'Rohit4', 'Raina6'];
  const IndianTeam = [...T20, ...Ranji];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeam} />
        </div>
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianTeam} />
      </div>
    );
  }
};

export default App;
