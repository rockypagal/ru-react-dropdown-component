import DropDownBox from "ru-react-dropdown-component";
import { stylesText } from "../../utils/constant";
import Codebox from "../Codebox";
import CopyComponent from "../CopyComponent";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";

const Styles = () => {
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">Styles</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>styles</HighLight> prop allows customization of various
        dropdown elements by providing either a CSS object or a{" "}
        <HighLight>string</HighLight>. If a CSS object is passed, it applies
        inline styles; if a <HighLight>string</HighLight> is provided, it is
        added as a className for styling. This enables flexible styling options,
        whether using direct CSS properties or external stylesheets. The
        available keys for customization include{" "}
        <HighLight>selectBox</HighLight>, <HighLight>selectedValue</HighLight>,{" "}
        <HighLight>placeholder</HighLight>, <HighLight>title</HighLight>,
        <HighLight>arrow</HighLight>, <HighLight>disabledState</HighLight>,{" "}
        <HighLight>optionsContainer</HighLight>,{" "}
        <HighLight>optionItem</HighLight>,{" "}
        <HighLight>selectedOptionItem</HighLight>, and{" "}
        <HighLight>searchInput</HighLight>, giving complete control over the
        dropdown's appearance.
      </p>
      <Label label="Type" className="mt-8">
        Object
      </Label>{" "}
      {/* <Label label="className">
        Regular string will be applied as a className
      </Label> */}
      <h2 className="mt-8 mb-5">Properties</h2>
      <Label label="selectBox">
        Defines styles for the main dropdown container. Accepts a CSS object or
        a string (className).
      </Label>
      <Label label="selectedValue">
        Styles the selected value within the dropdown. Accepts a CSS object or a
        string (className).
      </Label>
      <Label label="placeholder">
        Applies styles to the placeholder text inside the dropdown. Accepts a
        CSS object or a string (className).
      </Label>
      <Label label="title">
        Styles the title (label) displayed above the dropdown. Accepts a CSS
        object or a string (className).
      </Label>
      <Label label="arrow">
        Styles the dropdown arrow icon. Accepts a CSS object or a
        string (className).
      </Label>
      <Label label="disabledState">
        Defines styles for the dropdown when it is disabled. Accepts a CSS
        object or a string (className).
      </Label>
      <Label label="optionsContainer">
        Styles the container that holds all dropdown options. Accepts a CSS
        object or a string (className).
      </Label>
      <Label label="optionItem">
        Applies styles to individual dropdown options. Accepts a CSS object or a
        string (className).
      </Label>
      <Label label="selectedOptionItem">
        Styles the currently selected option inside the dropdown. Accepts a CSS
        object or a string (className).
      </Label>
      <Label label="searchInput">
        Defines styles for the search input field (if enabled). Accepts a CSS
        object or a string (className).
      </Label>
      {/* Empales */}
      <ExampleTemplate
        titleElement={{
          element: (
            <>
              <h2 className="mt-8">Example 1</h2>
              <p className="m-0 mt-4">CSS Class for this example.</p>
              <CopyComponent
                textToCopy={stylesText?.example1CSS}
                styleClass="top-right"
              >
                <Codebox>{stylesText?.example1CSS}</Codebox>
              </CopyComponent>
            </>
          ),
        }}
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example Demonstrates the usage of{" "}
              <HighLight>selectBox</HighLight>,{" "}
              <HighLight>searchInput</HighLight>,{" "}
              <HighLight>optionsContainer</HighLight>,{" "}
              <HighLight>optionItem</HighLight> and{" "}
              <HighLight>selectedOptionItem</HighLight> properties of the{" "}
              <HighLight>styles</HighLight> prop.
            </p>
          ),
        }}
        exampleText={stylesText?.example1}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "option_1" },
            { label: "Option 2", value: "option_2" },
            { label: "Option 3", value: "option_3" },
            { label: "Option 4", value: "option_4" },
          ]}
          styles={{
            selectBox: {
              border: "none",
              borderBottom: "2px solid #EB3D6C",
              borderRadius: "0",
              background: "white",
              // color: "black",
            },
            searchInput: {
              border: "none",
              borderBottom: "2px solid #EB3D6C",
              borderRadius: "0",
            },
            optionsContainer: { borderRadius: "0" },
            optionItem: "style-option-example1",
            selectedOptionItem: { backgroundColor: "#eb3d6c45" },
          }}
          resetButton
          placeholder="Custom Dropdown"
          // title="Set Default Styles"
          onSelect={() => {}}
          showSearch={true}
        />
      </ExampleTemplate>
      <ExampleTemplate
        titleElement={{
          element: (
            <>
              <h2 className="mt-8">Example 2</h2>
              <p className="m-0 mt-4">CSS Class for this example.</p>
              <CopyComponent
                textToCopy={stylesText?.example2CSS}
                styleClass="top-right"
              >
                <Codebox>{stylesText?.example2CSS}</Codebox>
              </CopyComponent>
            </>
          ),
        }}
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example demonstrates the usage of the{" "}
              <HighLight>arrow</HighLight> and <HighLight>title</HighLight>{" "}
              properties along with the previously mentioned{" "}
              <HighLight>styles</HighLight> prop.
            </p>
          ),
        }}
        exampleText={stylesText?.example2}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "option_1" },
            { label: "Option 2", value: "option_2" },
            { label: "Option 3", value: "option_3" },
          ]}
          styles={{
            selectBox: {
              border: "#f9f9f9",
              // background: "#d1d1d1",
              padding: "0.825rem 1.5rem",
              borderRadius: " 0.625rem",
              backgroundColor: "#5e6278",
              fontWeight: "500",
              fontSize: "1.1rem",
              color: "whitesmoke",
            },
            optionsContainer: {
              backgroundColor: "#5e6278",
            },
            selectedOptionItem: {
              backgroundColor: "rgb(121 129 175)",
            },
            optionItem: "style-option-example2",
            arrow: { lineHeight: "0" },
            title: { color: "whitesmoke", fontSize: "17px" },
          }}
          placeholder="Dark Theme Style"
          // title="Set Default Styles"
          onSelect={() => {}}
          resetButton={"Clear Value"}
          title="Select Option"
          customArrow={{
            element: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="whitesmoke"
              >
                <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
              </svg>
            ),
          }}
        />
      </ExampleTemplate>
      <ExampleTemplate
        title="Example 3"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example demonstrates the usage of the{" "}
              <HighLight>disabledState</HighLight> property of the{" "}
              <HighLight>styles</HighLight> prop.
            </p>
          ),
        }}
        exampleText={stylesText?.example3}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "option_1" },
            { label: "Option 2", value: "option_2" },
            { label: "Option 3", value: "option_3" },
          ]}
          placeholder="Choose option here.."
          onSelect={() => {}}
          styles={{
            disabledState: { color: "white" },
            arrow: { fill: "white" },
          }}
          disabled={true}
        />
      </ExampleTemplate>
    </div>
  );
};

export default Styles;
