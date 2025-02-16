import DropDownBox from "ru-react-dropdown-component";
import { titleText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const Title = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">Title</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The title prop is used to display a label above the dropdown, helping
        users understand its purpose, similar to how input fields have labels.
        This is particularly useful for improving accessibility and clarity in
        forms or UI sections where multiple dropdowns are present.
      </p>
      <Label label="Type" className="mt-8">
        String
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="Title">Displays a label above the dropdown.</Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>title</HighLight> Prop.
            </p>
          ),
        }}
        exampleText={titleText?.example1}
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

export default Title;
