import Backbtn from "../Backbtn";
import AddTransactionBtn from "./AddTransactionBtn";
import Card from "./Card";
import RecentLogs from "./RecentLogs";
import Stats from "./Stats";
import { ExpenseTrackerProvider } from "./Context";

function ExpenseTracker() {
  return (
    <>
    <ExpenseTrackerProvider>
      
      <header className="flex justify-between items-center px-10 py-4 border-b-2 border-gray-800">
        <h1 className="text-4xl text-balance font-bold font-sans flex-1 hover:cursor-default">
          Expense Tracker
        </h1>
        <Backbtn />
      </header>
      <div className="grid w-full gap-4 p-4 items-start grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  bg-gray-100 auto-rows-auto">
        <Card />
        <AddTransactionBtn />
        <RecentLogs />
        <Stats />
      </div>
    </ExpenseTrackerProvider>
    </>
  );
}

export default ExpenseTracker;
