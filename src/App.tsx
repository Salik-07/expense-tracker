import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm, { ExpenseFormData } from "./components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const addExpense = (expense: ExpenseFormData) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  return (
    <div className="container my-3">
      <div className="mb-5">
        <ExpenseForm onSubmit={addExpense} />
      </div>
      <div className="mb-4">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
