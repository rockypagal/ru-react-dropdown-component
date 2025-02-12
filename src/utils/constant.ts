interface exampleObj {
  example1: string;
  example2: string;
  example3: string;
  example3Css: string;
  example4: string;
  example5: string;
  example6Options: string;
  example6: string;
}

export const examplesText: exampleObj = {
  example1: `<DropDownBox
   options={[
     { label: "Option 1", value: "Option_1" },
     { label: "Option 2", value: "Option_2" },
     { label: "Option 3", value: "Option_3" },
    ]}
    placeholder="Select option"
    onSelect={(value) => setValue(value)}
   />
  `,
  example2: `<DropDownBox
  options={[
   { label: "Option 1", value: "Option_1" },
   { label: "Option 2", value: "Option_2" },
   { label: "Option 3", value: "Option_3" },
  ]}
  onSelect={(value) => setValue(value)}
  showSearch={true}
  resetButton={true}
  title="Select option"
  placeholder="Choose here..."
  />
  `,
  example3: `<DropDownBox
   options={[
    { label: "Option 1", value: "Option_1" },
    { label: "Option 2", value: "Option_2" },
    { label: "Option 3", value: "Option_3" },
    ]}
    showSearch={true}
    resetButton={true}
    onSelect={(value) => setValue(value)}
    
    title="Select option"
    animateTitle={true}// Animates the title on focus
    styles={{
      title: { color: "white", backgroundColor: "transparent" },
      selectedValue: { color: "white", fontWeight: "600" },
      searchInput: { borderRadius: "0", color: "#3880ff" },
      arrow: { fill: "#3880ff" },
      
      optionItem: "example-option", // you can also pass CSS class to add styles
      optionsContainer: {
         border: "none",
         borderBottom: "1px solid gray",
         borderRadius: "0",
      },
      selectBox: {
        border: "none",
        borderRadius: "0",
        backgroundColor: "transparent",
        borderBottom: "1px solid #3880ff",
      },
    }}
 />
  `,
  example3Css: `.example-option:hover {
  background-color: rgb(255 59 0 / 21%) !important;
}`,
  example4: `<DropDownBox
   options={[
     { label: "Option 1", value: "Option_1" },
     { label: "Option 2", value: "Option_2" },
     { label: "Option 3", value: "Option_3" },
    ]}
    placeholder="Select option"

    beforeSelect={(value, context) => {  
      if (value === context.oldValue) {
        // Returning false prevents onSelect and afterSelect from being called.
         return false;
      }
      alert("Before Select");
    }}
         
    onSelect={(value, context) =>{
      alert("On Select")
    }}

    afterSelect={(value, context) => {
      alert("After select"); 
    }}
/>
  `,
  example5: `<DropDownBox
   options={[
     { label: "Option 1", value: "Option_1" },
     { label: "Option 2", value: "Option_2" },
     { label: "Option 3", value: "Option_3" },
    ]}
   onSelect={(value) => {
    setValue(value);
   }}
   resetButton="Clear Value"
   incomingValue={response} // Option_3
/>
  `,
  example6Options: `const countriesOptions = [
    { label: "America", value: "america" },
    { label: "Japan", value: "japan" },
    { label: "Germany", value: "germany" },
    { label: "Brazil", value: "brazil" },
    { label: "India", value: "india" },
  ];
  const capitalsOptions = [
    { label: "Washington DC", value: "washington_dc" },
    { label: "Tokyo", value: "tokyo" },
    { label: "Berlin", value: "berlin" },
    { label: "Rio", value: "rio" },
    { label: "New Delhi", value: "new_delhi" },
  ];

  const CountryCapitalList = {
    america: "washington_dc",
    japan: "tokyo",
    germany: "berlin",
    brazil: "rio",
    india: "new_delhi",
  };
`,
  example6: `<DropDownBox
  options={countriesOptions}
  onSelect={(value) => {
      setCountry(value);
  }}
  resetButton="Clear country"
  title="Select Country"
/>

<DropDownBox
  options={capitalsOptions}
  title="Select Capital"
  resetButton="Clear capital"
  onSelect={(value) => {
    setCapital(value);
  }}
  changeObserver={{
    target: country,// Observe changes in country state
    handler: (
      setter,// A function used to update value in the dropdown.
      context,// Context object contains dropdownValue,newTargetedValue, and oldTargetedValue
    ) => {
      const newCapital = CountryCapitalList[context.newTargetedValue] ?? "";
      setter(newCapital);
    },
  }}
/>
  `,
};

// * Options

interface optionsObj {
  example1: string;
  example2: string;
}

export const optionsText: optionsObj = {
  example1: `<DropDownBox
  options={[
  { label: "Option 1", value: "Option_1" },
  { label: "Option 2", value: "Option_2" },
  { label: "Option 3", value: "Option_3" },
  ]}
  onSelect={(value) => setValue(value)}
/>`,
  example2: `<DropDownBox
  options={[
  { label: "Option 1", value: "Option_1" },
  { label: "Option 2", value: "Option_2" },
  { label: "Option 3", value: "Option_3" },
  ]}
  onSelect={(value) => setValue(value)}
/>`,
};
