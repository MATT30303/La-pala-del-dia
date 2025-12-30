import { Menu, StatsIcon, LeftArrow } from '../icons/';
export default function Header({
  onModalOpen,
  setShowMenu,
  showMenu,
}: {
  onModalOpen: () => void;
  setShowMenu: (value: boolean) => void;
  showMenu: boolean;
}) {
  function MenuSwitch() {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  }

  return (
    <div className="w-full h-15 flex justify-center items-center gap-12">
      <div onClick={MenuSwitch}>
        {showMenu ? (
          <LeftArrow className=" animate-menuIcon-open cursor-pointer w-10 text-[rgb(162_161_160_/0.6)]" />
        ) : (
          <Menu className="animate-menuIcon-open cursor-pointer w-10  text-[#A2A1A0]" />
        )}
      </div>
      <span className="font-Lato font-normal text-[1.8rem]">
        LA BOLUDEZ DEL DIA
      </span>
      <div onClick={onModalOpen}>
        <StatsIcon className="cursor-pointer w-10 text-[#A2A1A0]" />
      </div>
    </div>
  );
}
