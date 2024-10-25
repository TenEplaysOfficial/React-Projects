import PropTypes from "prop-types";

function Statscomponent(props) {
  const { label,min,max } = props;

  return (
    <div className=" bg-slate-200 w-full m-2 border-2 border-gray-800 rounded-3xl p-2 text-center justify-center ">
      <h2 className="mb-4">{label}</h2>
      <div className="flex justify-between w-full ">

      <div>
        <h3>{min}</h3>
        <p>Min</p>
      </div>
      <div>
        <h3>{max}</h3>
        <p>Max </p>
      </div>
      </div>

    </div>
  );
}
Statscomponent.propTypes = {
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
};
export default Statscomponent;
