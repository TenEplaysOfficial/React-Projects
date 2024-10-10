import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function Backbtn(props) {
  const { text, steps } = { text: "Go Back", steps: 1, ...props }; // Set defaults
  // const { text, steps } = { text: "Go Back", steps: 1, ...props };
  /* Set defaults with spread
  Using the spread operator allows you to set default prop values while still accepting and overriding those values with any props passed to the component, enhancing flexibility and reusability.
  */

  const goback = useNavigate();
  const location = useLocation(); // Get the current location
  const historyLength = location.state?.historyLength || 0; // Retrieve the history length from location state

  const back = () => {
    historyLength < props.steps ? goback("/") : goback(-steps);
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
