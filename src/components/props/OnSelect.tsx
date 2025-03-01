import { useState } from "react";
import DropDownBox from "ru-react-dropdown-component";
import { onSelectText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";
import List from "../List";

const OnSelect = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">OnSelect</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>onSelect</HighLight> function is a callback that runs
        when a user selects an option from the dropdown. It executes after the{" "}
        <HighLight to>beforeSelect</HighLight> function and allows you to set
        the selected value to the state or execute custom logic before
        finalizing the selection.
      </p>
      <Label label="Type" className="mt-8">
        Function
      </Label>{" "}
      <Label label="Arguments">{"Value, Metadata (object)"}</Label>
      <h2 className="mt-8 mb-5">Properties</h2>
      <Label label="Value">The selected option's value.</Label>
      <Label label="Metadata">
        This Object provides metadata about the selection. It includes:{" "}
        <List>
          <li>
            {" "}
            <Label label="triggeredBy">
              {" "}
              The method that triggered the selection
            </Label>
          </li>
          <li>
            {" "}
            <Label label="oldValue">
              {" "}
              which holds the previously selected value.
            </Label>
          </li>
          <li>
            <Label label="index">
              {" "}
              representing the position of the selected option in the options
              array.
            </Label>
          </li>
          <li>
            <Label label="row">
              which provides the complete option object, including both{" "}
              <HighLight>label</HighLight> and <HighLight>value</HighLight>.
            </Label>
          </li>
        </List>
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>onSelect</HighLight> callback
              function that updates the state with the selected value.
            </p>
          ),
        }}
        exampleText={onSelectText?.example1}
        className=" p-0-imp"
      >
        <h3 className="mt-8 mb-5">Selected Option: {value}</h3>
        <DropDownBox
          options={[
            { label: "Option 1", value: "option_1" },
            { label: "Option 2", value: "option_2" },
            { label: "Option 3", value: "option_3" },
          ]}
          placeholder="Select Option"
          onSelect={(value: string) => {
            setValue(value);
          }}
        />
      </ExampleTemplate>
    </div>
  );
};

export default OnSelect;
