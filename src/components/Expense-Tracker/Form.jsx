import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

function PopupForm({ onClose,  addTransaction }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [type, setType] = useState("Income");
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const transaction = {
      title: inputTitle,
      amount: parseFloat(inputAmount),
      type,
      date: new Date().toLocaleDateString(),
    };

    if (typeof addTransaction === "function") {
      addTransaction(transaction);
    } else {
      console.error("addTransaction is not a function");
    }
    setLoading(false);
    setInputTitle("");
    setInputAmount("");
    setType("Income"); // Reset type to default
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          ref={modalRef}
          className="bg-white rounded-lg shadow-lg p-6 w-80"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          <h2 className="text-xl font-bold mb-4">Add Income/Expense</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              required
            />
            <input
              type="number"
              placeholder="Amount"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              required
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white rounded-full py-2 px-4 w-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-green-500 text-white rounded-full py-2 px-4 w-full mt-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

PopupForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddTransaction: PropTypes.func.isRequired,
  addTransaction: PropTypes.func.isRequired, // Ensure addTransaction is a required prop
};

export default PopupForm;
