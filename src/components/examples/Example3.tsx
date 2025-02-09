import React from "react";
import DropDownBox from "ru-react-dropdown-component";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import HighLight from "../HighLight";
import { examplesText } from "../../utils/constant";
import { optionsType } from "../Example";

function ExampleThree({ options }: { options: optionsType[] }) {
  return (
    <div className="pt-8">
      <h2 className="mt-8">Example 3</h2>

      {/* css code box */}
      <p className="text">CSS style for options on hover.</p>
      <CopyComponent
        textToCopy={examplesText?.example3Css}
        styleClass="top-right"
      >
        <Codebox>{examplesText?.example3Css}</Codebox>
      </CopyComponent>

      {/* dropdown code box */}

      <p className="text mt-6">
        This example demonstrates the usage of the <HighLight>styles</HighLight>{" "}
        prop for styling the
        <HighLight>DropDownBox</HighLight>, and the{" "}
        <HighLight>animateTitle</HighLight> prop for animating the title on
        focus.
      </p>
      <CopyComponent textToCopy={examplesText?.example3} styleClass="top-right">
        <Codebox>{examplesText?.example3}</Codebox>
      </CopyComponent>

      <div className="mt-5">
        <DropDownBox
          options={options}
          showSearch={true}
          resetButton={true}
          title="Select option"
          animateTitle={true}
          onSelect={(value: string) => console.log(value)}
          styles={{
            selectBox: {
              border: "none",
              borderRadius: "0",
              backgroundColor: "transparent",
              borderBottom: "1px solid #3880ff",
            },
            title: { color: "white", backgroundColor: "transparent" },
            selectedValue: { color: "white", fontWeight: "600" },
            optionsContainer: {
              border: "none",
              borderRadius: "0",
            },
            searchInput: {
              border: "none",
              borderRadius: "0",
              borderBottom: "1px solid #3880ff",
              color: "#3880ff",
            },
            arrow: { fill: "#3880ff" },
            optionItem: "example-option", // you can also pass CSS class to add styles
          }}
        />
      </div>

    </div>
  );
}

export default ExampleThree;
