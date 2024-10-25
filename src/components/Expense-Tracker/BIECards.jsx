import PropTypes from "prop-types";

function BIECards(props) {
  const { textColor = "", amount = "N/A", label } = props;

  return (
    <div className="flex flex-col items-center w-full max-w-full text-center mobile:text-left">
      <h2
        className={`font-extrabold text-[clamp(1.5rem, 2vw, 2rem)] mb-2 mobile:mb-0 ${textColor} break-words w-full `}
      >
        <span className="text-[1.1em] mr-1">₹</span>
        {typeof amount === "number" ? amount.toLocaleString() : amount}/-
      </h2>
      <p className="text-slate-500 text-xl mobile:mr-4 flex-1 mobile:mb-3 mobile:text-left w-full mobile:left-2 mobile:mx-auto">
        {label}
      </p>
    </div>
  );
}

BIECards.propTypes = {
  textColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BIECards;
