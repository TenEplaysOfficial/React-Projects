import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ExpenseTrackerContext = createContext();

export const ExpenseTrackerProvider = ({ children }) => {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactionList, setTransactionList] = useState([
    {
      title: "Initial Income",
      amount: 100,
      type: "Income",
      date: new Date().toLocaleDateString(),
    },
    {
      title: "Initial Expense",
      amount: 100,
      type: "Expense",
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [incomeRange, setIncomeRange] = useState({
    min: Infinity,
    max: -Infinity,
  });
  const [expenseRange, setExpenseRange] = useState({
    min: Infinity,
    max: -Infinity,
  });
  const [savingsRange, setSavingsRange] = useState({
    min: Infinity,
    max: -Infinity,
  });
  const [investmentRange, setInvestmentRange] = useState({
    min: Infinity,
    max: -Infinity,
  });

  const addTransaction = (transaction) => {
    console.log(transaction, "Context");  
    if (
      !transaction ||
      typeof transaction.amount !== "number" ||
      !transaction.type
    ) {
      console.error("Invalid transaction data");
      return;
    }
  
    // Add transaction
    setTransactionList((prevTransactions) => [
      ...prevTransactions,
      transaction,
    ]);
  
    // Update current balance
    setCurrentBalance((prevBalance) =>
      transaction.type === "Income" ? prevBalance + transaction.amount : prevBalance - transaction.amount
    );
  
    // Update income or expense totals
    if (transaction.type === "Income") {
      setIncome((prevIncome) => prevIncome + transaction.amount);
      setIncomeRange((prevRange) => ({
        min: Math.min(prevRange.min, transaction.amount),
        max: Math.max(prevRange.max, transaction.amount),
      }));
    } else if (transaction.type === "Expense") {
      setExpense((prevExpense) => prevExpense + transaction.amount);
      setExpenseRange((prevRange) => ({
        min: Math.min(prevRange.min, transaction.amount),
        max: Math.max(prevRange.max, transaction.amount),
      }));
    }
  
    // Update savings and investment ranges
    const newSavings =
      income - expense + (transaction.type === "Income" ? transaction.amount : -transaction.amount);
    const newInvestment = income * 0.2;
  
    setSavingsRange((prevRange) => ({
      min: Math.min(prevRange.min, newSavings),
      max: Math.max(prevRange.max, newSavings),
    }));
  
    setInvestmentRange((prevRange) => ({
      min: Math.min(prevRange.min, newInvestment),
      max: Math.max(prevRange.max, newInvestment),
    }));
  };
  

  return (
    <ExpenseTrackerContext.Provider
      value={{
        currentBalance,
        income,
        expense,
        transactionList,
        incomeRange,
        expenseRange,
        savingsRange,
        investmentRange,
        addTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

ExpenseTrackerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
