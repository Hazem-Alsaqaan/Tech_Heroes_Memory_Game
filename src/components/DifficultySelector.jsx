

const levels = [
  {
    id: "easy",
    name: "Easy",
    pairs: 4,
    description: "8 Cards",
  },
  {
    id: "medium",
    name: "Medium",
    pairs: 8,
    description: "16 Cards",
  },
  {
    id: "hard",
    name: "Hard",
    pairs: 12,
    description: "24 Cards",
  },
];

const DifficultySelector = ({ selectedDifficulty, onChange }) => {
  return (
    <div className="difficulty-section">
      <div className="difficulty-heading">
        <h3>Choose Your Challenge</h3>
        <p>Select your difficulty level</p>
      </div>

      <div className="difficulty-options">
        {levels.map((level) => (
          <button
            key={level.id}
            className={`difficulty-btn ${
              selectedDifficulty === level.id ? "active" : ""
            }`}
            onClick={() => onChange(level.id)}
            type="button"
          >
            <strong>{level.name}</strong>
            <span>{level.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
