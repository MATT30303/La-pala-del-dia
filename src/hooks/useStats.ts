import { useState, useEffect } from 'react';
import { loadStats, saveStats } from '../utils/storage';
import type { Stats } from '../types/stats';

export function useStats() {
  const [stats, setStats] = useState<Stats>(loadStats);

  useEffect(() => {
    saveStats(stats);
  }, [stats]);

  const registerWin = (tries: number) => {
    setStats((prev) => {
      const distribution = [...prev.distribution];

      distribution[tries - 1] += 1;

      return {
        played: prev.played + 1,
        wins: prev.wins + 1,
        currentStreak: prev.currentStreak + 1,
        bestStreak: Math.max(prev.bestStreak, prev.currentStreak + 1),
        distribution,
      };
    });
  };

  const registerLoss = () => {
    setStats((prev) => ({
      ...prev,
      played: prev.played + 1,
      currentStreak: 0,
    }));
  };

  return { stats, registerWin, registerLoss };
}
