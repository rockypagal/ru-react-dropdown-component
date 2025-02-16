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
  {
    label: "User 1",
    value: "userId_1",
    searchOptions: ["abc@xyz.com", "accountant", "123-456-7890"],
  },
  {
    label: "User 2",
    value: "userId_2",
    searchOptions: ["jkl@pqr.com", "manager", "0243-156-9890"],
  },
  {
    label: "User 3",
    value: "userId_3",
    searchOptions: ["rst@uvw.com", "teacher", "321-654-0987"],
  },
]}
  onSelect={(value) => setValue(value)}
/>`,
};

// * BeforeSelect

interface beforeSelectObj {
  example1: string;
  example2: string;
}

export const beforeSelectText: beforeSelectObj = {
  example1: `<DropDownBox
  options={[
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
  { label: "Guest", value: "guest" },
]}
  placeholder="Select Role"
  beforeSelect={(value, metadata) => {
  // Prevent selection if "guest" is chosen
  if (value === "guest") {
    alert("Guest selection is restricted!");
    return false; // Blocks the selection
  }
}}
/>`,
  example2: `<DropDownBox
  options={[
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ]}
  placeholder="Select Role"
  beforeSelect=(value, context) => {
    const { oldValue, index, row } = context;
    
    // Prevent selection if the same option is selected again
    if (value === oldValue) {
      alert(\`You already selected "\${row.label}". Choose a different option.\`);
      return false; // Blocks the selection
      }
      
      alert(\`Selected Index: \${index}, Label: \${row.label}\`);
      };
      />`,
};

// * ONSelect
interface onSelectObj {
  example1: string;
}

export const onSelectText: onSelectObj = {
  example1: `<DropDownBox
  options={[
  { label: "Option 1", value: "option_1" },
  { label: "Option 2", value: "option_2" },
  { label: "Option 3", value: "option_3" },
]}
  placeholder="Select Role"
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }
}
/>`,
};
// * AfterSelect
interface afterSelectObj {
  example1: string;
}

export const afterSelectText: afterSelectObj = {
  example1: `<DropDownBox
  options={[
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
]}
  title="Update Role"
  
  afterSelect={async (value,metadata) => {
    await updateRole(value);// Making API call to update role
  }}
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
  />`,
};

// * Size

interface sizeObj {
  defaultText: string;
  example1: string;
  example2: string;
  example3: string;
}

export const sizeText: sizeObj = {
  defaultText: `.size-example-style {
  width: 250px !important;
  }

@media (max-width: 768px) {
  .size-example-style {
    width: 100% !important;
  }
}`,

  example1: `<DropDownBox
  options={[
  { label: "Medium", value: "medium" },
  { label: "Small", value: "small" },
  { label: "Mini", value: "mini" },
  ]}
  size={"_"}
  placeholder="Select Size"
  resetButton={true}
  onSelect={(value) => {
    setSize(value);
    }}
    />`,
  example2: `<DropDownBox
  options={[
    { label: "700px", value: "700px" },
  { label: "40em", value: "40em" },
  { label: "35rem", value: "35rem" },
  { label: "60%", value: "60%" },
  { label: "20vw", value: "20vw" },
  { label: "25vmin", value: "25vmin" },
  { label: "7vmax", value: "7vmax" },
  ]}
  size={"_"}// CSSUnit state
  placeholder="Select CSS Unit"
  resetButton={true}
  onSelect={(value) => {
    setCSSUnit(value);
    }}
/>`,
  example3: `<DropDownBox
  options={[
    { label: "Option 1", value: "option_1" },
    { label: "Option 2", value: "option_2" },
    { label: "Option 3", value: "option_3" },
]}
  size={"size-example-style"}// CSS Class
  placeholder="CSS Class"
  onSelect={(value) => {
    setValue(value);
  }}
/>`,
};

// * Title
interface titleObj {
  example1: string;
}

export const titleText: titleObj = {
  example1: `<DropDownBox
  options={[
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ]}
    
  title="Update Role"
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
  />`,
};
//* AnimateTitlel
interface titleObj {
  example1: string;
}

export const animateTitleText: titleObj = {
  example1: `<DropDownBox
  options={[
     { label: "Admin", value: "admin" },
     { label: "User", value: "user" },
     { label: "Guest", value: "guest" },
   ]}
  title="Update Role"
  resetButton={true}
  animateTitle={true}// To animate the title
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
/>`,
};
