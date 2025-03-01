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
  showSearch={true}
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
  beforeSelect={(value, context) => {
    const { oldValue, index, row } = context;
    
    // Prevent selection if the same option is selected again
  if (value === oldValue) {
    alert(\`You already selected "\${row.label}". Choose a different option.\`);
    return false; // Blocks the selection
  }
      
    alert(\`Selected Index: \${index}, Label: \${row.label}\`);
  }}
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

// * Placeholder

interface placeholderObj {
  example1: string;
}

export const placeholderText: placeholderObj = {
  example1: `<DropDownBox
  options={[
     { label: "Admin", value: "admin" },
     { label: "User", value: "user" },
     { label: "Guest", value: "guest" },
  ]}
  title="Update Role"
  placeholder="Select Role Here..."
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
/>`,
};

// * BeforeSelect

interface disabledObj {
  example1: string;
}

export const disabledText: disabledObj = {
  example1: `<DropDownBox
  options={[
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ]}
  placeholder="Dropdown is disabled"
  disabled={true}
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
  />`,
};

// * Styles

interface stylesObj {
  example1: string;
  example2: string;
  example3: string;
  example2CSS: string;
  example1CSS: string;
}
export const stylesText: stylesObj = {
  example1: ` <DropDownBox
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
     },
     searchInput: {
       border: "none",
       borderBottom: "2px solid #EB3D6C",
       borderRadius: "0",
     },
     optionsContainer: { borderRadius: "0" },
     optionItem: "style-option-example1", // style class
     selectedOptionItem: { backgroundColor: "#eb3d6c45" },
  }}
  resetButton
  placeholder="Custom Dropdown"
  onSelect={(value, metadata) => {
    setValue(value)// To set the selected value to state
  }}
  showSearch={true}
/>`,
  example2: `  <DropDownBox
   options={[
     { label: "Option 1", value: "option_1" },
     { label: "Option 2", value: "option_2" },
     { label: "Option 3", value: "option_3" },
   ]}

   styles={{
     selectBox: {
       border: "#f9f9f9",
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
     optionItem: "style-option-example2", // style class
     arrow: { lineHeight: "0" },
     title: { color: "whitesmoke", fontSize: "17px" },
   }}

   placeholder="Dark Theme Style"
  onSelect={(value, metadata) => {
    setValue(value)// To set the selected value to state
  }}

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

 />`,
  example3: ` <DropDownBox
   options={[
     { label: "Option 1", value: "option_1" },
     { label: "Option 2", value: "option_2" },
     { label: "Option 3", value: "option_3" },
   ]}
   placeholder="Choose option here.."
   onSelect={(value: string) => {
     setCSSUnit(value);
   }}
   styles={{ disabledState: { color: "white" }, arrow: { fill: "white" } }}
   disabled={true}
 />`,
  example2CSS: `.style-option-example2 {
  color: white !important;
}
.style-option-example2:hover {
  background-color: rgb(77 80 97) !important;
}`,
  example1CSS: `.style-option-example1 {
  transition: 0.2s;
}
.style-option-example1:hover {
  background-color: #eb3d6c91 !important;
}`,
};

// * IncomingValue

interface incomingValueObj {
  example1: string;
  example1Variable: string;
  example2: string;
}

export const incomingValueText: incomingValueObj = {
  example1: `<DropDownBox
  options={[
     { label: "Admin", value: "admin" },
     { label: "User", value: "user" },
     { label: "Guest", value: "guest" },
  ]}
  placeholder=Select Role"
  incomingValue={defaultValue} //  Pre-fill value
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
  />`,
  example1Variable: `const defaultValue = "guest";`,
  example2: `<DropDownBox
   options={[
     { label: "Admin", value: "admin" },
     { label: "User", value: "user" },
     { label: "Guest", value: "guest" },
   ]}
   onSelect={(value) => {
    setValue(value);
   }}
   resetButton="Clear Value"
   incomingValue={response} // guest
/>`,
};

// * ChangeObserver

interface changeObserverObj {
  example1: string;
  example2: string;
}

export const changeObserverText: changeObserverObj = {
  example1: `<DropDownBox
  options={[
     { label: "Admin", value: "admin" },
     { label: "User", value: "user" },
     { label: "Guest", value: "guest" },
  ]}
  title="Select Role"
  onSelect={(value) => {
    setValue(value);
  }}
  disabled={isDisabled} // isDisabled is set to "tempValue"
  changeObserver={{
    target: isDisabled, // Observes changes in "isDisabled" state
    handler(setter, context) {
      if (context?.newTargetedValue === true) {
        setter(""); // Clears the dropdown value when disabled
      }
    },
  }}
/>`,
  example2: `<DropDownBox
  options={[
       { label: "Option 1", value: "Option_1" },
       { label: "Option 2", value: "Option_2" },
       { label: "Option 3", value: "Option_3" },
  ]}
  placeholder="Select Option"
  resetButton={"To Reset Click here"}
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
/>`,
};

// * ResetValue

interface resetButtonObj {
  example1: string;
  example2: string;
}

export const resetButtonText: resetButtonObj = {
  example1: `<DropDownBox
  options={[
      { label: "Option 1", value: "Option_1" },
      { label: "Option 2", value: "Option_2" },
      { label: "Option 3", value: "Option_3" },
  ]}
  placeholder="Select Option"
  resetButton={true}
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
/>`,
  example2: `<DropDownBox
  options={[
       { label: "Option 1", value: "Option_1" },
       { label: "Option 2", value: "Option_2" },
       { label: "Option 3", value: "Option_3" },
  ]}
  placeholder="Select Option"
  resetButton={"To Reset Click here"}
  onSelect={(value, metadata) => {
  setValue(value)// To set the selected value to state
  }}
/>`,
};

// * HideScrollbar

interface hideScrollbarObj {
  example1: string;
}

export const hideScrollbarText: hideScrollbarObj = {
  example1: `<DropDownBox
  options={[
       { label: "Option 1", value: "Option_1" },
       { label: "Option 2", value: "Option_2" },
       { label: "Option 3", value: "Option_3" },
       { label: "Option 4", value: "Option_4" },
       { label: "Option 5", value: "Option_5" },
       { label: "Option 6", value: "Option_6" },
       { label: "Option 7", value: "Option_7" },
       { label: "Option 8", value: "Option_8" },
       { label: "Option 9", value: "Option_9" },
       { label: "Option 10", value: "Option_10" },
       { label: "Option 11", value: "Option_11" },
       { label: "Option 12", value: "Option_12" },
       { label: "Option 13", value: "Option_13" },
       { label: "Option 14", value: "Option_14" },
       { label: "Option 15", value: "Option_15" },
  ]}
    hideScrollbar={true}
    placeholder="Dropdown Scrollbar is hidden"
    onSelect={(value, metadata) => {
    setValue(value)// To set the selected value to state
    }}
  />`,
};

// * Custom Arrow

interface customArrowObj {
  example1: string;
  example2: string;
  example3: string;
}

export const customArrowText: customArrowObj = {
  example1: `<DropDownBox
  options={[
       { label: "Option 1", value: "Option_1" },
       { label: "Option 2", value: "Option_2" },
       { label: "Option 3", value: "Option_3" },
  ]}
  placeholder="Select Option"
  onSelect={(value, metadata) => {
    setValue(value)// To set the selected value to state
  }}
    
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
/>`,
  example2: `<DropDownBox
  options={[
       { label: "Option 1", value: "Option_1" },
       { label: "Option 2", value: "Option_2" },
       { label: "Option 3", value: "Option_3" },
  ]}
  placeholder="Select Option"
  onSelect={(value, metadata) => {
    setValue(value)// To set the selected value to state
  }}

  styles={{ arrow: { lineHeight: "0", rotate: "0deg" }, }}
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
/>`,
  example3: `<DropDownBox
  options={[
       { label: "Option 1", value: "Option_1" },
       { label: "Option 2", value: "Option_2" },
       { label: "Option 3", value: "Option_3" },
  ]}
  placeholder="Select Option"
  onSelect={(value, metadata) => {
    setValue(value)// To set the selected value to state
  }}

  styles={{ arrow: { lineHeight: "0"} }}
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
/>`,
};
