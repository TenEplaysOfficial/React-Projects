import PropTypes from "prop-types";

function Display({ value }) {
  return (
    <input
      type="text"
      value={value}
      disabled
      className="text-right border-2 p-3 mb-5 w-full max-w-xs md:max-w-md lg:max-w-lg rounded-2xl border-black font-sans font-bold"
       
    />
  );
}

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Display;
