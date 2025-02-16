import DropDownBox from "ru-react-dropdown-component";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";
import { beforeSelectText } from "../../utils/constant";

const BeforeSelect = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">BeforeSelect</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>beforeSelect</HighLight> function is triggered when an
        option is selected, executing before both{" "}
        <HighLight to>onSelect</HighLight> and{" "}
        <HighLight to>afterSelect</HighLight>. It allows you to run custom logic
        before finalizing the selection by accessing the selected value and
        relevant metadata. {/* <p className="m-0 mt-2"> */} If this function{" "}
        <HighLight>returns false</HighLight>, the selection is blocked, the
        dropdown remains unchanged, and both <HighLight to>onSelect</HighLight>{" "}
        and <HighLight to>afterSelect</HighLight> are skipped entirely. This is
        useful for applying conditional selection rules, such as restricting
        certain choices based on specific conditions.
        {/* </p> */}
      </p>
      <Label label="Type" className="mt-8">
        Function
      </Label>{" "}
      <Label label="Arguments">{"Value, Metadata (object)"}</Label>
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="Value">The selected option's value.</Label>
      <Label label="Metadata">
        This Object provides metadata about the selection. It includes{" "}
        <HighLight>oldValue</HighLight>, which holds the previously selected
        value, <HighLight>index</HighLight>, representing the position of the
        selected option in the options array, and <HighLight>row</HighLight>,
        which provides the complete option object, including both{" "}
        <HighLight>label</HighLight> and
        <HighLight>value</HighLight>.
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <>
              <p className="m-0 mt-4">
                {" "}
                Restrict Selection Based on a Condition
              </p>
            </>
          ),
        }}
        exampleText={beforeSelectText?.example1}
        className=" p-0-imp"
      >
        <DropDownBox
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Guest", value: "guest" },
          ]}
          placeholder="Select Role"
          beforeSelect={(value) => {
            // Prevent selection if "guest" is chosen
            if (value === "guest") {
              alert("Guest selection is restricted!");
              return false; // Blocks the selection
            }
            return true; // Allows the selection
          }}
          onSelect={() => {}}
        />
      </ExampleTemplate>
      <ExampleTemplate
        title="Example 2"
        subtitleElement={{
          element: (
            <>
              <p className="m-0 mt-4">
                {" "}
                This example prevents selecting the same option again. However,
                it is for demonstration purposes, as the dropdown does not
                trigger any callback functions when the selected value remains
                the same as the previous one.
              </p>
            </>
          ),
        }}
        exampleText={beforeSelectText?.example2}
        className=" p-0-imp"
      >
        <DropDownBox
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Guest", value: "guest" },
          ]}
          placeholder="Select Role"
          beforeSelect={(value, context) => {
            const { oldValue, index, row } = context;

            // Prevent selection if the same option is selected again
            if (value === oldValue) {
              alert(
                `You already selected "${row.label}". Choose a different option.`
              );
              return false; // Blocks the selection
            }

            alert(`Selected Index: ${index}, Label: ${row.label}`);
            return true; // Allows the selection
          }}
          onSelect={() => {}}
        />
      </ExampleTemplate>
    </div>
  );
};

export default BeforeSelect;
