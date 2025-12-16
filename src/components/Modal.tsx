import React from 'react';
import { CloseMenu } from '../icons';
import { useStats } from '../hooks/useStats';
export default function Modal({
  solution,
  stats,
  onClose,
  isCorrect,
  turn,
}: {
  solution: string;
  stats: {
    played: number;
    wins: number;
    currentStreak: number;
    bestStreak: number;
    distribution: number[];
  };
  onClose: () => void;
  isCorrect: boolean;
  turn: number;
}) {
  const accuracy =
    stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;

  const STAT_ITEMS = [
    { label: 'Total de jugadas', value: stats.played },
    { label: 'Aciertos', value: `${accuracy}%` },
    { label: 'Racha actual', value: stats.currentStreak },
    { label: 'Mejor racha', value: stats.bestStreak },
  ];
  return (
    <div className="w-full h-full font-Lato absolute top-0 left-0 backdrop-blur-[1px] flex flex-col justify-center items-center">
      <div className="bg-[#1F1F1F] border border-[#7a7a7a] w-[40vw] h-[70vh] flex flex-col p-4 shadow-[0_4px_4px_rgb(0_0_0/_0.5)] justify-center  items-center rounded-md">
        <div className="flex flex-col items-center relative flex-1 w-full">
          <CloseMenu
            className="z-10 absolute right-0 cursor-pointer text-stone-100 hover:scale-110 transition-transform hover:text-cyan-100"
            onClick={() => {
              onClose();
            }}
          />
          {isCorrect && turn <= 6 ? (
            <div className="flex flex-col items-center h-3/12">
              <span className="text-4xl uppercase tracking-wide mt-2 mb-4">
                {solution}
              </span>
              <span className="text-xl text-stone-200">descripcion</span>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col justify-center items-center flex-2">
          <span className="text-3xl font-Lato text-stone-50 mb-4">
            Estadisticas
          </span>
          <div className="flex w-full justify-around mt-4 ">
            {STAT_ITEMS.map(({ label, value }) => (
              <div key={label} className="flex flex-col  items-center w-24">
                <span className="text-3xl mb-2 text-stone-100">{value}</span>
                <span className="text-center font-Lato text-lg text-stone-100">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col justify-center flex-3">
          <span className="text-3xl mb-4 block text-center">Distribución</span>

          <div className="flex flex-col gap-2 px-8">
            {stats.distribution.map((count, i) => {
              const max = Math.max(...stats.distribution, 1);
              const width = (count / max) * 100;
              return (
                <div key={i} className="flex w-9/12 gap-2 items-center">
                  <span className="w-4 ">{i + 1}</span>

                  <div className="flex-1 bg-[#1F1F1F] h-5 flex items-center rounded">
                    <div
                      className="h-full text-right px-4 bg-[#1FB2CC] font-Lato rounded flex items-center justify-end pr-2 text-md text-shadow-[0_0_4px_rgb(0_0_0/_0.8)]"
                      style={{ width: `${width}%` }}
                    >
                      {count >= 0 && count}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
