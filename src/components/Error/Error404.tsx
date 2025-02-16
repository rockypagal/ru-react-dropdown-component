import { useNavigate } from "react-router-dom";
import SVGComponent from "./NotFoundSVG";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="container full-flex">
      <div
        style={{
          width: "70%",
          height: "100vh",
        }}
        className="full-flex flex-column"
      >
        <SVGComponent />
        <div className="full-flex">
          <button onClick={() => navigate(-1)}>
            Return To The Command Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
