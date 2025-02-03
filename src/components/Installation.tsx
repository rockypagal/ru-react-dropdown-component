import React from "react";
import Codebox from "./Codebox";

const Installation = () => {
  const installCommand: string = "npm install ru-react-dropdown-component";
  const installCommandNext: string =
    "npm install ru-react-dropdown-component --force";
  return (
    <div>
      <h1>Introduction</h1>
      <h2>reusable-react-dropdown-component</h2>
      <p>
        The ru-react-dropdown-component library provides the DropDownBox
        component, a customizable and feature-rich dropdown selector for React
        applications. This documentation outlines its props, behavior, and
        usage.
      </p>
      <h2>Installation</h2>
      <span>To install, run the following command in terminal:</span>
      <div
        onClick={() => {
          const clipboardItem = new ClipboardItem({
            "text/plain": new Blob([installCommand], { type: "text/plain" }),
          });
          navigator.clipboard
            .write([clipboardItem])
            .then(() => console.log("Copied to clipboard! ✅"))
            .catch((err) => console.error("Failed to copy:", err));
        }}
      >
        <Codebox>{installCommand}</Codebox>
      </div>
      <h2>Installation for Next js and react 19</h2>
      <span>To install, run the following command in terminal:</span>
      <div
        onClick={() => {
          const clipboardItem = new ClipboardItem({
            "text/plain": new Blob([installCommandNext], {
              type: "text/plain",
            }),
          });
          navigator.clipboard
            .write([clipboardItem])
            .then(() => console.log("Copied to clipboard! ✅"))
            .catch((err) => console.error("Failed to copy:", err));
        }}
      >
        <Codebox>{installCommandNext}</Codebox>
      </div>
    </div>
  );
};

export default Installation;
