import { ReactNode } from "react";
import HighLight from "./HighLight";

interface labelProp {
  label: string;
  children: ReactNode;
  className?: string;
}

const Label = ({ label, children, className }: labelProp) => {
  return (
    <div className={"mt-3 lh-1 " + (className || "")}>
      <HighLight>{label}</HighLight> : <span className="pl-2">{children}</span>
    </div>
  );
};

export default Label;
