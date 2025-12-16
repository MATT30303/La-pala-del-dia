import { useEffect, useRef, useState } from 'react';
import useWordle from '../hooks/useWordle';
import { Grid, Keypad, Modal, Header, Menu } from '.';
import { useStats } from '../hooks/useStats';
export default function Wordle({ solution }: { solution: string }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  const { stats, registerLoss, registerWin } = useStats();

  const [showModal, setShowModal] = useState(false);
  const hasRegistered = useRef(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      window.removeEventListener('keyup', handleKeyup);
    }
    if (turn > 5) {
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, turn, isCorrect]);

  useEffect(() => {
    if (hasRegistered.current) return;

    if (isCorrect) {
      console.log('register win');
      hasRegistered.current = true;
      registerWin(turn);
      setTimeout(() => setShowModal(true), 2000);
      return;
    }

    if (turn > 5) {
      hasRegistered.current = true;
      registerLoss();
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [isCorrect, turn, registerWin, registerLoss]);

  return (
    <div className="z-10 text-stone-50 h-[100svh] w-[100svw] flex flex-col justify-end items-center pt-6 gap-6">
      <div className="flex-1">
        <Header
          onModalOpen={() => setShowModal(true)}
          onMenuOpen={() => setShowMenu(true)}
        />
      </div>
      <span> </span>
      <div className="h-full flex flex-col items-center justify-between gap-0 mb-6">
        <Grid
          currentGuess={currentGuess}
          guesses={guesses}
          turn={turn}
          solution={solution}
        />
        <Keypad
          usedKeys={usedKeys}
          onKeyPress={handleKeyup}
          turn={turn}
          isCorrect={isCorrect}
        />
      </div>
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          stats={stats}
          onClose={() => setShowModal(false)}
        />
      )}
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
    </div>
  );
}
