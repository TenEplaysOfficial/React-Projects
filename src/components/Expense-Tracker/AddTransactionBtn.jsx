import { useContext, useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import Form from "./Form";  
import { ExpenseTrackerContext } from "./Context";  

function AddTransactionBtn() {
  const [formVisible, setFormVisible] = useState(false);
  const { addTransaction } = useContext(ExpenseTrackerContext);  

  const handleAddTransaction = (transaction) => {
    addTransaction(transaction);
    setFormVisible(false);
  }
  return (
    <>
      <button
        onClick={() => setFormVisible(true)}
        className="bg-white border-2 border-gray-800 shadow-lg text-gray-900 text-lg font-bold px-6 py-3 rounded-full cursor-pointer text-center transition-transform duration-300 hover:-translate-y-1 flex justify-center items-center w-full my-auto tablet:col-span-2 miniDesktop:col-span-3"
      >
        <BiPlusMedical className="text-lg mr-2 mobile:mr-3" /> Add Transaction
      </button>
      {formVisible && (
        <Form 
          onClose={() => setFormVisible(false)} 
          onAddTransaction={handleAddTransaction}
          addTransaction={addTransaction} 
        />
      )}
    </>
  );
}

export default AddTransactionBtn;
