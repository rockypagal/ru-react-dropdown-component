import { Dispatch, SetStateAction } from "react";
import { sidebarButtons } from "../utils/sidebarData";
interface sidebarPro {
  setCurrentHero: Dispatch<SetStateAction<string>>;
  currentHero: string;
}
const Sidebar = ({ setCurrentHero, currentHero }: sidebarPro) => {
  const handleSetHero = (hero: string) => {
    setCurrentHero(hero);
  };

  return (
    <div style={{ display: "block" }} className="sidebar">
      <div className="logo-container flex flex-alien">
        <svg
          className="logo-svg"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M120-160v-40h720v40H120Zm0-120v-80h720v80H120Zm0-160v-120h720v120H120Zm0-200v-160h720v160H120Z" />
        </svg>{" "}
        <h1 className="logo">RRDC</h1>
      </div>
      <h4>Getting started</h4>
      <ul>
        {sidebarButtons?.map((name: string, index: number) => {
          return (
            <div key={index} className="links-container">
              {name === "options" && <h4>Props Guides</h4>}
              <li
                style={
                  index < 2 ? { fontWeight: "bold", fontSize: "1.1rem" } : {}
                }
                className={
                  "nav-links" + (name === currentHero ? " selected-nav" : "")
                }
                onClick={() => {
                  handleSetHero(name);
                }}
              >
                {name}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
