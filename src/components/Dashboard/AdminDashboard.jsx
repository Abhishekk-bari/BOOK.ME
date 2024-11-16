import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch('http://localhost:5000/api/bookings');
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Date:</strong> {new Date(booking.date).toLocaleString()}
            </p>
            <p>
              <strong>Message:</strong> {booking.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
