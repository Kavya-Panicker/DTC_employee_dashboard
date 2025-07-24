// src/components/ManagePassengers/ManagePassengers.js
import React, { useState } from "react";
import "./ManagePassengers.css";
import { FaUsers } from "react-icons/fa"; // 👈 Sidebar icon import

const dummyPassengers = [
  {
    id: "P001",
    name: "Kavya Sharma",
    email: "kavya@example.com",
    phone: "9876543210",
    reviews: [
      { rating: 5, comment: "Excellent service!" },
      { rating: 4, comment: "Very good, comfortable journey." },
    ],
  },
  {
    id: "P002",
    name: "Arya Iyer",
    email: "arya@example.com",
    phone: "9876501234",
    reviews: [
      { rating: 3, comment: "Average. Could improve punctuality." },
      { rating: 2, comment: "Bus was not clean." },
    ],
  },
  {
    id: "P003",
    name: "Meera Nair",
    email: "meera@example.com",
    phone: "9876598765",
    reviews: [
      { rating: 5, comment: "Loved the experience!" },
      { rating: 5, comment: "Will travel again!" },
    ],
  },
];

const ManagePassengers = () => {
  const [passengers, setPassengers] = useState(dummyPassengers);
  const [search, setSearch] = useState("");

  const filtered = passengers.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())
  );

  const renderStars = (count) => "⭐".repeat(count);

  return (
    <div className="manage-passengers">
      <div className="header">
        <h2>
          <FaUsers className="icon" style={{ marginRight: "10px", verticalAlign: "middle" }} />
          Manage Passengers Reviews
        </h2>
        <button className="add-btn">+ Add Passenger</button>
      </div>

      <input
        type="text"
        className="search-box"
        placeholder="Search by name, email, or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="passenger-grid">
        {filtered.map((passenger) => (
          <div key={passenger.id} className="passenger-card">
            <h3>{passenger.name}</h3>
            <p><strong>Email:</strong> {passenger.email}</p>
            <p><strong>Phone:</strong> {passenger.phone}</p>
            <p><strong>ID:</strong> {passenger.id}</p>

            <div className="reviews-section">
              <h4>Reviews:</h4>
              {passenger.reviews.length === 0 ? (
                <p className="no-reviews">No reviews available.</p>
              ) : (
                passenger.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <div className="stars">{renderStars(review.rating)}</div>
                    <p className="comment">"{review.comment}"</p>
                  </div>
                ))
              )}
            </div>

            <div className="card-actions">
              <button className="view">View</button>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePassengers;
