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
      <h2 className="mt-8 mb-5">Properties</h2>
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
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              Basic Example with <HighLight>label</HighLight> &{" "}
              <HighLight>value</HighLight>
            </p>
          ),
        }}
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
        subtitleElement={{
          element: (
            <>
              <p className="m-0 mt-4">
                This example demonstrates how the{" "}
                <HighLight>searchOptions</HighLight> property allows you to add
                multiple search attributes to each option, enabling more
                flexible and precise filtering. Instead of relying solely on the
                primary label, users can search using different criteria for a
                better experience.
              </p>

              <p className="m-0 mt-4 mb-4">
                For example, in the options list below, you can find "User 1" by
                searching for "accountant," "abc@xyz.com," "123-456-7890," or
                "User 1" since all these attributes are linked to the same user.
              </p>
            </>
          ),
        }}
        exampleText={optionsText?.example2}
      >
        <DropDownBox
          options={[
            {
              label: "User 1",
              value: "userId_1",
              searchOptions: ["abc@xyz.com", "accountant", "123-456-7890"],
            },
            {
              label: "User 2",
              value: "userId_2",
              searchOptions: ["jkl@pqr.com", "manager", "0243-156-9890"],
            },
            {
              label: "User 3",
              value: "userId_3",
              searchOptions: ["rst@uvw.com", "teacher", "321-654-0987"],
            },
          ]}
          placeholder="Select User"
          onSelect={(value: string) => setValue(value)}
          showSearch
        />
      </ExampleTemplate>
    </div>
  );
};

export default Options;
