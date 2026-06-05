export default function Row({
  solution,
  guess,
  currentGuess,
  invalidShake,
}: {
  solution: string;
  guess?: { key: string; color: string }[] | null;
  currentGuess?: string | '';
  invalidShake: boolean;
}) {
  const getTileClasses = (length: number) => {
    if (length <= 5) {
      return {
        size: 'w-15 min-w-7 max-w-15',
        text: 'text-4xl',
      };
    }

    if (length <= 7) {
      return {
        size: 'w-13 min-w-7 max-w-13',
        text: 'text-3xl',
      };
    }

    if (length <= 9) {
      return {
        size: 'w-11 min-w-7 max-w-11',
        text: 'text-2xl',
      };
    }

    if (length <= 11) {
      return {
        size: 'w-10 min-w-7 max-w-10',
        text: 'text-xl',
      };
    }

    return {
      size: 'w-8 min-w-7 max-w-8',
      text: 'text-lg',
    };
  };
  const gapClass = solution.length > 10 ? 'gap-[2px]' : 'gap-1';
  const { size, text } = getTileClasses(solution.length);
  const green = 'animate-flip-green';
  const yellow = 'animate-flip-yellow';
  const gray = 'animate-flip-gray';
  const base = `
  bg-[#101010]
  border border-[#7A7A7A]
  text-stone-50
  ${size}
  aspect-square
  min-h-7
  ${text}
  font-Lato
  uppercase
  font-semibold
  text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)]
  flex
  justify-center
  items-center
  rounded-sm
`;

  const baseNoBorder = `
  bg-[#101010]
  text-stone-50
  ${size}
  aspect-square
  min-h-7
  ${text}
  font-Lato
  uppercase
  font-semibold
  text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)]
  flex
  justify-center
  items-center
  rounded-sm
`;
  if (guess) {
    return (
      <div className={`mb-2 flex justify-center ${gapClass}  `}>
        {guess.map((l, i) => (
          <div
            key={i}
            className={
              base +
              ' ' +
              (l.color === 'green'
                ? green
                : l.color === 'yellow'
                  ? yellow
                  : gray)
            }
            style={{ animationDelay: `${i * 0.13}s` }}
          >
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess === '' || currentGuess) {
    return (
      <div
        className={`mb-2 flex justify-center ${gapClass} ${
          invalidShake ? 'animate-shake' : ''
        }`}
      >
        {currentGuess.split('').map((l, i) => (
          <div key={i} className={base + ' animate-popIn'}>
            {l}
          </div>
        ))}
        {Array.from({ length: solution.length - currentGuess.length }).map(
          (_, i) => (
            <div
              key={i}
              className={
                baseNoBorder +
                ' ' +
                `${i === 0 ? 'border border-[#1FD7F8]' : 'border border-[#7A7A7A]'}`
              }
            />
          ),
        )}
      </div>
    );
  }

  return (
    <div className={`mb-2 flex justify-center ${gapClass} `}>
      {solution.split('').map((_, i) => (
        <div key={i} className={base}></div>
      ))}
    </div>
  );
}
