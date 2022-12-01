import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

/** PAGE IMPORTS */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Company from "./pages/Company";
import Interview from "./pages/Interview";

/** GLOBAL CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

const PageWrapper = ({ child, gutter }) => {
  return (<div
    className="mt-5 pb-5"
    style={{ marginLeft: gutter, marginRight: gutter, overflowX: 'hidden', maxWidth: '100vw' }}>
    {child}
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/** PAGE CONTENT */}
    <Router>
      {/** NAVIGATION BAR */}
      <NavBar />
      <Routes>
        <Route path="/" element={<PageWrapper child={<Home />} />} />
        <Route path="/login" element={<PageWrapper child={<Login />} gutter='8vw' />} />
        <Route path="/:id" element={<PageWrapper child={<Dashboard />} gutter='8vw' />} />
        <Route path="/company/:id" element={<PageWrapper child={<Company />} gutter='8vw' />} />
        <Route path="/company/:id/:id" element={<PageWrapper child={<Interview />} gutter='8vw' />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
