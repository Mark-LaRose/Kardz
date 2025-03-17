import React, { useState } from 'react';
import '../styles/dropdown.css';

const games = [
  {
    name: '2000',
    rules: {
      description: '2000 is a 2+ player card game that requires 2 decks of cards including the jokers. Players choose who gets to deal first, and 13 cards are dealt out to each player. The top card of the remaining deck is flipped over and is the start of the discard pile. The player who dealt than proceeds with the first turn, either drawing a new card from the pile or drawing all cards from the discard pile if they have 2 or more matching cards or 1 matching card and a wild card(on initial laydown of a set the player must have at least 2 matching cards when using a wild card to complete a 3+ set). Each round players will lay down in front of them sets/books(3+) of matching cards from their hand of cards that is dealt to them.',
      points: [
        '-----SCORING-----',
        '2 (wild) = 30 points',
        'A = 25 points',
        '3 - 9 = 5 points',
        'J, Q, K = 10 points',
        'Q of spades = 100 points',
        'Jokers = 50 points',
      ],
      extraNote: 'The objective of the game is to reach a score of 2000 before all other players. Once a player discards all their cards from their hand the round ends, and all other players add up their remaining cards and deduct it from their score. Also all sets/books layed down count towards their score. If 2 or more players reach 2000 on the final turn of the game, the higher of the two scores wins.',
    },
  },
  {
    name: 'Backwards Cribbage',
    rules: {
      description: 'Backwards Cribbage is a card game where players start with pegs at the skunk line. The game uses a standard deck of cards. Players go one at a time and put 1 card face up in each of 4 piles, then 1 face down for the kitty. Then add 1 card to each pile, face up, deciding where you want it to go to hopefully get the most points. Put 1 card face down in the kitty at the end of each round. When there are 4 cards in each pile + kitty, another player cuts. Add points in each of 4 hands + kitty. Over 30, you move ahead (normal over 30). Under 30, you move backwards (# pts under).',
      points: [
        '-----SCORING-----',
        '2 of a kind = 2 points',
        'Card combos adding to 15 = 2 points',
        'Runs = 1 point per card',
        'Jack of the right suite = 2 points',
      ],
      extraNote: 'The objective of the game is to be the first player to reach "home" by strategically placing cards to maximize points in each round. Players move their pegs forward when scoring over 30 points and backward when scoring under 30 points, with the goal of navigating from the skunk line to home.',
    },
  },
  {
    name: 'Dammit',
    rules: {
      description: 'Dammit is a 2+ player card game that requires 2 decks of cards removing the Jokers from the decks. Players choose who gets to deal first, and 11 cards are dealt out to each player. The top card of the remaining deck is flipped over and is the start of the discard pile. The player to the left of the dealer than proceeds with the first turn, either drawing a new card from the pile or drawing the top card from the discard pile. The objective of the game is to complete all objectives listed below in order before all other players. Once one objective is completed, in the next round the player than moves onto the next objective listed in order. If a player fails to complete their objective, they than have to repeat the objective they are on until completed. ',
      points: [
        '1) 2 sets of 3',
        '2) 1 run of 4, 1 set of 3',
        '3) 3 sets of 3',
        '4) 2 sets of 4',
        '5) 2 runs of 4',
        '6) 1 run of 4, 1 set of 4',
        '7) 1 run of 7, 1 set of 3',
        '8) 1 run of 4, 2 set of 3',
        '9) 2 sets of 5',
        '10) 2 runs of 5',
        '11) 1 set of 8',
        '12) 1 run of 10',
      ],
      extraNote: 'If 2 players complete all the objectives at the same time, the lowest of the 2 scores win. At the end of each round the players that are caught with cards tally up their score, and add it to their existing score from previous rounds. 2 & 3 are wild = 50 points,  A = 25 points, Facecards = 10 points, 4-9 = 5 points',
    },
  },
  {
    name: 'Pass the Ace',
    rules: {
      description: 'Pass the Ace is a card game for 3 or more players using a standard deck of cards. Deal 1 card facedown to each player, and each player has the option to pass their card or stay. If you have a King, you must pass unless a player can’t pass to you, and the card goes around the table; a facedown card gets an X. If you have 3 Aces in a turn and you don’t face up, then you’re out, with the last player standing winning. Receiving an X on a facedown card marks a penalty, but no specific point value is assigned (game ends when only one player remains), and surviving with 3 Aces without facing up results in elimination. ',
      extraNote: 'The objective of the game is to be the last player standing. Players aim to avoid passing cards that result in an X and to manage their hand to avoid elimination with 3 Aces facedown. The game continues until only one player remains, who is declared the winner.',
    },
  },
  {
    name: 'Rummy',
    rules: {
      description: 'Rummy is a 2+ player card game that requires a standard deck of 52 cards (or multiple decks for more players). Players choose who gets to deal first, and 13 cards are dealt to each player. The top card of the remaining deck is flipped over to start the discard pile. The player to the left of the dealer takes the first turn, either drawing a new card from the deck or picking up the top card from the discard pile. The objective of the game is to form valid sets and sequences from the cards in hand and lay them down before other players. A valid set consists of three or more cards of the same rank but different suits, while a valid sequence consists of three or more consecutive cards of the same suit. A player can declare victory when they have completed at least one pure sequence (without a wild card) and have formed the rest of their hand into valid sets or sequences. ',
      points: [
        '-----SCORING-----',
        'Joker and 2s = 50 points',
        'A = 25 points',
        '3 - 9 = 5 points',
        'Face cards (J, Q, K) = 10 points',
      ],
      extraNote: 'The goal is to be the first player to create valid sets and sequences and declare victory. At the end of each round, players who still have cards in hand total up their remaining card values and add them to their score. If multiple players reach the target score on the same turn, the lowest total wins.',
    },
  },
  {
    name: 'Up/Down the Laddder',
    rules: {
      description: 'Up & Down the Ladder is a 3+ player card game that uses a standard 52-card deck, with players starting at an initial score based on the number of cards dealt (13 cards each). The player who dealt proceeds with the first turn, following the suit led or trump as determined each round, with the game cycling through spades, hearts, diamonds, clubs, and no trump, starting with 13 cards dealt and decreasing to 1, 1 being repeated, then back up to 13. Each player predicts how many tricks they will take, and the number can equal the tricks the dealer takes, and you must follow with the suit led, but if you don’t have it, you can trump in or throw away something. If you get your number of predicted tricks, you add 10 to the number predicted and score that many points, but if you don’t make your prediction, you get an X. The game continues with rounds where the number of cards dealt adjusts from 13 down to 1 and back up to 13, with trump suits rotating (spades, hearts, diamonds, clubs, no trump). Successfully predicting and taking the predicted number of tricks adds 10 to the predicted number and scores that amount, while failing to make your prediction results in receiving an X. ',
      extraNote: 'The objective of the game is to accumulate points by accurately predicting and taking tricks, avoiding Xs. The game ends when all rounds are completed (from 13 cards down to 1 and back to 13), and the player with the highest score wins.',
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