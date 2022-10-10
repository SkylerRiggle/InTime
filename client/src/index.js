import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** PAGE IMPORTS */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Company";
import Interview from "./pages/Interview";

/** GLOBAL CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** NAVIGATION BAR */}
    <NavBar />

    {/** PAGE CONTENT */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Dashboard />} />
        <Route path="/company" element={<Company />} />
        <Route path="/company/:id/:id" element={<Interview />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
