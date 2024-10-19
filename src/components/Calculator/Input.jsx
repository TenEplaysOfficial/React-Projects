import { PropTypes } from "prop-types";

function Input(props) {
  const { handleClick } = props;

  const buttonStyle = "p-3 m-2 bg-gray-300 rounded-2xl border-2 border-black ";

  return (
    <div className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto">
      <div className="grid grid-cols-4 gap-2 text-center">
        {["AC", "C", "%", "/"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={buttonStyle}
          >
            {item}
          </button>
        ))}
        {["7", "8", "9", "*"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={buttonStyle}
          >
            {item}
          </button>
        ))}
        {["4", "5", "6", "-"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={buttonStyle}
          >
            {item}
          </button>
        ))}
        {["1", "2", "3", "+"].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={buttonStyle}
          >
            {item}
          </button>
        ))}
        {["00", "0", ".", "="].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={buttonStyle}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

Input.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Input;
