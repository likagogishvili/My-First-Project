import React, { useState } from "react";
import Expenses from "./components//Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Car insurance",
    amount: 294.67,
    date: new Date(2019, 4, 29),
  },
  {
    id: "el2",
    title: "pay bills",
    amount: 267.8,
    date: new Date(2020, 7, 14),
  },
  {
    id: "el3",
    title: "take out the trash",
    amount: 24.6,
    date: new Date(2021, 5, 23),
  },

  {
    id: "el4",
    title: "coock dinner",
    amount: 29.7,
    date: new Date(2021, 8, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
