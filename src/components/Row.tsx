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
  const green =
    'bg-[#101010] animate-flip-green border border-[#7A7A7A] text-stone-50 w-18 h-18 font-Lato uppercase text-5xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50';
  const yellow =
    'bg-[#101010] animate-flip-yellow border border-[#7A7A7A] text-stone-50 w-18 h-18 font-Lato uppercase text-5xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)]  flex justify-center items-center rounded-md color-stone-50 ';
  const gray =
    'bg-[#101010] animate-flip-gray border border-[#7A7A7A] text-stone-50 w-18 h-18 font-Lato uppercase text-5xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50';

  if (guess) {
    return (
      <div className={`z-10 mb-3 flex justify-center gap-2`}>
        {guess.map((l, i) => (
          <div
            key={i}
            className={
              l.color === 'green' ? green : l.color === 'yellow' ? yellow : gray
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
        className={`z-10 mb-3 flex justify-center gap-2 ${
          invalidShake ? 'animate-shake' : ''
        }`}
      >
        {currentGuess.split('').map((l, i) => (
          <div
            key={i}
            className="w-18 h-18 animate-popIn bg-[#101010] border border-[#7A7A7A] rounded-md color-stone-50 flex justify-center items-center uppercase text-5xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)]"
          >
            {l}
          </div>
        ))}
        {Array.from({ length: solution.length - currentGuess.length }).map(
          (_, i) => (
            <div
              key={i}
              className={`w-18 h-18 bg-[#101010] border rounded-md 
          ${i === 0 ? ' border-[#1FD7F8]' : 'border-[#7A7A7A]'}`}
            />
          )
        )}
      </div>
    );
  }

  return (
    <div className="z-10 mb-3 flex justify-center gap-2 ">
      {solution.split('').map((_, i) => (
        <div
          key={i}
          className="w-18 h-18 bg-[#101010] border border-[#7A7A7A] rounded-md color-stone-50"
        ></div>
      ))}
    </div>
  );
}
