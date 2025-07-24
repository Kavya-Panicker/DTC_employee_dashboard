// src/components/Routes/ManageRoutes.js
import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaRoute } from "react-icons/fa";
import "./ManageRoutes.css";

const ManageRoutes = () => {
  const [routes, setRoutes] = useState([
    {
      id: "R001",
      source: "Delhi",
      destination: "Agra",
      distance: "230 km",
      assignedDriver: "John Doe",
    },
    {
      id: "R002",
      source: "Mumbai",
      destination: "Pune",
      distance: "150 km",
      assignedDriver: "Jane Smith",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingRoute, setEditingRoute] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    source: "",
    destination: "",
    distance: "",
    assignedDriver: "",
  });

  const openForm = (route = null) => {
    if (route) {
      setFormData(route);
      setEditingRoute(route.id);
    } else {
      setFormData({
        id: "",
        source: "",
        destination: "",
        distance: "",
        assignedDriver: "",
      });
      setEditingRoute(null);
    }
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    if (!formData.id || !formData.source || !formData.destination) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingRoute) {
      const updated = routes.map((route) =>
        route.id === editingRoute ? formData : route
      );
      setRoutes(updated);
    } else {
      setRoutes([...routes, formData]);
    }

    setShowForm(false);
    setFormData({
      id: "",
      source: "",
      destination: "",
      distance: "",
      assignedDriver: "",
    });
    setEditingRoute(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this route?")) {
      setRoutes(routes.filter((route) => route.id !== id));
    }
  };

  return (
    <div className="manage-routes">
      <div className="routes-header">
        <h2 className="section-title"><FaRoute style={{ marginRight: "8px" }} /> Manage Routes</h2>
        <button className="add-route-btn" onClick={() => openForm()}>
          <FaPlus /> Add Route
        </button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Route ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Distance</th>
            <th>Assigned Driver</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route, index) => (
            <tr key={index}>
              <td>{route.id}</td>
              <td>{route.source}</td>
              <td>{route.destination}</td>
              <td>
                <span className="badge">{route.distance}</span>
              </td>
              <td>{route.assignedDriver}</td>
              <td>
                <button className="action-btn edit" onClick={() => openForm(route)}>
                  <FaEdit />
                </button>
                <button className="action-btn delete" onClick={() => handleDelete(route.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editingRoute ? "Edit Route" : "Add New Route"}</h3>
            <input
              type="text"
              name="id"
              placeholder="Route ID"
              value={formData.id}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="source"
              placeholder="Source"
              value={formData.source}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="distance"
              placeholder="Distance (e.g. 230 km)"
              value={formData.distance}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="assignedDriver"
              placeholder="Assigned Driver"
              value={formData.assignedDriver}
              onChange={handleFormChange}
            />
            <div className="modal-buttons">
              <button onClick={handleFormSubmit}>
                {editingRoute ? "Update" : "Add"}
              </button>
              <button className="cancel" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRoutes;
