const STATS_KEY = 'wordle-stats';

import type { Stats } from '../types/stats';

export const loadStats = (): Stats => {
  const data = localStorage.getItem(STATS_KEY);
  return data
    ? JSON.parse(data)
    : {
        played: 0,
        wins: 0,
        currentStreak: 0,
        bestStreak: 0,
        distribution: [0, 0, 0, 0, 0, 0],
      };
};

export const saveStats = (stats: Stats) => {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};
