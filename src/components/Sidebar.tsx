import { NavLink } from "react-router-dom";
import { sidebarButtons } from "../utils/sidebarData";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <div className={"sidebar " + (showSidebar ? " showSidebar" : "")}>
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
                  onClick={() => {
                    if (showSidebar) {
                      setTimeout(() => {
                        setShowSidebar(false);
                      }, 70);
                    }
                  }}
                >
                  {name}
                </NavLink>
              </div>
            );
          })}
        </ul>
      </div>

      <button
        className={
          "toggle-sidebar no-active " +
          (showSidebar ? " opened toggle-sidebar" : "")
        }
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
        aria-expanded={showSidebar}
        aria-label="Main Menu"
      >
        <svg width="28px" height="28px" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      {/* <button
        className={`menu ${showSidebar ? "opened toggle-sidebar" : ""}`}
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
        aria-expanded={showSidebar}
        aria-label="Main Menu"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button> */}
    </>
  );
};

export default Sidebar;
