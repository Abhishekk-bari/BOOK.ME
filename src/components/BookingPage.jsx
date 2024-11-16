import React, { useState } from 'react';
import BookingCalendar from './Calendar';

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleDateSelect = (date) => setSelectedDate(date);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, date: selectedDate })
    });

    if (response.ok) {
      setThankYouMessage('Thank you for booking! We will confirm soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#000000] text-white">
      {/* Left Side: Text Content */}
      <div className="flex flex-col items-start justify-center lg:w-1/2 p-8 lg:p-16 space-y-4 text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">Book Your Session</h1>
        <p className="text-lg text-gray-300">
          Select your preferred date and time for the session, and fill out the form below.
          We look forward to capturing your special moments!
        </p>
      </div>

      {/* Right Side: Calendar and Form */}
      <div className="flex flex-col lg:w-1/2 p-8 lg:p-16 space-y-6">
        <BookingCalendar onDateSelect={handleDateSelect} />

        {selectedDate && !thankYouMessage && (
          <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-md">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Your Name" 
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
              required
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              placeholder="Your Email" 
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
              required
            />
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              placeholder="Your Message" 
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
              required
            ></textarea>
            <button type="submit" className="w-full bg-lime-400 text-black font-bold py-3 rounded hover:bg-lime-500 transition-all">
              Submit
            </button>
          </form>
        )}

        {thankYouMessage && <p className="text-green-400 mt-4 text-center">{thankYouMessage}</p>}
      </div>
    </div>
  );
}

export default BookingPage;