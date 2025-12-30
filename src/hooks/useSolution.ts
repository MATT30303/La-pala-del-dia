import { useEffect, useState } from 'react';
import { SOLUTIONS, SOLUTIONS_EASY, SOLUTIONS_HARD } from '../data';
export function useDailySolution() {
  const [solutionNormal, setSolutionNormal] = useState<string | null>(null);
  const [solutionHard, setSolutionHard] = useState<string | null>(null);
  const [solutionEasy, setSolutionEasy] = useState<string | null>(null);

  function getTodayKey() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  useEffect(() => {
    const today = getTodayKey();
    const stored = localStorage.getItem('daily-solution');

    if (stored) {
      const data = JSON.parse(stored);
      if (data.date === today) {
        setSolutionNormal(data.solution_normal);
        setSolutionHard(data.solution_hard);
        setSolutionEasy(data.solution_easy);
        return;
      }
    }
    const newSolution_NORMAL =
      SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
    const newSolution_EASY =
      SOLUTIONS_EASY[Math.floor(Math.random() * SOLUTIONS_EASY.length)];
    const newSolution_HARD =
      SOLUTIONS_HARD[Math.floor(Math.random() * SOLUTIONS_HARD.length)];

    const newData = {
      solution_normal: newSolution_NORMAL.word,
      solution_hard: newSolution_HARD.word,
      solution_easy: newSolution_EASY.word,
      date: today,
    };

    localStorage.setItem('daily-solution', JSON.stringify(newData));
    setSolutionNormal(newSolution_NORMAL.word);
    setSolutionHard(newSolution_HARD.word);
    setSolutionEasy(newSolution_EASY.word);
  }, [SOLUTIONS]);

  return { solutionNormal, solutionHard, solutionEasy };
}
