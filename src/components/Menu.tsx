export default function Menu({
  onClose,
  onWelcomeOpen,
  isOpen,
  handleGameMode,
}: {
  onClose: () => void;
  onWelcomeOpen: () => void;
  isOpen: boolean;
  handleGameMode: (game: number) => void;
}) {
  return (
    <nav
      className={`w-80 h-full absolute left-0 top-0 p-4 bg-[#1A1A1A] flex flex-col items-start ${
        isOpen ? 'animate-openMenu' : 'animate-closeMenu'
      }`}
    >
      <div
        className="absolute right-4 top-5 z-10 cursor-pointer"
        onClick={onClose}
      ></div>
      <div className="w-full flex justify-center ">
        <span className="font-Lato text-2xl text-stone-50">
          La boludez del dia
        </span>
      </div>
      <div className="mt-24">
        <span className="font-Lato text-lg text-stone-300 cursor-default">
          Modos de juego
        </span>
        <ul className="font-Lato text-xl mt-6 ml-6 text-stone-50">
          <li className="mb-4 cursor-pointer" onClick={() => handleGameMode(3)}>
            Facil
          </li>
          <li className="mb-4 cursor-pointer" onClick={() => handleGameMode(1)}>
            Normal
          </li>
          <li className="mb-4 cursor-pointer" onClick={() => handleGameMode(2)}>
            Dificil
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <span className="font-Lato text-lg text-stone-300  cursor-default">
          Informacion
        </span>
        <ul className="font-Lato text-xl mt-6 ml-6 text-stone-50">
          <li onClick={onWelcomeOpen} className="mb-4 cursor-pointer">
            Como jugar
          </li>
        </ul>
      </div>
    </nav>
  );
}
