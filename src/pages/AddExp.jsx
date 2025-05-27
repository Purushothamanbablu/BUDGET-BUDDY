import { useState } from "react";
import "../style/AddExp.css";

function AddExpense() {
  const [expenseType, setExpenseType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    let value = e.target.value.replace(/^0+/, "");

    if (value.length > 5) return;
    setAmount(value);
  };

  const handleSubmit = () => {
    if (!expenseType || !category || !amount) {
      alert("Please fill all fields!");
      return;
    }
    const newExpense = {
      date: new Date().toLocaleDateString(),
      type: expenseType,
      category,
      amount,
    };
    const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    localStorage.setItem(
      "expenses",
      JSON.stringify([...existingExpenses, newExpense])
    );
    alert("Added successfully!");
    setExpenseType("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="back5">
      <h1 className="Hexp">ADD EXPENSE</h1>

      <input type="date" className="sel" />

      <select
        value={expenseType}
        onChange={(e) => setExpenseType(e.target.value)}
        className="sel"
      >
        <option value="" disabled>
          Select type
        </option>
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>

      {expenseType === "Expense" ? (
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="sel hide"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Rent">Rent</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="EMI">EMI</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Groceries">Groceries</option>
          <option value="Investments">Investments</option>
          <option value="Emergency Fund Contributions">Emergency Fund Contributions</option>
          <option value="Debt Repayments">Debt Repayments</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Pet Expenses">Pet Expenses</option>
          <option value="Loan Payments">Loan Payments</option>
          <option value="Others">Others</option>
        </select>
      ) : expenseType === "Income" ? (
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="sel hide"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Salary">Salary</option>
          <option value="Lottery">Lottery</option>
          <option value="Received Money">Received Money</option>
          <option value="Interest">Interest</option>
          <option value="Gifts">Gifts</option>
          <option value="Selling Used Goods">Selling Used Goods</option>
          <option value="Bonuses & Incentives">Bonuses & Incentives</option>
          <option value="Cashback Rewards">Cashback Rewards</option>
          <option value="Others">Others</option>
          
        </select>
      ) : null}

      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
        required
        className="sel"
      />

      <button onClick={handleSubmit} className="btn btn-primary submit ">
        Add Expense
      </button>
    </div>
  );
}

export default AddExpense;
