import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Example from "../components/Example";
import Installation from "../components/Installation";
import Options from "../components/props/Options";
import BeforeSelect from "../components/props/BeforeSelect";
import OnSelect from "../components/props/OnSelect";
import Error404 from "../components/Error/Error404";
import AfterSelect from "../components/props/AfterSelect";
import Size from "../components/props/Size";
import Title from "../components/props/Title";
import AnimateTitle from "../components/props/AnimateTitle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
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
      {
        path: "/beforeSelect",
        element: <BeforeSelect />,
      },
      {
        path: "/onSelect",
        element: <OnSelect />,
      },
      {
        path: "/afterSelect",
        element: <AfterSelect />,
      },
      {
        path: "/size",
        element: <Size />,
      },
      {
        path: "/title",
        element: <Title />,
      },
      {
        path: "/animateTitle",
        element: <AnimateTitle />,
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
