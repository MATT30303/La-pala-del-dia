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
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'];
  const row3 = ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'];

  const green =
    'bg-[#202B20] border border-[#43A047] text-stone-100 w-8 sm:w-10 md:w-12 lg:w-12 h-10 sm:h-12 md:h-15 font-Manrope uppercase text-lg sm:text-xl md:text-2xl font-regular text-shadow-[0_4px_4px_rgb(0_0_0/_0.4)] flex justify-center items-center rounded-md m-[2px] sm:m-1';

  const yellow =
    'bg-[#2A2820] border border-[#e4a81d] text-stone-100 w-8 sm:w-10 md:w-12 lg:w-12 h-10 sm:h-12 md:h-15 font-Manrope uppercase text-lg sm:text-xl md:text-2xl font-regular text-shadow-[0_4px_4px_rgb(0_0_0/_0.4)] flex justify-center items-center rounded-md m-[2px] sm:m-1';

  const grey =
    'bg-[#232323] border border-[#7A7A7A] text-stone-100 w-8 sm:w-10 md:w-12 lg:w-12 h-10 sm:h-12 md:h-15 font-Manrope uppercase text-lg sm:text-xl md:text-2xl font-regular text-shadow-[0_4px_4px_rgb(0_0_0/_0.4)] flex justify-center items-center rounded-md m-[2px] sm:m-1';

  const normal =
    'bg-[#3A3A3B] border border-[#7a7a7a] text-stone-100 min-w-8 sm:min-w-10 md:min-w-12 lg:min-w-12  px-2 sm:px-2 h-10 sm:h-10 md:h-13 lg:h-13 font-Manrope uppercase text-lg sm:text-xl md:text-2xl font-regular text-shadow-[0_4px_4px_rgb(0_0_0/_0.5)] flex justify-center items-center rounded-md m-[2px] sm:m-1';

  function renderKey(key: string) {
    const color = usedKeys ? usedKeys[key] : '';

    const handleClick = () => {
      onKeyPress(
        !isCorrect && turn < 6
          ? new KeyboardEvent('keyup', { key })
          : new KeyboardEvent('keyup', { key: '' }),
      );
    };

    let label: React.ReactNode = key;

    if (key === 'Backspace') {
      label = (
        <Backspace className="w-5 mx-2 md:w-7 md:h-10 lg:mx-3  drop-shadow-[0px_4px_4px_rgba(0,0,0,.5)]" />
      );
    }

    if (key === 'Enter') {
      label = (
        <Enter className="w-5 mx-2 md:w-7 md:h-10 lg:mx-3 drop-shadow-[0px_4px_4px_rgba(0,0,0,.5)]" />
      );
    }

    return (
      <button
        key={key}
        onClick={handleClick}
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
          ${color ? ' animate-popIn' : ' '}
          duration-50 hover:brightness-110 cursor-pointer

        `}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center w-full pb-4">
      {/* ROW 1 */}
      <div className="w-full flex justify-between ">{row1.map(renderKey)}</div>

      {/* ROW 2 */}
      <div className="w-full flex justify-between ">{row2.map(renderKey)}</div>

      {/* ROW 3 */}
      <div className="w-full flex justify-between">{row3.map(renderKey)}</div>
    </div>
  );
}
