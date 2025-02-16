import DropDownBox from "ru-react-dropdown-component";
import { animateTitleText, titleText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const AnimateTitle = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">AnimateTitle</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        When <HighLight>animateTitle</HighLight> is true, the dropdown title
        animates on focus or when a value is selected. This feature requires the{" "}
        <HighLight to>title</HighLight> prop .
      </p>
      <Label label="Type" className="mt-8">
        Boolean
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="AnimateTitle">
        {" "}
        animates the dropdown title on focus or when a value is selected.
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>title</HighLight> Prop.
            </p>
          ),
        }}
        exampleText={animateTitleText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <div className="dropdown-wrapper ">
          <DropDownBox
            options={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
            // styles={{
            //   selectBox: { backgroundColor: "#18191a" },
            //   title: { backgroundColor: "#18191a", color: "white" },
            //   arrow: { fill: "white" },
            //   selectedValue: { color: "white" },
            // }}
            title="Update Role"
            resetButton={true}
            animateTitle={true}
            onSelect={() => {}}
          />
        </div>
      </ExampleTemplate>
    </div>
  );
};

export default AnimateTitle;
