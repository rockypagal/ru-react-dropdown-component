import DropDownBox from "ru-react-dropdown-component";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import HighLight from "../HighLight";
import { examplesText } from "../../utils/constant";
import { useState } from "react";

function ExampleSix() {
  const [country, setCountry] = useState<string>("");
  const [capital, setCapital] = useState<string>("");
  const countries: { label: string; value: string }[] = [
    { label: "America", value: "america" },
    { label: "Japan", value: "japan" },
    { label: "Germany", value: "germany" },
    { label: "Brazil", value: "brazil" },
    { label: "India", value: "india" },
  ];
  const capitals: { label: string; value: string }[] = [
    { label: "Washington DC", value: "washington_dc" },
    { label: "Tokyo", value: "tokyo" },
    { label: "Berlin", value: "berlin" },
    { label: "Rio", value: "rio" },
    { label: "New Delhi", value: "new_delhi" },
  ];

  const CountryCapitalList: { [key: string]: string } = {
    america: "washington_dc",
    japan: "tokyo",
    germany: "berlin",
    brazil: "rio",
    india: "new_delhi",
  };

  return (
    <div className="pt-8">
      <h2 className="mt-8">Example 6</h2>
      <p className="text">Options Arrays for dropdowns</p>
      <CopyComponent
        textToCopy={examplesText?.example6Options}
        styleClass="top-right"
      >
        <Codebox>{examplesText?.example6Options}</Codebox>
      </CopyComponent>
      <p className="text mt-6">
        This example demonstrates how the <HighLight>changeObserver</HighLight>{" "}
        prop tracks changes in an external value and allows you to update the
        dropdown state manually.
      </p>
      {/* <p>
        It includes a <HighLight>target</HighLight> (the observed value) and a
        <HighLight>handler</HighLight> function, which receives a setter to
        update the dropdown and a context object. The context provides{" "}
        <HighLight>newTargetedValue</HighLight> (updated value),{" "}
        <HighLight>oldTargetedValue</HighLight>
        (previous value), and <HighLight>dropdownValue</HighLight> (current
        selection), ensuring seamless synchronization.
      </p>{" "} */}
      <CopyComponent textToCopy={examplesText?.example6} styleClass="top-right">
        <Codebox>{examplesText?.example6}</Codebox>
      </CopyComponent>
      <div className="mt-5 flex gap-4">
        <DropDownBox
          options={countries}
          // placeholder="Select option"
          onSelect={(value: string) => {
            setCountry(value);
          }}
          resetButton="Clear country"
          title="Select Country"
        />
        <DropDownBox
          options={capitals}
          title="Select Capital"
          resetButton="Clear capital"
          onSelect={(value: string) => {
            setCapital(value);
          }}
          changeObserver={{
            target: country,
            handler: (
              setter: Function,
              obj: {
                newTargetedValue: string;
              }
            ) => {
              const newCapital = CountryCapitalList[obj.newTargetedValue] ?? "";
              setter(newCapital);
            },
          }}
        />
      </div>
    </div>
  );
}
export default ExampleSix;
