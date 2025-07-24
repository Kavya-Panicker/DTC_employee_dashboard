// src/components/Dashboard/Dashboard.js
import React from "react";
import "./Dashboard.css";
import { FaUserTie } from "react-icons/fa";
import { MdRoute } from "react-icons/md";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatCard = ({ icon, title, value }) => (
  <div className="custom-stat-card">
    <div className="icon">{icon}</div>
    <div className="card-content">
      <p className="card-title">{title}</p>
      <p className="card-value">{value}</p>
    </div>
  </div>
);

const cardData = [
  { title: "Total Buses", value: 120 },
  { title: "Registered Crews", value: 60 },
  { title: "Bus Performance", value: "92%" },
  { title: "Passenger Feedback", value: "87%" },
];

const pieData = [
  { name: "Buses", value: 120 },
  { name: "Drivers", value: 85 },
  { name: "Routes", value: 45 },
  { name: "Crews", value: 60 },
];

const COLORS = ["#8ecae6", "#219ebc", "#ffb703", "#fb8500"];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* Gradient Cards */}
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div key={index} className={`card grad${index + 1}`}>
            <h2>{card.title}</h2>
            <p>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Stat Cards */}
      <div className="custom-stat-grid stat-gap">
        <StatCard icon={<MdRoute size={30} color="#219ebc" />} title="Total Active Routes" value="85" />
        <StatCard icon={<FaUserTie size={30} color="#219ebc" />} title="Active Drivers" value="85" />
      </div>

      {/* Pie Chart */}
      <div className="chart-section">
        <h2 className="chart-title">Fleet Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
