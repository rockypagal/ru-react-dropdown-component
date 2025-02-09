import { ReactNode } from "react";

const HighLight = ({ children }: { children: ReactNode }) => {
  return <span className="heigh-light">{children}</span>;
};

export default HighLight;
