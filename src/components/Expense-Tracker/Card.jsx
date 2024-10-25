import BIECards from "./BIECards";
import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context";

function Card() {
  const { currentBalance, income, expense } = useContext(ExpenseTrackerContext);

  return (
    <div className="col-span-3 justify-between w-full">
      <div className="flex border-2 border-gray-800 p-4 rounded-2xl bg-white shadow-md w-full max-h-fit justify-between items-center mobile:flex-col">
        <BIECards amount={currentBalance} label={"Current Balance"} />
        <BIECards
          amount={income}
          label={"Income"}
          textColor={"text-green-500"}
        />
        <BIECards
          amount={expense}
          label={"Expense"}
          textColor={"text-red-500"}
        />
      </div>
    </div>
  );
}

export default Card;
