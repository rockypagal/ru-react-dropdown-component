import Example from "../components/Example";
import Installation from "../components/Installation";

export const sidebarData: { [key: string]: React.ReactNode } = {
  installation: <Installation />,
  example: <Example />,
};

export const sidebarButtons: string[] = ["installation", "example"];
