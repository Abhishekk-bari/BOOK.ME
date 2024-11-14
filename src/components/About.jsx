import React from 'react';
import me from '../assets/me.jpg'

const About = () => {
  return (
    <section className="bg-[#000000] pt-60 text-white py-16 px-8 md:px-24 lg:px-36 xl:px-48 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
      {/* Background Watermark Text
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-[10rem] lg:text-[12rem] font-bold text-gray-800 opacity-10 select-none tracking-wide">
          BEYOND TATTOO
        </h1>
      </div> */}
      
      {/* Left Side: Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-6xl font-bold tracking-tight">ABOUT</h2>
        <p className="text-lg text-gray-400 leading-relaxed">
        My name is Alex Thompson, and capturing moments is my passion. 
          Specializing in portrait and landscape photography, I strive to create 
          stunning visuals that tell a story and evoke emotion.
        </p>
        <p className="text-gray-400 leading-relaxed">
        With over a decade of experience, my work has been recognized through 
          various exhibitions and awards, reflecting my commitment to artistic excellence 
          and innovation in the field of photography.
        </p>
        <p className="text-gray-400 leading-relaxed">
        From the serene beaches of Goa to the bustling streets of Mumbai and the 
          breathtaking landscapes of the Western Ghats, I have traveled extensively, 
          capturing the beauty of our world through my lens. Join me on this visual journey 
          and discover the stories behind each photograph.
        </p>

        {/* Mentions */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm uppercase tracking-wider">Mentioned in</p>
          <div className="flex space-x-4 mt-2 text-lg">
            <span>TIME</span>
            <span>VOGUE</span>
            <span>GQ</span>
            <span>Forbes</span>
          </div>
        </div>
      </div>

      {/* Right Side: Image and Banner */}
      <div className="lg:w-1/2 relative pt-16">
        <img
          src={me} // Replace with actual image URL
          alt="Tattoo artist at work"
          className="w-full rounded-md shadow-lg"
        />
        {/* Banner */}
        <div className="absolute bottom-4 left-4 bg-lime-400 text-black font-bold text-xs px-4 py-1 rounded-full transform rotate-[-5deg]">
          ⭐ 12 YEARS OF CAPTURING BEAUTY
        </div>
      </div>
    </section>
  );
};

export default About;
