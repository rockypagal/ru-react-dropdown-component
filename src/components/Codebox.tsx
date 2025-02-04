import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface codeboxProp {
  children: string;
}

const Codebox = ({ children }: codeboxProp) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={tomorrow}
      customStyle={{ borderRadius: "10px" }} //*********
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Codebox;
