
const cardEmojis = [
  "⚛️",
  "💻",
  "🚀",
  "🎯",
  "🔥",
  "🧠",
  "🎨",
  "🐙",
  "🎮",
  "🛸",
  "⚡",
  "🏆",
];

export const generateCards = (pairCount = 8) => {
  const selectedEmojis = cardEmojis.slice(0, pairCount);

  const cards = [...selectedEmojis, ...selectedEmojis].map(
    (emoji, index) => ({
      id: index + 1,
      emoji,
    })
  );

  // Fisher-Yates Shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [cards[i], cards[randomIndex]] = [
      cards[randomIndex],
      cards[i],
    ];
  }

  return cards;
};
