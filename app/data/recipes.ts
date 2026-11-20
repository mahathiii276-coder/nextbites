export type Recipe = {
  id: number;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Tuscan Pasta",
    emoji: "🍝",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Italian",
  },
  {
    id: 2,
    title: "Honey Garlic Salmon",
    emoji: "🐟",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Asian",
  },
  {
    id: 3,
    title: "Chicken Tacos",
    emoji: "🌮",
    minutes: 35,
    difficulty: "Easy",
    cuisine: "Mexican",
  },
  {
    id: 4,
    title: "Vegetable Curry",
    emoji: "🍛",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: 5,
    title: "Classic Margherita Pizza",
    emoji: "🍕",
    minutes: 50,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: 6,
    title: "Beef Bourguignon",
    emoji: "🥘",
    minutes: 120,
    difficulty: "Hard",
    cuisine: "French",
  },
  {
    id: 7,
    title: "Fresh Greek Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Greek",
  },
  {
    id: 8,
    title: "Japanese Ramen",
    emoji: "🍜",
    minutes: 70,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: 9,
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
  },
];
