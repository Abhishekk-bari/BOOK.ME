import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex rounded-3xl items-center justify-between py-4 px-6 bg-black shadow-md">
      {/* Profile Picture */}
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"  // Replace with actual image URL
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {/* Status Text */}
      <div className="text-gray-100 text-sm gap-10 flex items-center space-x-1">
        <span className="bg-gray-300 w-2 h-2 rounded-full inline-block"></span>
        <span>Bookings open</span>

        {/* Link to Booking Page */}
        <Link to="/book" className="bg-lime-400 text-black font-bold px-4 py-2 rounded-full hover:bg-lime-500">
          BOOK
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
