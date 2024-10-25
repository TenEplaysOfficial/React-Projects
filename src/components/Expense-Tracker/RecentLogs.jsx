import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context";

function RecentLogs() {
  const { transactionList } = useContext(ExpenseTrackerContext);
  const recentTransactions = transactionList.slice(0,5).reverse();
  return (
    <div className="col-span-2 miniDesktop:col-span-3 w-full text-center m-2 p-4 border-2 border-gray-800 rounded-3xl bg-slate-200">
      <h1 className="text-3xl font-bold font-sans mb-3">Recent Logs</h1>
      <ul>
        {recentTransactions.map((transaction, index) => (
          <li
            key={index}
            className={`flex justify-between p-3 transition-transform duration-300 hover:scale-[102%] hover:border-gray-800 hover:shadow-xl rounded-md overflow-hidden ${
              transaction.type === "Income" ? "bg-green-400" : "bg-red-400"
            }`}
          >
            <p className="overflow-wrap break-words overflow-hidden whitespace-normal max-w-xs">
              {transaction.date}
            </p>
            <p className="overflow-wrap break-words overflow-hidden whitespace-normal max-w-xs">
              {transaction.title}
            </p>
            <p className="overflow-wrap break-words overflow-hidden whitespace-normal max-w-xs">
              {transaction.type}
            </p>
            <p className="overflow-wrap break-words overflow-hidden max-w-xs">
              <span className="text-[1.1em] mr-1">₹</span>
              {transaction.amount}/-
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentLogs;
