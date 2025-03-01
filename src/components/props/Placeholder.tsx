import DropDownBox from "ru-react-dropdown-component";
import { placeholderText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const Placeholder = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">Placeholder</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>placeholder</HighLight> prop displays placeholder text in
        the dropdown, helping users understand its purpose, similar to input
        fields. Like the <HighLight to>title</HighLight> prop, it improves
        accessibility and clarity, especially in forms or UIs with multiple
        dropdowns.
      </p>
      <Label label="Type" className="mt-8">
        String
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="placeholder">
        Displays a placeholder text for the dropdown.
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>placeholder</HighLight> Prop.
            </p>
          ),
        }}
        exampleText={placeholderText?.example1}
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
          placeholder="Select Role Here..."
          afterSelect={() => {}}
          onSelect={() => {}}
        />
      </ExampleTemplate>
    </div>
  );
};

export default Placeholder;
