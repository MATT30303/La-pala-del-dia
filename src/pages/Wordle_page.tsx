import { useEffect, useState } from 'react';
import Wordle from '../components/Wordle.tsx';
import { useDailySolution } from '../hooks/useDailySolution.ts';
export function DefaultWordle_page() {
  const { solutionNormal, solutionHard, solutionEasy, descriptionNormal } =
    useDailySolution();
  const [solution, setSolution] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [gamemode, setGamemode] = useState<'normal' | 'hard' | 'easy'>(
    'normal'
  );
  useEffect(() => {
    if (gamemode === 'easy') {
      setSolution(solutionEasy);
      setDescription(null);
    }
    if (gamemode === 'normal') {
      setSolution(solutionNormal);
      setDescription(descriptionNormal);
    }
    if (gamemode === 'hard') {
      setSolution(solutionHard);
      setDescription(null);
    }
  }, [gamemode, solutionEasy, solutionHard, solutionNormal, descriptionNormal]);

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
            description={description}
            gamemode={gamemode}
            handleGameMode={handleGameMode}
          ></Wordle>
        )}
      </div>
    </>
  );
}
