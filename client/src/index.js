import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** PAGE IMPORTS */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Company from "./pages/Company";
import Interview from "./pages/Interview";

/** GLOBAL CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** NAVIGATION BAR */}
    <NavBar/>

    {/** PAGE CONTENT */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Dashboard />} />
        <Route path="/company/:id" element={<Company />} />
        <Route path="/company/:id/:id" element={<Interview />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
