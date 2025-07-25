// src/components/ManageRoutes/ManageRoutes.js
import React, { useState } from "react";
import { FaMapMarkedAlt, FaPlus } from "react-icons/fa";
import "./ManageRoutes.css";

const ManageRoutes = () => {
  const [routes, setRoutes] = useState([
    { id: 1, start: "Rohini", end: "Connaught Place", distance: "18 km" },
    { id: 2, start: "Saket", end: "Dwarka", distance: "25 km" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newRoute, setNewRoute] = useState({ start: "", end: "", distance: "" });

  const handleInputChange = (e) => {
    setNewRoute({ ...newRoute, [e.target.name]: e.target.value });
  };

  const handleAddRoute = () => {
    const { start, end, distance } = newRoute;
    if (start && end && distance) {
      const newId = routes.length + 1;
      setRoutes([...routes, { ...newRoute, id: newId }]);
      setNewRoute({ start: "", end: "", distance: "" });
      setShowForm(false);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="manage-routes-container">
      <div className="header-section">
        <h2 className="title">
          <FaMapMarkedAlt style={{ marginRight: "10px", color: "#0d0d0dff" }} />
          Manage Routes
        </h2>
        <button className="add-route-btn" onClick={() => setShowForm(true)}>
          <FaPlus /> Add Route
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal animate">
            <h3>Add New Route</h3>
            <input
              type="text"
              name="start"
              placeholder="Starting Point"
              value={newRoute.start}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="end"
              placeholder="Ending Point"
              value={newRoute.end}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="distance"
              placeholder="Distance (e.g., 20 km)"
              value={newRoute.distance}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button onClick={handleAddRoute}>Save</button>
              <button className="cancel" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start</th>
              <th>End</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id}>
                <td>{route.id}</td>
                <td>{route.start}</td>
                <td>{route.end}</td>
                <td>{route.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRoutes;
