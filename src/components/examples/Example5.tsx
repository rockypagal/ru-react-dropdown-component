import DropDownBox from "ru-react-dropdown-component";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import HighLight from "../HighLight";
import { examplesText } from "../../utils/constant";
import { optionsType } from "../Example";
import { useEffect, useRef, useState } from "react";

function ExampleFive({ options }: { options: optionsType[] }) {
  const [incomingValue, setIncomingValue] = useState<string | boolean>("");
  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const timerRef = useRef<number | null>(null);
  const makeApiCall = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCount(3);
    setIncomingValue("");
    timerRef.current = setTimeout(() => {
      setIncomingValue("Option-3");
    }, 3000);
  };

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [count]);

  return (
    <div className="pt-8">
      <h2 className="mt-8">Example 5</h2>
      <p className="text">
        This example demonstrates how the <HighLight>incomingValue</HighLight>{" "}
        prop allows dynamic updates by setting a value received from an API on
        the initial render. When the component mounts, the API response triggers
        an update, ensuring the dropdown starts with a pre-filled value.
      </p>
      <CopyComponent textToCopy={examplesText?.example5} styleClass="top-right">
        <Codebox>{examplesText?.example5}</Codebox>
      </CopyComponent>
      <button className="mt-4" onClick={makeApiCall} disabled={count > 0}>
        {count ? `Response In ${count}` : "Call Fake Api"}
      </button>
      <div className="mt-5">
        <DropDownBox
          options={options}
          // placeholder="Select option"
          incomingValue={incomingValue}
          onSelect={(value: string) => {
            setValue(value);
          }}
          resetButton="Clear Value"
          changeObserver={{
            target: incomingValue,
            handler: (
              setter: Function,
              obj: {
                newTargetedValue: string;
              }
            ) => {
              if (obj.newTargetedValue === "") {
                setter("");
              }
              setIncomingValue(false);
            },
          }}
        />
      </div>
    </div>
  );
}
export default ExampleFive;
