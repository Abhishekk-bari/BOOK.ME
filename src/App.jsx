import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkGallery from './components/Work';
import BookingPage from './components/BookingPage'; // Import the new booking page
import AdminDashboard from './components/Dashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="w-full h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <WorkGallery />
            </>
          } />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
