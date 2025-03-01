import DropDownBox from "ru-react-dropdown-component";
import { afterSelectText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";
import List from "../List";

const AfterSelect = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">AfterSelect</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>afterSelect</HighLight> function is a callback that runs
        after a user selects an option from the dropdown. It executes after{" "}
        <HighLight to>beforeSelect</HighLight> and{" "}
        <HighLight to>onSelect</HighLight>, making it ideal for handling side
        effects like API calls or analytics tracking.
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
              A basic example of the <HighLight>afterSelect</HighLight> callback
              function that makes api calls.
            </p>
          ),
        }}
        exampleText={afterSelectText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Guest", value: "guest" },
          ]}
          title="Update Role"
          afterSelect={() => {}}
          onSelect={() => {}}
        />
      </ExampleTemplate>
    </div>
  );
};

export default AfterSelect;
