
import MemoryCard from "./MemoryCard";

const GameBoard = ({
  cards,
  flippedCards,
  matchedCards,
  onCardClick,
}) => {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <MemoryCard
          key={card.id}
          card={card}
          isFlipped={flippedCards.includes(card.id)}
          isMatched={matchedCards.includes(card.id)}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
