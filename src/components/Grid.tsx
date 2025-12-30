import Row from './Row';

export default function Grid({
  currentGuess,
  guesses,
  turn,
  solution,
  invalidShake,
}: {
  currentGuess: string;
  guesses: any[];
  turn: number;
  solution: string;
  invalidShake: boolean;
}) {
  return (
    <div className=" h-[50vh]">
      {guesses.map((g, i) => (
        <Row
          key={i}
          guess={g}
          currentGuess={i === turn ? currentGuess : undefined}
          solution={solution}
          invalidShake={i === turn ? invalidShake : false}
        />
      ))}
    </div>
  );
}
