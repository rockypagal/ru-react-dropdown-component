import React from "react";
import { useAnimationClass } from "../utils/customHooks";

interface copyProp {
  children: React.ReactNode;
  textToCopy: string;
  styleClass?: string;
}

const CopyComponent = ({ children, textToCopy, styleClass = "" }: copyProp) => {
  const [className, setClassName] = useAnimationClass(700);

  const clickToCopy = () => {
    const clipboardItem = new ClipboardItem({
      "text/plain": new Blob([textToCopy], { type: "text/plain" }),
    });
    navigator.clipboard
      .write([clipboardItem])
      .then(() => console.log("Copied to clipboard! ✅"))
      .catch((err) => console.error("Failed to copy:", err));

    setClassName("showCopy");
  };

  return (
    <div className="copy-main">
      {children}
      <button
        className={`copy-button ${className} ${styleClass}`}
        onClick={clickToCopy}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#e8eaed"
          className="copy-svg"
        >
          <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
        </svg>
      </button>
    </div>
  );
};

export default CopyComponent;
