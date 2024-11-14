import React from 'react';

const Gear = () => {
    return (
        <div className="flex justify-between pl-20 py-20 bg-[#f5f3ed]">
          <div className="max-w-5xl grid grid-cols-2 gap-x-80">
            
            {/* Experience Section */}
            <div>
              <h2 className="text-6xl font-bold mb-14">Experience</h2>
              <div className="space-y-6">
                <div className="flex  gap-15 justify-between border-b border-gray-400 py-2">
                  <span className='text-xl'>Creative Director, Apple Visuals</span>
                  <span className="font-light">2018</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Senior Photographer, Google Projects</span>
                  <span className="font-light">2020</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Visual Strategy Manager, Samsung</span>
                  <span className="font-light">2021</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Freelance Photographer</span>
                  <span className="font-light">Present</span>
                </div>
              </div>
            </div>
    
            {/* My Gear Section */}
            <div>
              <h2 className="text-6xl font-bold mb-14">My Gear</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Camera</span>
                  <span className="font-light">Canon EOS 5D Mark IV</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Lens</span>
                  <span className="font-light">Canon EF 24-70mm f/2.8L II USM</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Tripod</span>
                  <span className="font-light">Manfrotto BeFree Aluminum</span>
                </div>
                <div className="flex justify-between border-b border-gray-400 py-2">
                  <span>Editing Software</span>
                  <span className="font-light">Adobe Lightroom, Photoshop</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      );
    };

export default Gear;
