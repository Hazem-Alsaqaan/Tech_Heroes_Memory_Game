

const WinScreen = ({
  moves,
  time,
  score,
  bestScore,
  onPlayAgain,
}) => {
  return (
    <div className="win-overlay">
      <div className="win-card">
        <div className="win-trophy">🏆</div>

        <span className="win-label">MISSION COMPLETED</span>

        <h2>You Are a Hero!</h2>

        <p>
          Congratulations! You successfully completed
          the Tech Heroes Memory Challenge.
        </p>

        <div className="win-stats">
          <div>
            <span>TIME</span>
            <strong>{time}</strong>
          </div>

          <div>
            <span>MOVES</span>
            <strong>{moves}</strong>
          </div>

          <div>
            <span>SCORE</span>
            <strong>{score}</strong>
          </div>
        </div>

        <div className="best-score">
          ⭐ Best Score: {bestScore}
        </div>

        <button
          className="play-again-btn"
          onClick={onPlayAgain}
        >
          ↻ PLAY AGAIN
        </button>

        <small>POWERED BY TECH HEROES ACADEMY</small>
      </div>
    </div>
  );
};

export default WinScreen;
