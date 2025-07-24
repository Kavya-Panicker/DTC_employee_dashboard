// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageBuses from "./components/ManageBuses/ManageBuses";
import ManageRoutes from "./components/ManageRoutes/ManageRoutes";
import ManageDrivers from "./components/ManageDrivers/ManageDrivers";
import ManageConductors from "./components/ManageConductors/ManageConductors";
import ManagePassengers from "./components/ManagePassengers/ManagePassengers";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-buses" element={<ManageBuses />} />
            <Route path="/manage-routes" element={<ManageRoutes />} />
            <Route path="/manage-drivers" element={<ManageDrivers />} />
            <Route path="/manage-conductors" element={<ManageConductors />} />
            <Route path="/manage-passengers" element={<ManagePassengers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
