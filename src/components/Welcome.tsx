export default function Welcome({ onClose }: { onClose: () => void }) {
  const txt1 = ['L', 'A'];
  const txt2 = ['B', 'O', 'L', 'U', 'D', 'E', 'Z'];
  const txt3 = ['D', 'E', 'L'];
  const txt4 = ['D', 'I', 'A'];

  return (
    <div
      className="h-full w-full z-30 flex flex-col justify-center items-center cursor-default"
      id="welcome"
    >
      <div className="flex-1 mt-4 flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {txt1.map((l, k) => {
            return (
              <span
                key={k}
                className="bg-[#3A3A3B] border border-[#7A7A7A] text-stone-50 w-13 h-15 font-Lato uppercase text-4xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50"
              >
                {l}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2 mb-4">
          {txt2.map((l, k) => {
            return (
              <span
                key={k}
                className="bg-[#2fb80d] text-stone-50 w-13 h-15 font-Lato uppercase text-4xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50"
              >
                {l}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2 mb-4">
          {txt3.map((l, k) => {
            return (
              <span
                key={k}
                className="bg-[#3A3A3B] border border-[#7A7A7A] text-stone-50 w-13 h-15 font-Lato uppercase text-4xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50"
              >
                {l}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2 mb-4">
          {txt4.map((l, k) => {
            return (
              <span
                key={k}
                className="bg-[#e4a81d] text-stone-50 w-13 h-15 font-Lato uppercase text-4xl font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50"
              >
                {l}
              </span>
            );
          })}
        </div>
        <div className="font-Lato text-xl w-9/12 flex flex-col gap-2 font-regular text-stone-50">
          <p className="flex">
            Las reglas son simples: adivina la palabra argentina oculta en 6
            intentos.
          </p>
          <p>Cada intento debe ser una palabra valida. </p>
          <p className="mb-6">Si la palabra no existe el juego te avisara</p>
          <span>
            Despues de cada intento el color de las casillas cambia para mostrar
            que tan cerca estas de acertar la palabra
          </span>
        </div>
        <div className="w-[80%] mt-4 flex flex-col gap-8 font-Lato text-stone-50 text-lg">
          <div className="w-full flex items-center gap-5">
            <span className="bg-[#3A3A3B] border border-[#7A7A7A] text-stone-50 w-15 h-18 font-Lato uppercase text-[2.5rem] font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50">
              V
            </span>
            <span>
              GRIS significa que la letra NO esta presente en la palabra
            </span>
          </div>
          <div className="w-full flex items-center gap-5">
            <span className="bg-[#2fb80d] text-stone-50 w-15 h-18 font-Lato uppercase text-[2.5rem] font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50">
              A
            </span>
            <span className="w-9/12">
              VERDE significa que la letra esta en la palabra y esta en la
              posicion CORRECTA
            </span>
          </div>
          <div className="w-full flex items-center gap-4">
            <span className="bg-[#e4a81d] text-stone-50 w-15 h-18 font-Lato uppercase text-[2.5rem] font-semibold text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50">
              R
            </span>
            <span className="w-9/12">
              AMARILLO significa que la letra esta presente en la palabra pero
              en la posicion INCORRECTA
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between mt-12">
          <span className="font-Lato text-xl text-stone-50">
            Una palabra nueva cada dia!
          </span>
          <button
            onClick={onClose}
            className="bg-[#2fb80d] text-stone-50 cursor-pointer px-4 py-2 font-Lato text-2xl font-medium text-shadow-[0_4px_4px_rgb(0_0_0/_0.25)] flex justify-center items-center rounded-md color-stone-50"
          >
            Jugar!
          </button>
        </div>
      </div>
    </div>
  );
}
