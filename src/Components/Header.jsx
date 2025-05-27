import "../style/Header.css";
import Profile from "./profileupdated";
import { useEffect, useState } from "react";

export function Head() {
  return (
    <div className="Headd pt-1 pb-1">
      <h1 className="head p-0 m-0">
        BUDGET
        <img
          src="/icon/rupee.png"
          alt="logo"
          className="img-fluid header mb-2 ms-3 me-3   "
        />
        BUDDY
      </h1>
    </div>
  );
}

export function Intro() {
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setStoredName(JSON.parse(storedData).name);
    }
  }, []);

  return (
    <div className="nameDiv p-1">
      <h1 className="name">
        Welcome {storedName || "Buddy"}{" "}
        <i className="fa-solid fa-handshake"></i>
      </h1>
    </div>
  );
}

export function BalanceCard({ Expense, Income, Balance }) {
  return (
    <div className="balanceDiv">
      <ul className="balance list-unstyled">
        <li>
          <ul className="list-unstyled line lines">
            <li>
              Expense <i className="fa-solid fa-down-long"></i>
            </li>
            {Expense ? (
              <li className="text-danger fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {Expense}
              </li>
            ) : (
              <li className="text-danger fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </li>
            )}
          </ul>
        </li>
        <li>
          <ul className="list-unstyled line lines">
            <li>
              Income <i className="fa-solid fa-up-long"></i>
            </li>
            {Income ? (
              <li className="text-success fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {Income}
              </li>
            ) : (
              <li className="text-success fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </li>
            )}
          </ul>
        </li>
        <li>
          <ul className="list-unstyled lines">
            <li>Balance</li>
            {Balance ? (
              <li className="text-white fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i>
                {Balance}
              </li>
            ) : (
              <li className="text-white fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}


