

const MemoryCard = ({ card, onClick, isFlipped, isMatched }) => {
  return (
    <div
      className={`memory-card ${isFlipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      }`}
      onClick={onClick}
    >
      <div className="memory-card-inner">
        {/* Card Back */}
        <div className="memory-card-front">
          <span>TH</span>
          <small>TECH HEROES</small>
        </div>

        {/* Card Face */}
        <div className="memory-card-back">
          <span>{card.emoji}</span>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
