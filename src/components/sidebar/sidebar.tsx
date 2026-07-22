import { useState } from "react";
import { SidebarToggle } from "./sidebarToggle";
import './sidebar.css'

export interface SidebarProps {
  onClick?: () => void;
  active?: boolean;
}

export const Sidebar: React.FC = () => {
  const [active, setOpen] = useState(false);
  return (
    <div className="sidebar">
      <SidebarToggle onClick={() => setOpen((prev) => !prev)} active={active}/>
        {active ? (
          <div className="sidebar-menu"></div>
        ) : null}
    </div>
  )
}