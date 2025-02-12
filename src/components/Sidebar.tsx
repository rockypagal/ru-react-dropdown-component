import { NavLink } from "react-router-dom";
import { sidebarButtons } from "../utils/sidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Getting started</h4>
      <ul>
        {sidebarButtons?.map((name: string, index: number) => {
          return (
            <div key={index} className="links-container">
              {name === "options" && <h4>Props Guides</h4>}
              <NavLink
                to={`/${name}`}
                style={
                  index < 2 ? { fontWeight: "bold", fontSize: "1.1rem" } : {}
                }
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " selected-nav" : "")
                }
              >
                {name}
              </NavLink>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
