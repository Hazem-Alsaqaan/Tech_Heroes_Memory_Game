

const GameStats = ({ moves, time, matches, totalPairs, score }) => {
  const stats = [
    {
      label: "MOVES",
      value: moves.toString().padStart(2, "0"),
      icon: "🎯",
    },
    {
      label: "TIME",
      value: time,
      icon: "⏱️",
    },
    {
      label: "MATCHES",
      value: `${matches}/${totalPairs}`,
      icon: "🧩",
    },
    {
      label: "SCORE",
      value: score,
      icon: "⭐",
    },
  ];

  return (
    <div className="game-stats">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <div className="stat-icon">{stat.icon}</div>

          <div className="stat-info">
            <span className="stat-label">{stat.label}</span>
            <h3>{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameStats;
