import DropDownBox from "ru-react-dropdown-component";
import { disabledText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const Disabled = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">Disabled</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>disabled</HighLight> prop disables the dropdown when set
        to true, preventing unwanted interactions. It enhances usability by
        guiding users, reducing errors, and restricting access to options based
        on context.
      </p>
      <Label label="Type" className="mt-8">
        Boolean
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="disabled">If set to true, disables the dropdown.</Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>disabled</HighLight> Prop.
            </p>
          ),
        }}
        exampleText={disabledText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Guest", value: "guest" },
          ]}
          placeholder="Dropdown is disabled"
          disabled={true}
          styles={{ placeholder: { color: "white" }, arrow: { fill: "white" } }}
          afterSelect={() => {}}
          onSelect={() => {}}
        />
      </ExampleTemplate>
    </div>
  );
};

export default Disabled;
