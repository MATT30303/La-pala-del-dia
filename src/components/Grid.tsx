import Row from './Row';

type GridProps = {
  currentGuess: string;
  guesses: any[];
  turn: number;
  solution: string;
};

export default function Grid({
  currentGuess,
  guesses,
  turn,
  solution,
}: GridProps) {
  return (
    <div className=" h-[50vh] relative top-28">
      {guesses.map((g, i) => {
        if (turn === i) {
          return (
            <Row key={i} solution={solution} currentGuess={currentGuess} />
          );
        }

        return <Row key={i} solution={solution} guess={g} />;
      })}
    </div>
  );
}
