import { useState } from "react";
import DropDownBox from "ru-react-dropdown-component";
import { optionsText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const Options = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="pb-8 mb-6">
      <h1 className="main-heading">Options</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        options is array of objects for the dropdown. Each object requires a{" "}
        <HighLight>label</HighLight> (display text) and a{" "}
        <HighLight>value</HighLight>. Optionally, include a{" "}
        <HighLight>searchOptions</HighLight> array to add extra searchable
        values for that particular option.
      </p>
      <Label label="Type" className="mt-8">
        {"Array [ { label: string, value: any } ]"}
      </Label>{" "}
      <Label label="Optional Value">
        {"[{ label: string, value: any, searchOptions:[string] }]"}
      </Label>
      {/* Explanations */}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="label">
        The text displayed in the dropdown for the selected option.
      </Label>
      <Label label="value">Actual value for the selected option.</Label>
      <Label label="searchOptions (optional)">
        An array of additional searchable values related to the option,
        improving search flexibility.
      </Label>
      {/* Examples */}
      <ExampleTemplate
        title="Example 1"
        subtitle="Basic Example label & value"
        exampleText={optionsText?.example1}
        className=" p-0-imp"
      >
        <h3 className="mt-8 mb-5">Selected Value: {value}</h3>
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          // placeholder="Select option"
          onSelect={(value: string) => setValue(value)}
        />
      </ExampleTemplate>
      <ExampleTemplate
        title="Example 2"
        subtitle="Basic Example label & value"
        exampleText={optionsText?.example1}
      >
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          // placeholder="Select option"
          onSelect={(value: string) => setValue(value)}
        />
      </ExampleTemplate>
    </div>
  );
};

export default Options;
