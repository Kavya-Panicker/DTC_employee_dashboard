// src/components/ManageBuses/ManageBuses.js
import React, { useState } from "react";
import { FaBus, FaPlus } from "react-icons/fa";
import "./ManageBuses.css";

const ManageBuses = () => {
  const [buses, setBuses] = useState([
    {
      id: "DL01AB1234",
      driver: "Ravi Sharma",
      route: "Route 5",
      status: "Active",
    },
    {
      id: "DL02CD5678",
      driver: "Neha Singh",
      route: "Route 7",
      status: "Inactive",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newBus, setNewBus] = useState({
    id: "",
    driver: "",
    route: "",
    status: "Active",
  });

  const handleInputChange = (e) => {
    setNewBus({ ...newBus, [e.target.name]: e.target.value });
  };

  const handleAddBus = () => {
    if (newBus.id && newBus.driver && newBus.route) {
      setBuses([...buses, newBus]);
      setNewBus({ id: "", driver: "", route: "", status: "Active" });
      setShowForm(false);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="manage-buses-container">
      <div className="header-section">
        <h2 className="title">
          <FaBus style={{ marginRight: "10px", color: "#0d0d0dff" }} />
          Manage Buses
        </h2>
        <button className="add-bus-btn" onClick={() => setShowForm(true)}>
          <FaPlus /> Add Bus
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal animate">
            <h3>Add New Bus</h3>
            <input
              type="text"
              name="id"
              placeholder="Bus Number"
              value={newBus.id}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="driver"
              placeholder="Driver Name"
              value={newBus.driver}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="route"
              placeholder="Route Assigned"
              value={newBus.route}
              onChange={handleInputChange}
            />
            <select
              name="status"
              value={newBus.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="modal-buttons">
              <button onClick={handleAddBus}>Save</button>
              <button className="cancel" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus, index) => (
              <tr key={index}>
                <td>{bus.id}</td>
                <td>
                  <div className="driver-info">
                    <div className="avatar">
                      {bus.driver.charAt(0)}
                    </div>
                    {bus.driver}
                  </div>
                </td>
                <td>{bus.route}</td>
                <td>
                  <span
                    className={
                      bus.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {bus.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBuses;
