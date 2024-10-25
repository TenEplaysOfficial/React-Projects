import Statscomponent from "./Statscomponent";
import { ExpenseTrackerContext } from "./Context";
import { useContext } from "react";

function Stats() {
  const {  incomeRange,
    expenseRange,
    savingsRange,
    investmentRange, } = useContext(ExpenseTrackerContext);

  return (
    <>
      <div className="col-span-2 miniDesktop:col-span-3   my-auto">
        <div className="flex justify-between mb-4 mobile:flex-col">
          <Statscomponent label={"Income"} min={incomeRange.min} max={incomeRange.max} />
          <Statscomponent label={"Expense"} min={expenseRange.min} max={expenseRange.max}  />
        </div>
        <div className="flex justify-between mb-4 mobile:flex-col">
          <Statscomponent label={"Savings"} min={savingsRange.min} max={savingsRange.max} />
          <Statscomponent label={"Investment (20%)"} min={investmentRange.min} max={investmentRange.max} />
        </div>
      </div>
    </>
  );
}

export default Stats;
