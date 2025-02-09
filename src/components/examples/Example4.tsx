import DropDownBox from "ru-react-dropdown-component";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import HighLight from "../HighLight";
import { examplesText } from "../../utils/constant";
import { optionsType } from "../Example";

function ExampleFour({ options }: { options: optionsType[] }) {
  return (
    <div className="pt-8">
      <h2 className="mt-8">Example 4</h2>
      <p className="text">
        This example showcases the functionality of the{" "}
        <HighLight>beforeSelect</HighLight>, <HighLight>onSelect</HighLight>,
        and <HighLight>afterSelect</HighLight> props, highlighting their role in
        handling selection events.
      </p>
      <CopyComponent textToCopy={examplesText?.example4} styleClass="top-right">
        <Codebox>{examplesText?.example4}</Codebox>
      </CopyComponent>
      <div className="mt-5">
        <DropDownBox
          options={options}
          placeholder="Select option"
          beforeSelect={(value: string, context: { oldValue: string }) => {
            if (value === context.oldValue) {
              return false;
            }

            alert("Before Select");
          }}
          onSelect={() => alert("On Select")}
          afterSelect={() => {
            alert("After select");
          }}
        />
      </div>
    </div>
  );
}
export default ExampleFour;
