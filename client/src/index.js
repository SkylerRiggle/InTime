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

const PageWrapper = ({ child }) => {
  return (<div style={{marginLeft:'8vw', marginRight:'8vw'}}> {child} </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** NAVIGATION BAR */}
    <NavBar />

    {/** PAGE CONTENT */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageWrapper child={<Login />} />} />
        <Route path="/:id" element={<PageWrapper child={<Dashboard />} />} />
        <Route path="/company/:id" element={<PageWrapper child={<Company />} />} />
        <Route path="/company/:id/:id" element={<PageWrapper child={<Interview />} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
