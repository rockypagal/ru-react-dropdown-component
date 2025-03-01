import DropDownBox from "ru-react-dropdown-component";
import { resetButtonText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const ResetButton = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">ResetButton</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>resetButton</HighLight> prop allows users to clear the
        selected value in the dropdown by adding a reset option to the dropdown
        menu, making it easy to reset their choice. This enhances usability by
        providing a quick and intuitive way to clear selections, especially in
        forms where dropdown values may change frequently.
      </p>
      <Label label="Type" className="mt-8">
        Boolean | String
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="resetButton">
        If set to true, a reset button will be added to the menu when a value is
        selected. If a string is provided, the button will display that text
        instead of the default "Reset."
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>resetButton</HighLight> prop
              with a <HighLight>Boolean</HighLight> value set to{" "}
              <HighLight>true</HighLight>.
            </p>
          ),
        }}
        exampleText={resetButtonText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          placeholder="Select Option"
          resetButton={true}
          onSelect={() => {}}
        />
      </ExampleTemplate>{" "}
      <ExampleTemplate
        title="Example 2"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example demonstrates the use of the{" "}
              <HighLight>resetButton</HighLight> prop with a string value.
            </p>
          ),
        }}
        exampleText={resetButtonText?.example2}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          placeholder="Select Option"
          resetButton={"To Reset Click here"}
          onSelect={() => {}}
        />
      </ExampleTemplate>
    </div>
  );
};

export default ResetButton;
