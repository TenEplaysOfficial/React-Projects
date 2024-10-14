import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Backbtn({ text = "Go Back", steps = 1 }) {
  const navigate = useNavigate();

  const back = () => {
    const historyLength = window.history.length;

    // If the history length is less than or equal to the steps, redirect to the base URL
    if (historyLength <= steps) {
      window.location.href = "/React-Projects/"; 
    } else {
      navigate(-steps);
    }
  };

  return (
    <button onClick={back} className="button">
      {text}
    </button>
  );
}

Backbtn.propTypes = {
  text: PropTypes.string,
  steps: PropTypes.number,
};

export default Backbtn;
