import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import { Head } from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/EditProfile";
import Update from "./pages/Profile";
import AddExp from "./pages/AddExp";
import History from "./pages/History";
import ExpenseManager from "./pages/ListExp";
import NavBar from "./Components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const [isProfileComplete, setIsProfileComplete] = useState(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    return userData.name && userData.email && userData.budget;
  });

  const checkProfileCompletion = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const isComplete = userData.name && userData.email && userData.budget;
    setIsProfileComplete(isComplete);
  };

  useEffect(() => {
    window.addEventListener('storage', checkProfileCompletion);
    return () => {
      window.removeEventListener('storage', checkProfileCompletion);
    };
  }, []); 
  
  return (
    <AuthProvider>
      <Router>
        <div className="container-fluid p-0">
          <div className="row justify-content-center p-0">
            <div className="col-2 d-none d-md-block p-0"></div>

            <div className="col-12 col-md-8 text-center p-0">
              <div className="sticky-top ">
                <Head />
              </div>
              <div>
                <Routes>
                  <Route path="/edit-profile" element={<Detail onProfileComplete={checkProfileCompletion} />} />
                  {isProfileComplete ? (
                    <>
                      <Route path="/" element={<Home />} />
                      <Route path="/profile" element={<Update />} />
                      <Route path="/add" element={<AddExp />} />
                      <Route path="/history" element={<History />} />
                      <Route path="/tasks" element={<ExpenseManager />} />
                    </>
                  ) : (
                    <Route path="*" element={<Navigate to="/edit-profile" replace />} />
                  )}
                </Routes>
              </div>
              {isProfileComplete && (
                <div className="Footer">
                  <NavBar />
                </div>
              )}
            </div>

            <div className="col-2 d-none d-md-block p-0"></div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
