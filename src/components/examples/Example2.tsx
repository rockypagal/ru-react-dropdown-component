import React from "react";
import DropDownBox from "ru-react-dropdown-component";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import HighLight from "../HighLight";
import { examplesText } from "../../utils/constant";
import { optionsType } from "../Example";
function ExampleTwo({ options }: { options: optionsType[] }) {
  return (
    <div className="pt-8">
      <h2 className="mt-8">Example 2</h2>
      <p className="text">
        This example demonstrates the usage of the{" "}
        <HighLight>showSearch</HighLight>, <HighLight>resetButton</HighLight>,{" "}
        and <HighLight>title</HighLight> props for enhanced user experience and
        functionality
      </p>
      <CopyComponent textToCopy={examplesText?.example2} styleClass="top-right">
        <Codebox>{examplesText?.example2}</Codebox>
      </CopyComponent>
      <div className="mt-5">
        <DropDownBox
          options={options}
          showSearch={true}
          resetButton={true}
          title="Select option"
          placeholder="Choose here..."
          onSelect={(value: string) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default ExampleTwo;
