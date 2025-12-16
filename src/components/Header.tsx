import { Menu, StatsIcon } from '../icons/';
export default function Header({
  onModalOpen,
  onMenuOpen,
}: {
  onModalOpen: () => void;
  onMenuOpen: () => void;
}) {
  return (
    <div className="w-full h-15 flex justify-center items-center gap-12">
      <div onClick={onMenuOpen}>
        <Menu className="cursor-pointer text-[#A2A1A0]" />
      </div>
      <span className="font-Lato font-normal text-[1.8rem]">
        LA BOLUDEZ DEL DIA
      </span>
      <div onClick={onModalOpen}>
        <StatsIcon className="cursor-pointer text-[#A2A1A0]" />
      </div>
    </div>
  );
}
