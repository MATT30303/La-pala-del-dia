import { useEffect, useState } from 'react';
import { SOLUTIONS } from '../data';
import Wordle from '../components/Wordle.tsx';

export function DefaultWordle_page() {
  const [solution, setSolution] = useState<string | null>(null);

  useEffect(() => {
    const randomSolution =
      SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);

  return (
    <>
      <div className="text-stone-50 w-full h-[svh] flex flex-col items-center justify-center">
        {solution && <Wordle solution={solution}></Wordle>}
      </div>
    </>
  );
}
