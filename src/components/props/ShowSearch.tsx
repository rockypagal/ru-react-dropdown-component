import DropDownBox from "ru-react-dropdown-component";
import { asianCountries } from "../../constant/data";
import { resetButtonText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";
import List from "../List";

const ShowSearch = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">ShowSearch</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>showSearch</HighLight> prop enables a search bar in the
        dropdown menu. It accepts a boolean or an object. When true, a search
        bar is added. If an object is provided, additional customization options
        become available.
      </p>
      <Label label="Note" className="mt-8">
        The search bar has a default debounce delay of{" "}
        <HighLight>400ms.</HighLight>
      </Label>{" "}
      <Label label="Type" className="mt-8">
        Boolean | Object
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="showSearch">
        If set to true, add a search to dropdown menu
      </Label>
      <h2 className="mt-8 mb-5">Properties</h2>
      <Label label="showSearch">
        If provided as an object, it offers additional customization options,
        such as:
        <List>
          <li>
            <Label label="delay">
              Sets the debounce delay for the search input{" "}
              <HighLight>{`(default: 400ms)`}</HighLight>.
            </Label>
          </li>
          <li>
            <Label label="onSearch">
              {" "}
              A callback function that receives the search query and options
              array, allowing users to override the default search behavior,
              implement custom filtering logic, or fetch new options via an API
              call.
            </Label>
          </li>
        </List>
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
          options={asianCountries}
          placeholder="Select User"
          showSearch={true}
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

export default ShowSearch;
