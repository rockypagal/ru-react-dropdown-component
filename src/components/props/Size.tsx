import { useState } from "react";
import DropDownBox from "ru-react-dropdown-component";
import { sizeText } from "../../utils/constant";
import ExampleTemplate from "../ExampleTemplate";
import HighLight from "../HighLight";
import Label from "../Label";
import CopyComponent from "../CopyComponent";
import Codebox from "../Codebox";

const Size = () => {
  const [size, setSize] = useState<string>(" ");
  const [cssUnit, setCSSUnit] = useState<string>("");
  return (
    <div className="pb-8 mb-6">
      {" "}
      <h1 className="main-heading">Size</h1>
      {/* Descriptions */}
      <h2 className="sub-heading m-0">Description</h2>
      <p className="m-0 mt-2">
        The <HighLight>size</HighLight> prop determines the width of the
        dropdown. It accepts predefined string values such as{" "}
        <HighLight>"small"</HighLight>, <HighLight>"medium"</HighLight>, and{" "}
        <HighLight>"mini"</HighLight>, as well as custom CSS units like{" "}
        <HighLight>"px"</HighLight>, <HighLight>"em"</HighLight>,{" "}
        <HighLight>"rem"</HighLight>, <HighLight>"%"</HighLight>,{" "}
        <HighLight>"vw"</HighLight>, <HighLight>"vmin"</HighLight>, and
        <HighLight>"vmax"</HighLight>. If a numeric value is provided, it is
        interpreted as a pixel width. If a regular string is given, it is
        applied as a <HighLight>className</HighLight> for custom styling. This
        prop ensures flexible sizing, allowing both fixed and responsive
        designs.
      </p>
      <Label label="Type" className="mt-8">
        String | Number
      </Label>{" "}
      <Label label="Predefined Sizes">medium, small, and mini</Label>
      <Label label="CSS Units">px, em, rem, %, vw, vmin, and vmax</Label>
      <Label label="className">
        Regular string will be applied as a className
      </Label>
      <h2 className="mt-8 mb-5">Properties</h2>
      <Label label="medium">
        If <HighLight>size="medium"</HighLight>, the dropdown width is set to{" "}
        <HighLight>19rem</HighLight> or <HighLight>304px</HighLight>.
      </Label>
      <Label label="small">
        If <HighLight>size="small"</HighLight>, the dropdown width is set to{" "}
        <HighLight>11rem</HighLight> or <HighLight>176px</HighLight>.
      </Label>
      <Label label="mini">
        If <HighLight>size="mini"</HighLight>, the dropdown width is set to{" "}
        <HighLight>5rem</HighLight> or <HighLight>80px</HighLight>.
      </Label>
      <Label label="CSS Unit">
        If size provided without any CSS unit like{" "}
        <HighLight>size="500"</HighLight> or <HighLight>size={500}</HighLight>{" "}
        then it will be converted to <HighLight>"px"</HighLight> e.g{" "}
        <HighLight>500px</HighLight> by default
      </Label>
      <Label label="className">
        If the size prop is provided as a plain string, such as{" "}
        <HighLight>size="dropdown-width"</HighLight>, it will be used as a{" "}
        <HighLight>className</HighLight> for the dropdown. This is useful for
        applying responsive styles via CSS.
      </Label>
      {/* Empales */}
      <ExampleTemplate
        title="Example 1"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example showcases the usage of <HighLight>medium</HighLight>,{" "}
              <HighLight>small</HighLight>, and <HighLight>mini</HighLight>
              as default sizes in the <HighLight>size</HighLight> prop.
            </p>
          ),
        }}
        exampleText={sizeText?.example1?.replace("_", size)}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Medium", value: "medium" },
            { label: "Small", value: "small" },
            { label: "Mini", value: "mini" },
          ]}
          resetButton
          size={size}
          placeholder="Select Size"
          // title="Set Default Size"
          onSelect={(value: string) => {
            setSize(value);
          }}
          incomingValue={size === " " ? "medium" : ""}
        />
      </ExampleTemplate>
      <ExampleTemplate
        title="Example 2"
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example demonstrates using <HighLight>"px"</HighLight>,{" "}
              <HighLight>"em"</HighLight>, <HighLight>"rem"</HighLight>,{" "}
              <HighLight>"%"</HighLight>, <HighLight>"vw"</HighLight>,
              <HighLight>"vmin"</HighLight>, and <HighLight>"vmax"</HighLight>{" "}
              with the <HighLight>size</HighLight> prop.
            </p>
          ),
        }}
        exampleText={sizeText?.example2?.replace("_", cssUnit)}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "700px", value: "700px" },
            { label: "40em", value: "40em" },
            { label: "35rem", value: "35rem" },
            { label: "60%", value: "60%" },
            { label: "20vw", value: "20vw" },
            { label: "25vmin", value: "25vmin" },
            { label: "7vmax", value: "7vmax" },
          ]}
          resetButton
          size={cssUnit}
          placeholder="Select CSS Unit"
          // title="Set Default Size"
          onSelect={(value: string) => {
            setCSSUnit(value);
          }}
        />
      </ExampleTemplate>
      <ExampleTemplate
        titleElement={{
          element: (
            <>
              <h2 className="mt-8">Example 3</h2>
              <p className="m-0 mt-4">CSS Class for this example.</p>
              <CopyComponent
                textToCopy={sizeText?.defaultText}
                styleClass="top-right"
              >
                <Codebox>{sizeText?.defaultText}</Codebox>
              </CopyComponent>
            </>
          ),
        }}
        subtitleElement={{
          element: (
            <p className="m-0 mt-4">
              This example demonstrates the usage of CSS Class in{" "}
              <HighLight>size</HighLight> prop.
            </p>
          ),
        }}
        exampleText={sizeText?.example3}
        className=" p-0-imp"
      >
        {/* <h3 className="mt-8 mb-5">Updated Role: {value}</h3> */}
        <DropDownBox
          options={[
            { label: "Option 1", value: "option_1" },
            { label: "Option 2", value: "option_2" },
            { label: "Option 3", value: "option_3" },
          ]}
          size={"size-example-style"}
          placeholder="CSS Class"
          // title="Set Default Size"
          onSelect={(value: string) => {
            setCSSUnit(value);
          }}
        />
      </ExampleTemplate>
    </div>
  );
};

export default Size;
