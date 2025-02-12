import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Example from "../components/Example";
import Installation from "../components/Installation";
import Options from "../components/props/Options";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not found</h1>,
    children: [
      { index: true, element: <Navigate to="installation" replace /> },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/examples",
        element: <Example />,
      },
      {
        path: "/options",
        element: <Options />,
      },
    ],
  },
]);

export const sidebarButtons: string[] = [
  "installation",
  "examples",
  "options",
  "beforeSelect",
  "onSelect",
  "afterSelect",
  "size",
  "title",
  "animateTitle",
  "styles",
  "incomingValue",
  "changeObserver",
  "placeholder",
  "showSearch",
  "disabled",
  "resetButton",
  "customArrow",
  "hideScrollbar",
];
