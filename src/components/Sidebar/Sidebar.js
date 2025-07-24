// src/components/Sidebar/Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  FaBars,
  FaBus,
  FaRoute,
  FaUser,
  FaUserTie,
  FaUsers,
  FaTachometerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // default open for desktop
  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Manage Buses", icon: <FaBus />, path: "/manage-buses" },
    { name: "Manage Routes", icon: <FaRoute />, path: "/manage-routes" },
    { name: "Manage Drivers", icon: <FaUserTie />, path: "/manage-drivers" },
    { name: "Manage Conductors", icon: <FaUser />, path: "/manage-conductors" },
    { name: "Manage Passengers", icon: <FaUsers />, path: "/manage-passengers" },
  ];

  return (
    <div className="layout">
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <div className="top-bar">
          <FaBars className="hamburger" onClick={toggleSidebar} />
          {isOpen && <h1 className="logo">Employee Panel</h1>}
        </div>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                <span className="icon">{item.icon}</span>
                {isOpen && <span className="text">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
