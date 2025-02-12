import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface HighProps {
  children: ReactNode;
  to?: string | boolean;
}
const HighLight = ({ children, to = false }: HighProps) => {
  return (
    <>
      {to ? (
        <NavLink
          to={`/${typeof to === "string" ? to : children}`}
          className="high-light link"
        >
          {children}
        </NavLink>
      ) : (
        <span className="high-light">{children}</span>
      )}
    </>
  );
};

export default HighLight;
