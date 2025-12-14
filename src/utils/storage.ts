const STATS_KEY = 'wordle-stats';

import type { Stats } from '../types/stats';

export const loadStats = (): Stats => {
  const data = localStorage.getItem(STATS_KEY);
  return data
    ? JSON.parse(data)
    : {
        played: 182,
        wins: 172,
        currentStreak: 12,
        bestStreak: 39,
        distribution: [0, 6, 36, 65, 45, 20],
      };
};

export const saveStats = (stats: Stats) => {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};
