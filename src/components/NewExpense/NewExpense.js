import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormVisible(false);
  };

  const displayForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  // if (!isFormVisible) {
  //   return (
  //     <button onClick={displayForm} onCancel={hideForm}>
  //       Add New Expense
  //     </button>
  //   );
  // }

  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={displayForm}>Add New Expense</button>}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
