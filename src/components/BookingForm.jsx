import React, { useState } from 'react';
import axios from 'axios';
import { DatePicker } from 'react-calendar'; // Install a calendar library like react-calendar
import 'react-calendar/dist/Calendar.css';

const BookingForm = () => {
  const [date, setDate] = useState(null);  // Store the selected date
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  
  // Handle the date change
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to send to the backend
    const bookingData = {
      name,
      email,
      message,
      date: date.toISOString(),  // Convert the date to ISO format
    };

    try {
      // Send a POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/bookings', bookingData);

      // Show the response message from the backend
      setResponseMessage(response.data);
    } catch (error) {
      // Handle errors (e.g., date already booked)
      setResponseMessage(error.response?.data || 'An error occurred');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book a Photoshoot</h2>
      
      {/* Calendar for date selection */}
      <DatePicker onChange={handleDateChange} value={date} />

      {/* Form for user details */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        
        <button type="submit">Book Now</button>
      </form>

      {/* Show response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default BookingForm;
