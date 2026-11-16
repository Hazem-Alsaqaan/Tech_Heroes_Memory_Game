

const GameProgress = ({ matches, totalPairs }) => {
  const progress = (matches / totalPairs) * 100;

  return (
    <div className="game-progress">
      <div className="progress-heading">
        <span>YOUR PROGRESS</span>
        <strong>{Math.round(progress)}%</strong>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p>
        {matches} of {totalPairs} pairs discovered
      </p>
    </div>
  );
};

export default GameProgress;
