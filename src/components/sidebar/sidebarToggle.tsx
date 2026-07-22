import { RxCross2 } from "react-icons/rx";
import type { SidebarProps } from "./sidebar"
import { GiHamburgerMenu } from "react-icons/gi";

export const SidebarToggle: React.FC<SidebarProps> = ({
  onClick, active
}) => {

  return (
    <span className={`sidebar-toggle${active ? ' active' : ''}`} onClick={onClick}>{!active ? <GiHamburgerMenu/> : <RxCross2/>}</span>
  )
}