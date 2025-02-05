import DropDownBox from "ru-react-dropdown-component";
import Codebox from "./Codebox";
import CopyComponent from "./CopyComponent";

const Example = () => {
  const example1 = `<DropDownBox
   options={[
     { label: "Option 1", value: "Option-1" },
     { label: "Option 2", value: "Option-2" },
     { label: "Option 3", value: "Option-3" },
    ]}
    styles={{ selectStyles: { backgroundColor: "white" } }}
   />
  `;

  return (
    <div>
      <h1 className="main-heading">Examples</h1>
      <h2 className="sub-heading m-0">Examples with Props and Explanations</h2>
      <p className="m-0 mt-2">
        Below are multiple examples demonstrating how to use
        ru-react-dropdown-component with different props. Each example includes
        an explanation of the props used and their effects, helping you
        integrate the dropdown seamlessly into your React application.
      </p>
      <h2 className="mt-8">Example 1</h2>
      <p className="text">Simple usage of the component</p>
      <CopyComponent textToCopy={example1} styleClass="top-right">
        <Codebox>{example1}</Codebox>
      </CopyComponent>
      <DropDownBox
        options={[
          { label: "Option 1", value: "Option-1" },
          { label: "Option 2", value: "Option-2" },
          { label: "Option 3", value: "Option-3" },
        ]}
        styles={{ selectStyles: { backgroundColor: "white" } }}
      />
    </div>
  );
};

export default Example;
