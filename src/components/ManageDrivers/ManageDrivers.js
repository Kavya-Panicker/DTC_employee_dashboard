// src/components/ManageDrivers/ManageDrivers.js
import React, { useState } from "react";
import "./ManageDrivers.css";
import { FaUserTie } from "react-icons/fa"; // Same icon as sidebar

const ManageDrivers = () => {
  const [drivers, setDrivers] = useState([
    {
      name: "Ravi Kumar",
      license: "DL-04-2011-09876",
      phone: "9876543210",
      address: "New Delhi, India",
      busAssigned: "DL01AB1234",
    },
    {
      name: "Sanjay Sharma",
      license: "MH-12-2010-45678",
      phone: "9123456780",
      address: "Mumbai, India",
      busAssigned: "MH12CD5678",
    },
    {
      name: "Anita Verma",
      license: "KA-03-2013-76543",
      phone: "9988776655",
      address: "Bangalore, India",
      busAssigned: "KA03EF9876",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    license: "",
    phone: "",
    address: "",
    busAssigned: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddDriver = () => {
    const { name, license, phone, address, busAssigned } = formData;
    if (name && license && phone && address && busAssigned) {
      setDrivers([...drivers, formData]);
      setFormData({
        name: "",
        license: "",
        phone: "",
        address: "",
        busAssigned: "",
      });
      setShowForm(false);
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDeleteDriver = (index) => {
    const updated = [...drivers];
    updated.splice(index, 1);
    setDrivers(updated);
  };

  return (
    <div className="manage-drivers-container">
      <div className="header-section">
        <h2 className="title">
          <FaUserTie style={{ marginRight: "10px", color: "#000" }} />
          Manage Drivers
        </h2>
        <button className="add-driver-btn" onClick={() => setShowForm(true)}>
          + Add Driver
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal animate">
            <h3>🧍 Add New Driver</h3>
            <input
              type="text"
              name="name"
              placeholder="Driver Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="license"
              placeholder="License Number"
              value={formData.license}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="busAssigned"
              placeholder="Bus Assigned"
              value={formData.busAssigned}
              onChange={handleChange}
            />
            <div className="modal-buttons">
              <button onClick={handleAddDriver}>Save</button>
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
              <th>Name</th>
              <th>License</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Bus Assigned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index}>
                <td>{driver.name}</td>
                <td>{driver.license}</td>
                <td>{driver.phone}</td>
                <td>{driver.address}</td>
                <td>{driver.busAssigned}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteDriver(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDrivers;
