import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import WorkGallery from './components/Work';
import Gear from './components/Gear';

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
     <Home />
     <About />
     <WorkGallery />
     <Gear />
    </div>
  )
}

export default App;
