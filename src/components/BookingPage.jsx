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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">Book Your Session</h1>
      <BookingCalendar onDateSelect={handleDateSelect} />

      {selectedDate && !thankYouMessage && (
        <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md mt-6">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            placeholder="Your Name" 
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            required
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            placeholder="Your Email" 
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            required
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            placeholder="Your Message" 
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            required
          ></textarea>
          <button type="submit" className="w-full bg-lime-400 text-black font-bold py-2 rounded hover:bg-lime-500">
            Submit
          </button>
        </form>
      )}
      
      {thankYouMessage && <p className="text-green-400 mt-4">{thankYouMessage}</p>}
    </div>
  );
}

export default BookingPage;
