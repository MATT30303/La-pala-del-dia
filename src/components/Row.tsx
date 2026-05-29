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
  const green = 'animate-flip-green';
  const yellow = 'animate-flip-yellow';
  const gray = 'animate-flip-gray';
  const base =
    'bg-[#101010]  border border-[#7A7A7A] text-stone-50 w-15 h-15 font-Lato uppercase text-4xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-sm color-stone-50';
  const baseNoBorder =
    'bg-[#101010]  text-stone-50 w-15 h-15 font-Lato uppercase text-4xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-sm color-stone-50';

  if (guess) {
    return (
      <div className={`z-10 mb-2 flex justify-center gap-1`}>
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
        className={`z-10 mb-2 flex justify-center gap-1 ${
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
    <div className="z-10 mb-2 flex justify-center gap-1 ">
      {solution.split('').map((_, i) => (
        <div key={i} className={base}></div>
      ))}
    </div>
  );
}
