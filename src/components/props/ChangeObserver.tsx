import { useState } from "react";
import DropDownBox from "ru-react-dropdown-component";
import { changeObserverText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";
import List from "../List";
import ExampleSix from "../examples/Example6";

const ChangeObserver = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">ChangeObserver</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>changeObserver</HighLight> prop tracks the external value
        for changes, allowing the dropdown value to be updated dynamically when
        a specified external value changes.
      </p>
      <Label label="Type" className="mt-8">
        Object
      </Label>{" "}
      <h2 className="mt-8 mb-5">Properties</h2>
      <Label label="target">
        It expects an external state or variable to monitor for changes and
        trigger updates accordingly.
      </Label>
      <Label label="handler">
        It's a callback function that executes when the target value changes. It
        receives:
        <List>
          <li>
            <Label label="setter">
              A function to update the dropdown value.
            </Label>
          </li>
          <li>
            <Label label="context">
              An object containing:
              <List>
                <li>
                  {" "}
                  <Label label="dropdownValue">
                    {" "}
                    The current dropdown value.
                  </Label>
                </li>
                <li>
                  <Label label="newTargetedValue ">
                    {" "}
                    The updated value of the observed target.
                  </Label>
                </li>
                <li>
                  <Label label="oldTargetedValue ">
                    {" "}
                    The previous value of the observed target.
                  </Label>
                </li>
              </List>
            </Label>
          </li>
        </List>
      </Label>
      {/* <Label label="handler">
        It expects an external state or variable to monitor for changes and
        trigger updates accordingly.
      </Label> */}
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              In this example, <HighLight>changeObserver</HighLight> monitors
              the isDisabled state. When isDisabled is set to true, the
              handler's setter function clears the selected value, ensuring the
              dropdown remains empty while disabled.
            </p>
          ),
        }}
        exampleText={changeObserverText?.example1?.replace(
          "tempValue",
          `${isDisabled}`
        )}
        className=" p-0-imp"
      >
        <div>
          <button
            className="mt-2 mb-2"
            onClick={() => setIsDisabled((preValue) => !preValue)}
          >
            {isDisabled ? "Enable Dropdown" : "Disable Dropdown"}
          </button>
          {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
          <DropDownBox
            options={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
            title="Select Role"
            onSelect={(value) => {
              console.log(value);
            }}
            disabled={isDisabled}
            styles={{
              disabledState: { color: "white" },
              arrow: isDisabled ? { fill: "white" } : {},
            }}
            changeObserver={{
              target: isDisabled,
              handler(setter, context) {
                if (context?.newTargetedValue === true) {
                  setter("");
                }
              },
            }}
          />
        </div>
      </ExampleTemplate>{" "}
      <ExampleSix heading="Example 2" />
    </div>
  );
};

export default ChangeObserver;
