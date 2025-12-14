import React from 'react';
import { Escarapela } from '../icons';
import { useStats } from '../hooks/useStats';
export default function Modal({
  solution,
  stats,
  setCloseModal,
  isCorrect,
  turn,
}: {
  isCorrect: boolean;
  turn: number;
  solution: string;
  stats: {
    played: number;
    wins: number;
    currentStreak: number;
    bestStreak: number;
    distribution: number[];
  };
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
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
      <div className="bg-[#1F1F1F] border border-[#7a7a7a] w-[40vw] h-[70vh] flex flex-col p-4 items-center rounded-md">
        <div className="flex flex-col items-center h-3/12 relative  w-full">
          <Escarapela
            className="z-10 absolute right-0 cursor-pointer"
            onClick={() => {
              setCloseModal(true);
            }}
          />
          <span className="text-4xl uppercase tracking-wide mt-2 mb-4">
            {solution}
          </span>
          <span className="text-xl text-stone-200">descripcion</span>
        </div>
        <span className="text-3xl font-Lato text-stone-50 mb-4">
          Estadisticas
        </span>
        <div className="flex w-full justify-around mt-4 mb-8">
          {STAT_ITEMS.map(({ label, value }) => (
            <div key={label} className="flex flex-col  items-center w-24">
              <span className="text-3xl mb-2 text-stone-100">{value}</span>
              <span className="text-center font-Lato text-lg text-stone-100">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col justify-center ">
          <span className="text-3xl mb-4 block text-center">Distribución</span>

          <div className="flex flex-col gap-2 px-8">
            {stats.distribution.map((count, i) => {
              const max = Math.max(...stats.distribution, 1);
              const width = (count / max) * 100;
              return (
                <div key={i} className="flex w-full gap-2">
                  <span className="w-4">{i + 1}</span>

                  <div className="flex-1 bg-[#1F1F1F] h-6 rounded">
                    <div
                      className="h-full bg-[#1FC4E2] font-Lato rounded flex items-center justify-end pr-2 text-md text-shadow-[0_0_4px_rgb(0_0_0/_0.8)]"
                      style={{ width: `${width}%` }}
                    >
                      {count > 0 && count}
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
