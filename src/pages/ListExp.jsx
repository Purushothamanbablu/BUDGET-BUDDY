import { useEffect, useState } from "react";
import "../style/History.css";

function ExpenseManager() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <div className="back1">
      <h2 className="HHead">Expense Manager</h2>
      {expenses.length > 0 ? (
        <div className="table-responsive-scroll tabe">
          <table className="tab table" >
            <thead>
              <tr>
                <th>NUMBER</th>
                <th>DATE</th>
                <th>TYPE</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
                <th>ACTIONS</th>
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
                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger dust"
                    >
                      <i className="fa-solid fa-trash bin"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No expense records found.</p>
      )}
    </div>
  );
}

export default ExpenseManager;