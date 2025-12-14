import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import { Grid, Keypad, Modal } from '.';
import { useStats } from '../hooks/useStats';
export default function Wordle({ solution }: { solution: string }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  const { stats, registerLoss, registerWin } = useStats();

  const [showModal, setShowModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    if (!closeModal) {
      if (isCorrect) {
        setTimeout(() => {
          setShowModal(true);
        }, 2000);
        window.removeEventListener('keyup', handleKeyup);
      }
      if (turn > 5) {
        setTimeout(() => {
          setShowModal(true);
        }, 2000);
        window.removeEventListener('keyup', handleKeyup);
      }
    } else {
      setShowModal(false);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn, showModal, closeModal]);
  return (
    <div className="z-10 text-stone-50">
      <div>solucion: {solution}</div>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        solution={solution}
      />
      <Keypad usedKeys={usedKeys} onKeyPress={handleKeyup} />
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          stats={stats}
          setCloseModal={setCloseModal}
        />
      )}
    </div>
  );
}
