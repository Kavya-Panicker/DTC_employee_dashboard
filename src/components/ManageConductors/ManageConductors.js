import React, { useState } from "react";
import "./ManageConductors.css";
import { FaUserTie } from "react-icons/fa";

const ManageConductors = () => {
  const [conductors, setConductors] = useState([
    {
      name: "Aarav Nair",
      employeeId: "EMP001",
      phone: "9876543210",
      experience: "3",
    },
    {
      name: "Meera Sharma",
      employeeId: "EMP002",
      phone: "9123456780",
      experience: "5",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newConductor, setNewConductor] = useState({
    name: "",
    employeeId: "",
    phone: "",
    experience: "",
  });

  const handleInputChange = (e) => {
    setNewConductor({ ...newConductor, [e.target.name]: e.target.value });
  };

  const handleAddConductor = () => {
    setConductors([...conductors, newConductor]);
    setNewConductor({ name: "", employeeId: "", phone: "", experience: "" });
    setShowForm(false);
  };

  return (
    <div className="manage-conductors-page">
      <div className="manage-conductors-container">
        <div className="manage-conductors-header">
          <h2>
            <FaUserTie style={{ marginRight: "8px", color: "#000000ff" }} />
            Manage Conductors
          </h2>
          <button className="add-btn" onClick={() => setShowForm(true)}>
            + Add Conductor
          </button>
        </div>

        {showForm && (
          <div className="form-container">
            <h3>Add New Conductor</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newConductor.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              value={newConductor.employeeId}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={newConductor.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              value={newConductor.experience}
              onChange={handleInputChange}
            />
            <button className="submit-btn" onClick={handleAddConductor}>
              Save
            </button>
          </div>
        )}

        <div className="conductors-list">
          {conductors.length === 0 ? (
            <p>No conductors added yet.</p>
          ) : (
            conductors.map((c, idx) => (
              <div className="conductor-card" key={idx}>
                <h4>{c.name}</h4>
                <p>ID: {c.employeeId}</p>
                <p>Phone: {c.phone}</p>
                <p>Experience: {c.experience} yrs</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageConductors;
