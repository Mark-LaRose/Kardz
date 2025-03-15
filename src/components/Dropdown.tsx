import React, { useState } from 'react';
import '../styles/dropdown.css';

const games = [
  {
    name: 'Cribbage',
    rules: {
      description: 'Cribbage is a game of skill and strategy...',
    },
  },
  {
    name: '2000',
    rules: {
      description: '2000 is a card game where you aim for 21...',
    },
  },
  {
    name: 'Dammit',
    rules: {
      description: 'Dammit is a 2+ player card game that requires 2 decks of cards. Players choose who gets to deal first, and 11 cards are dealt out to each player. The top card of the remaining deck is flipped over and is the start of the discard pile. The player to the left of the dealer than proceeds with the first turn, either drawing a new card from the pile or drawing the top card from the discard pile. The objective of the game is to complete all objectives listed below in order before all other players. Once one obejective is completed the player than moves onto the next objective listed in order. ',
      points: [
        '2 sets of 3',
        '1 run of 4, 1 set of 3',
        '3 sets of 3',
        '2 sets of 4',
        '2 runs of 4',
        '1 run of 4, 1 set of 4',
        '1 run of 7, 1 set of 3',
        '1 run of 4, 2 set of 3',
        '2 sets of 5',
        '2 runs of 5',
        '1 set of 8',
        '1 run of 10',
      ],
      extraNote: 'If 2 players complete all the objectives at the same time, the lowest of the 2 scores win. At the end of each round the players that are caught with cards tally up their score, and add it to their existing score from previous rounds. 2 & 3 are wild = 50 points,  A = 25 points, Facecards = 10 points, 4-9 = 5 points',
    },
  },
  {
    name: 'Rummy',
    rules: {
      description: 'Rummy is a group of matching-card games...',
      points: [
        'The objective is to form valid sets and sequences.',
        'Different variations exist like Gin Rummy and Indian Rummy.',
      ],
      extraNote: 'Rummy requires skill, patience, and planning.',
    },
  },
];

interface Props {
  onSelect: (rules: { 
    description?: string;
    points?: string[];
    extraNote?: string;
  } | null) => void;
}

const Dropdown: React.FC<Props> = ({ onSelect }) => {
  const [selectedGame, setSelectedGame] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = games.find((game) => game.name === event.target.value);
    setSelectedGame(event.target.value);
    onSelect(selected ? selected.rules : null);
  };

  return (
    <div>
      <label className="dropdown-label">Choose a card game: </label>
      <select id="game-select" value={selectedGame} onChange={handleChange}>
        <option value="">Select a game</option>
        {games.map((game) => (
          <option key={game.name} value={game.name}>
            {game.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;