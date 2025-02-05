import Example from "../components/Example";
import Installation from "../components/Installation";

export const sidebarData: { [key: string]: React.ReactNode } = {
  installation: <Installation />,
  examples: <Example />,
};

export const sidebarButtons: string[] = [
  "installation",
  "examples",
  "options",
  "onSelect",
  "size",
  "title",
  "animateTitle",
  "styles",
  "beforeSelect",
  "afterSelect",
  "incomingValue",
  "changeObserver",
  "placeholder",
  "showSearch",
  "disabled",
  "resetButton",
  "customArrow",
  "hideScrollbar",
];
