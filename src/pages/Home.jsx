import { Intro } from "../Components/Header";
import { BalanceCard } from "../Components/Header";
import { useEffect, useState } from "react";
import SingleSummaryBarChart from "../Components/SingleSummaryBarChart";
import "../style/Header.css"; 
function Home() {
  const [totals, setTotals] = useState({
    expense: 0,
    income: 0,
    balance: 0
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const budget = parseInt(userData.budget) || 0;
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const totalExpense = expenses
      .filter(item => item.type === "Expense")
      .reduce((sum, item) => sum + parseInt(item.amount), 0);

    const totalIncome = expenses
      .filter(item => item.type === "Income")
      .reduce((sum, item) => sum + parseInt(item.amount), 0);

    const balance = budget - totalExpense + totalIncome;

    setTotals({
      expense: totalExpense,
      income: totalIncome,
      balance: balance
    });
  }, []);

  return (
    <div className="home-container pb-0 back3">
      <Intro />
      <BalanceCard 
        Expense={totals.expense}
        Income={totals.income}
        Balance={totals.balance}
      />
      <div className="centered-chart-container mt-5 chartt">
        <SingleSummaryBarChart 
          expense={totals.expense} 
          income={totals.income} 
          balance={totals.balance}
        />
      </div>
    </div>
  );
}

export default Home;
