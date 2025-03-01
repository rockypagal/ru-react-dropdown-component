import { ReactNode } from "react";

interface labelProp {
  children: ReactNode;
  className?: string;
}

const List = ({ children, className }: labelProp) => {
  return <ul className={"ml-8 pl-4 " + (className || "")}>{children}</ul>;
};

export default List;
