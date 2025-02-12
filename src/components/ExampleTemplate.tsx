import { ReactNode } from "react";
import Codebox from "./Codebox";
import CopyComponent from "./CopyComponent";

interface ExampleTempProp {
  children: ReactNode;
  title: string;
  subtitle: string;
  exampleText: string;
  className?: string;
}

const ExampleTemplate = ({
  children,
  title = "Example",
  subtitle,
  exampleText,
  className = "",
}: ExampleTempProp) => {
  return (
    <div className={"pt-8 " + (className ? className : "")}>
      <h2 className="mt-8">{title}</h2>
      <p className="m-0 mt-2">{subtitle}</p>
      <CopyComponent textToCopy={exampleText} styleClass="top-right">
        <Codebox>{exampleText}</Codebox>
      </CopyComponent>
      {/* <h3 className="mt-8">Selected Value: {value}</h3> */}
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default ExampleTemplate;
