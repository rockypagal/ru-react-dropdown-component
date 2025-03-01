import DropDownBox from "ru-react-dropdown-component";
import { customArrowText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const CustomArrow = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">CustomArrow</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>customArrow</HighLight> prop accepts an object with an
        element key, allowing users to pass any JSX element. This replaces the
        default arrow SVG in the dropdown with the custom arrow provided by the
        user.
      </p>
      <Label label="Type" className="mt-8">
        Object
      </Label>{" "}
      <h2 className="mt-8 mb-5">Explanation</h2>
      <Label label="customArrow">
        It accepts an object with an element key containing a JSX element to
        replace the default arrow in the dropdown with a custom one.
      </Label>
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>customArrow</HighLight> prop
              with a custom JSX Arrow element.
            </p>
          ),
        }}
        exampleText={customArrowText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          placeholder="Select Option"
          onSelect={() => {}}
          styles={{ arrow: { lineHeight: "0", transition: "none" } }}
          customArrow={{
            element: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#415094"
              >
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            ),
          }}
        />
      </ExampleTemplate>{" "}
      <ExampleTemplate
        title="Example 2"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              <p className="m-0 mt-4">
                A basic example of the <HighLight>customArrow</HighLight> prop
                with a custom JSX Arrow element.
              </p>
            </p>
          ),
        }}
        exampleText={customArrowText?.example2}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          placeholder="Select Option"
          onSelect={() => {}}
          styles={{
            arrow: { lineHeight: "0", rotate: "0deg" },
          }}
          customArrow={{
            element: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#415094"
              >
                <path d="M180-360 40-500l42-42 70 70q-6-27-9-54t-3-54q0-82 27-159t78-141l43 43q-43 56-65.5 121.5T200-580q0 26 3 51.5t10 50.5l65-64 42 42-140 140Zm478 233q-23 8-46.5 7.5T566-131L304-253l18-40q10-20 28-32.5t40-14.5l68-5-112-307q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l148 407-100 7 131 61q7 3 15 3.5t15-1.5l157-57q31-11 45-41.5t3-61.5l-55-150q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150q23 63-4.5 122.5T815-184l-157 57Zm-90-265-54-151q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l55 150-76 28Zm113-41-41-113q-6-16 1-30.5t23-20.5q16-6 30.5 1t20.5 23l41 112-75 28Zm8 78Z" />
              </svg>
            ),
          }}
        />
      </ExampleTemplate>{" "}
      <ExampleTemplate
        title="Example 3"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              A basic example of the <HighLight>customArrow</HighLight> prop
              with a custom JSX Arrow element.
            </p>
          ),
        }}
        exampleText={customArrowText?.example3}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "Option_1" },
            { label: "Option 2", value: "Option_2" },
            { label: "Option 3", value: "Option_3" },
          ]}
          placeholder="Select Option"
          onSelect={() => {}}
          styles={{
            arrow: { lineHeight: "0" },
          }}
          customArrow={{
            element: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#415094"
              >
                <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            ),
          }}
        />
      </ExampleTemplate>{" "}
    </div>
  );
};

export default CustomArrow;
