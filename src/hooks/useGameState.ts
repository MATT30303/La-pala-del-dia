import { useState, useEffect } from 'react';
import { loadGameState, saveGameState } from '../utils/gameStorage';
const DEFAULT_STATE = {
  turn: 0,
  currentGuess: '',
  guesses: Array(6).fill(null),
  history: [],
  isCorrect: false,
  gameCompleted: false,
  usedKeys: {},
  solutionStored: null,
};
export function useGameState(gamemode: 'normal' | 'hard' | 'easy') {
  const [gameState, setGameState] = useState(() => loadGameState(gamemode));

  useEffect(() => {
    setGameState(loadGameState(gamemode));
  }, [gamemode]);

  useEffect(() => {
    if (gameState) {
      saveGameState(gamemode, gameState);
    }
  }, [gamemode, gameState]);

  const updateGameState = (update) => {
    setGameState((prev) => {
      const base = prev ?? {};
      const changes = typeof update === 'function' ? update(base) : update;

      return { ...base, ...changes };
    });
  };

  const resetGameState = (solution: string) => {
    const newState = { ...DEFAULT_STATE, solutionStored: solution };
    saveGameState(gamemode, newState);
    setGameState(newState);
  };

  return { gameState, updateGameState, resetGameState, loadGameState };
}
