// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  /* JSX format would be the following (you would need to import react from react)
    return React.createElement(
      'div',
      {},
      React.createElemnt('h2', {}, "Let's get this started!"),
      React.createElement(Expenses, { items: expenses})
    );
  */

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* alternate form is
      <ExpenseItem
      expense={expenses[0]}
      ></ExpenseItem> */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

//alternate form
/* import React from 'react';
import ExerciseComponent from "./ExerciseComponent";

// don't change the Component name "App"
export default function App() {
    return <ExerciseComponent />
}
 */
