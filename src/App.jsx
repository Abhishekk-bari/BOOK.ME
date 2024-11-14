import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import WorkGallery from './components/Work';
import Gear from './components/Gear';
import BookingPage from './components/BookingPage'; // Import the new booking page

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
              {/* <Gear /> */}
            </>
          } />
          <Route path="/book" element={<BookingPage />} /> {/* Route for Booking Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
