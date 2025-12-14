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
      const next = { ...prev };

      next.played += 1;
      next.wins += 1;
      next.currentStreak += 1;
      next.bestStreak = Math.max(next.bestStreak, next.currentStreak);
      next.distribution[tries - 1] += 1;

      return next;
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
