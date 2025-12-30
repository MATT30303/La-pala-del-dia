import { useEffect, useState } from 'react';
import { SOLUTIONS, SOLUTIONS_HARD, SOLUTIONS_EASY } from '../data/index.ts';
import Wordle from '../components/Wordle.tsx';
export function DefaultWordle_page() {
  const [solutionNormal, setSolutionNormal] = useState<string | null>(null);
  const [solutionHard, setSolutionHard] = useState<string | null>(null);
  const [solutionEasy, setSolutionEasy] = useState<string | null>(null);
  const [solution, setSolution] = useState<string | null>(null);
  const [gamemode, setGamemode] = useState<'normal' | 'hard' | 'easy'>(
    'normal'
  );
  useEffect(() => {
    const randomSolution =
      SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
    setSolutionNormal(randomSolution.word);
    const randomSolutionHard =
      SOLUTIONS_HARD[Math.floor(Math.random() * SOLUTIONS_HARD.length)];
    setSolutionHard(randomSolutionHard.word);
    const randomSolutionEasy =
      SOLUTIONS_EASY[Math.floor(Math.random() * SOLUTIONS_EASY.length)];
    setSolutionEasy(randomSolutionEasy.word);
  }, [setSolution]);

  useEffect(() => {
    if (gamemode === 'easy') setSolution(solutionEasy);
    if (gamemode === 'normal') setSolution(solutionNormal);
    if (gamemode === 'hard') setSolution(solutionHard);
  }, [gamemode, solutionEasy, solutionHard, solutionNormal]);

  const handleGameMode = (game: number) => {
    const setGame: Record<number, () => void> = {
      1: () => {
        setGamemode('normal');
        setSolution(solution);
      },
      2: () => {
        setGamemode('hard');
        setSolution(solutionHard);
      },
      3: () => {
        setGamemode('easy');
        setSolution(solutionEasy);
      },
    };
    setGame[game]?.();
  };
  return (
    <>
      <div className="text-stone-50 w-full h-[svh] flex flex-col items-center justify-center">
        {solution && (
          <Wordle
            key={gamemode + '-' + solution}
            solution={solution}
            gamemode={gamemode}
            handleGameMode={handleGameMode}
          ></Wordle>
        )}
      </div>
    </>
  );
}
