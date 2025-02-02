import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { sidebarButtons } from "../utils/sidebarData";
interface sidebarPro {
  setCurrentHero: Dispatch<SetStateAction<string>>;
}
const Sidebar = ({ setCurrentHero }: sidebarPro) => {
  const handleSetHero = (hero: string) => {
    setCurrentHero(hero);
  };

  return (
    <div className="sidebar">
      <ul>
        {sidebarButtons?.map((name: string, index: number) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleSetHero(name);
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
