import { useEffect, useRef, useState } from "react";
import DropDownBox from "ru-react-dropdown-component";
import { incomingValueText } from "../../utils/constant";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const IncomingValue = () => {
  const [incomingValue, setIncomingValue] = useState<string>("");

  const [value, setValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const makeApiCall = () => {
    if (value) {
      alert(
        "The DropDownBox already has a value, so incomingValue will not take effect. Please clear the current value first."
      );
      return;
    }
    setLoading(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCount(3);
    setIncomingValue("");
    timerRef.current = setTimeout(() => {
      const list = ["admin", "user", "guest"];
      if (incomingValue) {
        function randomIndex() {
          return Math.round(Math.random() * list?.length);
        }
        let index;
        do {
          index = randomIndex();
        } while (index === list?.indexOf(incomingValue));

        setIncomingValue(list[index]);
      } else {
        setIncomingValue("guest");
      }
      setLoading(false);
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
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">IncomingValue</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>incomingValue</HighLight> prop is used to pre-fill the
        <HighLight>DropDownBox</HighLight> dynamically. When the component
        mounts, the value received from an API or an external variable is used
        to set the initial selection.
      </p>
      <Label label="Note" className="mt-8">
        The <HighLight>incomingValue</HighLight> must match one of the values in
        the <HighLight>options</HighLight> array for it to be selected in the
        dropdown. Additionally,{" "}
        <HighLight>
          incomingValue only applies if the dropdown is empty
        </HighLight>
        ; if a value is already selected, it will not be overridden.
      </Label>{" "}
      <Label label="Type" className="mt-8">
        Any
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="incomingValue">
        If incomingValue matches any value in the options array, it will be set
        as the selected value in the dropdown.
      </Label>
      <ExampleTemplate
        titleElement={{
          element: (
            <>
              <h2 className="mt-8">Example 1</h2>
              <p className="m-0 mt-4">A default value for this example.</p>
              <CopyComponent textToCopy={incomingValueText?.example1Variable}>
                <Codebox>{incomingValueText?.example1Variable}</Codebox>
              </CopyComponent>
            </>
          ),
        }}
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A simple example of using the <HighLight>incomingValue</HighLight>{" "}
              prop to set a default value in the dropdown.
            </p>
          ),
        }}
        exampleText={incomingValueText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Guest", value: "guest" },
          ]}
          placeholder="Select Role"
          afterSelect={() => {}}
          onSelect={() => {}}
          incomingValue={"guest"}
          resetButton
        />
      </ExampleTemplate>{" "}
      <div className="pt-8">
        <h2 className="mt-8">Example 2</h2>
        <p className="text">
          This example demonstrates how the <HighLight>incomingValue</HighLight>{" "}
          prop dynamically sets a value in the dropdown by using data received
          from an API on the initial render.
        </p>
        <CopyComponent
          textToCopy={incomingValueText?.example2}
          styleClass="top-right"
        >
          <Codebox>{incomingValueText?.example2}</Codebox>
        </CopyComponent>
        <button className="mt-4" onClick={makeApiCall} disabled={count > 0}>
          {count ? `Response In ${count}` : "Call Role API"}
        </button>
        <div className="mt-5">
          <DropDownBox
            options={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
            placeholder="Select Role"
            incomingValue={incomingValue}
            onSelect={(value: string) => {
              setValue(value);
            }}
            resetButton="Clear Value"
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default IncomingValue;
