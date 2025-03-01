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
import Styles from "../components/props/Styles";
import Disabled from "../components/props/Disabled";
import Placeholder from "../components/props/Placeholder";
import IncomingValue from "../components/props/IncomingValue";
import ChangeObserver from "../components/props/ChangeObserver";
import ResetButton from "../components/props/ResetButton";
import CustomArrow from "../components/props/CustomArrow";
import HideScrollbar from "../components/props/HideScrollbar";
import ShowSearch from "../components/props/ShowSearch";

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
      {
        path: "/styles",
        element: <Styles />,
      },

      {
        path: "/incomingValue",
        element: <IncomingValue />,
      },
      {
        path: "/changeObserver",
        element: <ChangeObserver />,
      },
      {
        path: "/placeholder",
        element: <Placeholder />,
      },
      {
        path: "/showSearch",
        element: <ShowSearch />,
      },
      {
        path: "/disabled",
        element: <Disabled />,
      },
      {
        path: "/resetButton",
        element: <ResetButton />,
      },
      {
        path: "/customArrow",
        element: <CustomArrow />,
      },
      {
        path: "/hideScrollbar",
        element: <HideScrollbar />,
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
