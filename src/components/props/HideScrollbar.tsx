

import DropDownBox from "ru-react-dropdown-component";
import { hideScrollbarText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const HideScrollbar = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">HideScrollbar</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>hideScrollbar</HighLight> prop when set to true hides the
        scrollbar in the dropdown menu.
      </p>
      <Label label="Type" className="mt-8">
        Boolean
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="disabled">
        If set to true, hides the scrollbar in dropdown menu.
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>hideScrollbar</HighLight> Prop.
            </p>
          ),
        }}
        exampleText={hideScrollbarText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
            { label: "Option 4", value: "Option_4" },
            { label: "Option 5", value: "Option_5" },
            { label: "Option 6", value: "Option_6" },
            { label: "Option 7", value: "Option_7" },
            { label: "Option 8", value: "Option_8" },
            { label: "Option 9", value: "Option_9" },
            { label: "Option 10", value: "Option_10" },
            { label: "Option 11", value: "Option_11" },
            { label: "Option 12", value: "Option_12" },
            { label: "Option 13", value: "Option_13" },
            { label: "Option 14", value: "Option_14" },
            { label: "Option 15", value: "Option_15" },
          ]}
          placeholder="Dropdown Scrollbar is hidden"
          onSelect={() => {}}
          hideScrollbar={true}
        />
      </ExampleTemplate>
    </div>
  );
};

export default HideScrollbar;





