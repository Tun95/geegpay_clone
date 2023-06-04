import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/main screens/dashboard/Dashboard";
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TermScreen from "./screens/main screens/company/TermScreen";
import PrivacyScreen from "./screens/main screens/company/PrivacyScreen";
import HomeScreen from "./screens/main screens/home/HomeScreen";
import LoginScreen from "./screens/main screens/forms/LoginScreen";
import Transaction from "./screens/main screens/transaction/Transaction";
import Invoices from "./screens/main screens/Invoices/Invoices";
import Cards from "./screens/main screens/cards/Cards";
import Wallets from "./screens/main screens/wallets/Wallets";
import { RegisterScreen } from "./screens/main screens/forms/RegisterScreen";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/transactions" element={<Transaction />}></Route>
          <Route path="/invoices" element={<Invoices />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/wallets" element={<Wallets />}></Route>
          <Route path="/terms-of-service" element={<TermScreen />}></Route>
          <Route path="/privacy-policy" element={<PrivacyScreen />}></Route>

          {/* VALIDATION */}
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>

          {/* VALIDATION */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
