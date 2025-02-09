import DropDownBox from "ru-react-dropdown-component";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import HighLight from "../HighLight";
import { examplesText } from "../../utils/constant";
import { optionsType } from "../Example";
function ExampleOne({ options }: { options: optionsType[] }) {
  return (
    <>
      <h2 className="mt-8">Example 1</h2>
      <p className="text">
        This example showcases the most basic usage of the{" "}
        <HighLight>DropDownBox</HighLight> component with{" "}
        <HighLight>options</HighLight>, <HighLight>onSelect</HighLight>, and{" "}
        <HighLight>placeholder</HighLight> props.
      </p>
      <CopyComponent textToCopy={examplesText?.example1} styleClass="top-right">
        <Codebox>{examplesText?.example1}</Codebox>
      </CopyComponent>
      <div className="mt-5">
        <DropDownBox
          options={options}
          placeholder="Select option"
          onSelect={(value: string) => console.log(value)}
        />
      </div>
    </>
  );
}

export default ExampleOne;
