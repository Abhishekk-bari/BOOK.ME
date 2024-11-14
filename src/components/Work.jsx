import React from 'react';
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import work5 from '../assets/work5.jpg'
import work6 from '../assets/work6.jpg'

const WorkGallery = () => {
  return (
    <div className="py-12">
      <h2 className="text-white text-8xl font-bold mb-10 pb-20 pt-10 pl-5">SELECTED WORK</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="aspect-w-1 aspect-h-1">
          <img src={work1} alt="Work 1" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={work2} alt="Work 2" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={work3} alt="Work 3" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={work4} alt="Work 4" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={work5} alt="Work 5" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={work6} alt="Work 6" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WorkGallery;
