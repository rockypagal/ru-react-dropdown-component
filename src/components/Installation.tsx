import Codebox from "./Codebox";
import CopyComponent from "./CopyComponent";

const Installation = () => {
  const installCommand: string = "npm install ru-react-dropdown-component";
  const installCommandNext: string =
    "yarn add ru-react-dropdown-component"; //*********
  return (
    <div>
      <h1 className="main-heading">Introduction</h1>
      <h2 className="sub-heading m-0">reusable-react-dropdown-component</h2>
      <p className="m-0 mt-2">
        The ru-react-dropdown-component library provides the DropDownBox
        component, a customizable and feature-rich dropdown selector for React
        applications. This documentation outlines its props, behavior, and
        usage.
      </p>
      <h2 className="mt-8">Installation</h2>
      <p className="text">To install, run the following command in terminal:</p>
      <CopyComponent textToCopy={installCommand}>
        <Codebox>{installCommand}</Codebox>
      </CopyComponent>
      <h2 className="mt-8 pt-2">Installation with yarn</h2>
      <p className="text">
        To install with yarn, run the following command in terminal:
      </p>
      <CopyComponent textToCopy={installCommandNext}>
        <Codebox>{installCommandNext}</Codebox>
      </CopyComponent>
    </div>
  );
};

export default Installation;
