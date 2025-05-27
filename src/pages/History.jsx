import { useEffect, useState } from "react";
import "../style/History.css";

function History() {
  const [expenses, setExpenses] = useState([]);
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [mainBudget, setMainBudget] = useState(0);

  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("userData")) || {};
    const budgetAmount = parseInt(profileData.budget) || 0;
    setMainBudget(budgetAmount);

    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);

    const totalExpenseCalc = storedExpenses
      .filter((item) => item.type === "Expense")
      .reduce((sum, item) => sum + parseInt(item.amount), 0);
    setTotalExpense(totalExpenseCalc);

    const totalIncomeCalc = storedExpenses
      .filter((item) => item.type === "Income")
      .reduce((sum, item) => sum + parseInt(item.amount), 0);
    setTotalIncome(totalIncomeCalc);

    setRemainingAmount(budgetAmount - totalExpenseCalc + totalIncomeCalc);
  }, []);

  return (
    <div className="back">
      <h2 className="HHead">Expense History</h2>
      {expenses.length > 0 ? (
        <div className="table-responsive-scroll tabe">
          <table className="tab">
            <thead>
              <tr>
                <th>NUMBER</th>
                <th>DATE</th>
                <th>TYPE</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
                <th>SYMBOL</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{expense.date}</td>
                  <td>{expense.type}</td>
                  <td>{expense.category}</td>
                  <td>₹{expense.amount}</td>
                  <td style={{ color: expense.type === "Expense" ? "red" : "green" }}>
                    {expense.type === "Expense" ? <i className="fa-solid fa-arrow-down"></i> : <i className="fa-solid fa-arrow-up"></i>}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4"></td>
                <td><strong>Total Expenses</strong></td>
                <td><strong>₹{totalExpense}</strong></td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td><strong>Total Income</strong></td>
                <td><strong>₹{totalIncome}</strong></td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td><strong>Main Budget</strong></td>
                <td><strong>₹{mainBudget}</strong></td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td><strong>Remaining Amount</strong></td>
                <td style={{ color: remainingAmount >= 0 ? "green" : "red" }}>
                  <strong>₹{remainingAmount}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p>No expense records found.</p>
      )}
    </div>
  );
}

export default History;