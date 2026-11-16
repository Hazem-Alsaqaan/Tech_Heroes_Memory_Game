
import { useState, useEffect } from "react";

import Header from "./components/Header";
import GameStats from "./components/GameStats";
import GameBoard from "./components/GameBoard";
import DifficultySelector from "./components/DifficultySelector";
import WinScreen from "./components/WinScreen";
import GameProgress from "./components/GameProgress";
import Footer from "./components/Footer";
import { generateCards } from "./data/cards";

import "./App.css";

const difficultyPairs = {
  easy: 4,
  medium: 8,
  hard: 12,
};

function App() {
  const [difficulty, setDifficulty] = useState("medium");

  const [cards, setCards] = useState(() => generateCards(8));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("techHeroesBestScore")) || 0;
  });

  const totalPairs = difficultyPairs[difficulty];
  const isWon = matchedCards.length === cards.length;

  // Reset game
  const resetGame = (level = difficulty) => {
    setCards(generateCards(difficultyPairs[level]));
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setScore(0);
    setSeconds(0);
  };

  // Change difficulty
  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    resetGame(level);
  };

  // Handle card click
  const handleCardClick = (id) => {
    if (
      isWon ||
      flippedCards.length === 2 ||
      flippedCards.includes(id) ||
      matchedCards.includes(id)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, id];

    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
    }
  };

  // Compare cards
  useEffect(() => {
    if (flippedCards.length !== 2) return;

    const [firstId, secondId] = flippedCards;

    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    const isMatch = firstCard.emoji === secondCard.emoji;

    const timeout = setTimeout(() => {
      if (isMatch) {
  const newMatchedCards = [
    ...matchedCards,
    firstId,
    secondId,
  ];

  const newScore = score + 100;

  setMatchedCards(newMatchedCards);
  setScore(newScore);

  const isGameCompleted =
    newMatchedCards.length === cards.length;

  if (isGameCompleted && newScore > bestScore) {
    setBestScore(newScore);

    localStorage.setItem(
      "techHeroesBestScore",
      String(newScore)
    );
  }
}

      setFlippedCards([]);
    }, isMatch ? 500 : 1000);

    return () => clearTimeout(timeout);
  }, [flippedCards, cards, matchedCards, score, bestScore]);

  // Timer
  useEffect(() => {
    if (moves === 0 || isWon) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [moves, isWon]);

  // Format time
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

 

  return (
    <div className="app-container">
      <Header />

      <DifficultySelector
        selectedDifficulty={difficulty}
        onChange={handleDifficultyChange}
      />

      <GameStats
        moves={moves}
        time={formatTime(seconds)}
        matches={matchedCards.length / 2}
        totalPairs={totalPairs}
        score={score}
      />
<GameProgress
  matches={matchedCards.length / 2}
  totalPairs={totalPairs}
/>
      <GameBoard
        cards={cards}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        onCardClick={handleCardClick}
      />

      <button
        className="restart-btn"
        onClick={() => resetGame()}
      >
        ↻ Restart Game
      </button>

      {isWon && (
        <WinScreen
          moves={moves}
          time={formatTime(seconds)}
          score={score}
          bestScore={bestScore}
          onPlayAgain={() => resetGame()}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
