import Codebox from "./Codebox";
import CopyComponent from "./CopyComponent";
import ExampleOne from "./examples/Example1";
import ExampleTwo from "./examples/Example2";
import ExampleThree from "./examples/Example3";
import ExampleFour from "./examples/Example4";
import ExampleFive from "./examples/Example5";
import ExampleSix from "./examples/Example6";

export interface optionsType {
  label: string;
  value: string;
}

const Example = () => {
  const cssImport = `import "ru-react-dropdown-component/dist/styles.css";`;
  const options: optionsType[] = [
    { label: "Option 1", value: "Option_1" },
    { label: "Option 2", value: "Option_2" },
    { label: "Option 3", value: "Option_3" },
  ];
  return (
    <div className="pb-8 mb-6">
      <h1 className="main-heading">Examples</h1>
      <h2 className="sub-heading m-0">Examples with Props and Explanations</h2>
      <p className="m-0 mt-2">
        Below are multiple examples demonstrating how to use
        ru-react-dropdown-component with different props. Each example includes
        an explanation of the props used and their effects, helping you
        integrate the dropdown seamlessly into your React application.
      </p>
      <h2 className="mt-8">CSS Import</h2>
      <p className="text">
        Importing CSS is optional. However, if you notice a slight delay in
        styles being applied, consider importing it for better performance.
      </p>
      <CopyComponent textToCopy={cssImport}>
        <Codebox>{cssImport}</Codebox>
      </CopyComponent>

      {/* Example 1 */}
      <ExampleOne options={options} />

      {/* Example 2 */}
      <ExampleTwo options={options} />

      {/* Example 3 */}
      <ExampleThree options={options} />

      {/* Example 4 */}
      <ExampleFour options={options} />

      {/* Example 5 */}
      <ExampleFive options={options} />

      {/* Example 6 */}
      <ExampleSix />
    </div>
  );
};

export default Example;
