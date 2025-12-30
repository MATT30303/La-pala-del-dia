import { useEffect, useState } from 'react';
import { LETTERS } from '../data';
import { Backspace, Enter } from '../icons';
export default function Keypad({
  usedKeys,
  onKeyPress,
  turn,
  isCorrect,
}: {
  usedKeys?: { [key: string]: string };
  onKeyPress: (e: KeyboardEvent) => void;
  turn: number;
  isCorrect: boolean;
}) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(LETTERS);
  }, []);

  const green =
    'bg-[#202B20] border border-[#43A047] text-stone-100 w-12 h-15 font-Manrope uppercase text-2xl font-regular  text-shadow-[0_4px_4px_rgb(0_0_0/_0.4)] flex justify-center items-center rounded-md m-1';
  const yellow =
    'bg-[#2A2820] border border-[#e4a81d] text-stone-100 w-12 h-15 font-Manrope uppercase text-2xl font-regular  text-shadow-[0_4px_4px_rgb(0_0_0/_0.4)] flex justify-center items-center rounded-md m-1';
  const grey =
    'bg-[#232323] border border-[#7A7A7A] text-stone-100 w-12 h-15 font-Manrope uppercase text-2xl font-regular  text-shadow-[0_4px_4px_rgb(0_0_0/_0.4)] flex justify-center items-center rounded-md m-1';
  const normal =
    'bg-[#3A3A3B] border border-[#7a7a7a] text-stone-100 min-w-12 px-2 h-15 font-Manrope uppercase text-2xl font-regular  text-shadow-[0_4px_4px_rgb(0_0_0/_0.5)] flex justify-center items-center rounded-md m-1';

  return (
    <div className="flex w-[35rem] justify-center  flex-wrap">
      {letters &&
        letters.map((l) => {
          const color = usedKeys ? usedKeys[l.key] : '';
          if (l.key === 'Backspace')
            l.label = (
              <Backspace className=" text-stone-100 min-w-12 px-2 h-15 drop-shadow-[0px_4px_4px_rgba(0,0,0,.5)] cursor-pointer flex justify-center items-center rounded-md m-1" />
            );
          if (l.key === 'Enter')
            l.label = (
              <Enter className=" text-stone-100 min-w-12 px-2 h-15  drop-shadow-[0px_4px_4px_rgba(0,0,0,.5)] cursor-pointer flex justify-center items-center rounded-md m-1" />
            );

          return (
            <button
              key={l.key}
              onClick={() => {
                onKeyPress(
                  !isCorrect && turn < 6
                    ? new KeyboardEvent('keyup', { key: l.key })
                    : new KeyboardEvent('keyup', { key: '' })
                );
              }}
              className={`
    ${
      color === 'green'
        ? green
        : color === 'yellow'
        ? yellow
        : color === 'grey'
        ? grey
        : normal
    }
    ${color ? 'animate-popIn' : ''}
    active:scale-95 duration-50 hover:brightness-110 cursor-pointer
  `}
            >
              {l.label}
            </button>
          );
        })}
    </div>
  );
}
