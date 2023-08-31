'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const cardsData = [
  { id: 1, title: 'Web Development', imageUrl: '/imgs/web.avif', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium odio iusto incidunt non quaerat! Ame ' },
  { id: 2, title: 'Graphic Designing', imageUrl: '/imgs/graphic.avif', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium odio iusto incidunt non quaera' },
  { id: 3, title: 'Digital Marketing', imageUrl: '/imgs/digital.avif', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium odio iusto incidunt non quaeram.' },
  { id: 4, title: 'Artificial Imtelligence', imageUrl: '/imgs/a.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium odio iusto incidunt non quaeratp.' },
  { id: 5, title: 'Machine learning', imageUrl: '/imgs/machine.jpeg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium odio iusto incidunt non quaeratp.' }// Add more cards here
];

const HomePage = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, cardsData.length - 3));
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 md:px-8 ">
      <div className="mt-4 flex justify-end">
        <button
          className="active:bg-blue-500 text-white text-2xl bg-[#E0E0E0] px-4 py-2 hover:bg-blue-500 rounded-full mx-5 relative -left-44 lg:relative lg:-top-16 lg:-left-20 md:relative md:-top-16 md:left-6"
          onClick={handlePrevClick}
          disabled={startIndex === 0} 
        >
          &lt;
        </button>
        <button
          className="active:bg-blue-500 text-white text-2xl bg-[#E0E0E0] px-4 py-2 hover:bg-blue-500 rounded-full mx-5  md:relative md:-top-16"
          onClick={handleNextClick}
          disabled={startIndex >= cardsData.length - 3}
        >
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap overflow-x-hidden ">
        {cardsData.slice(startIndex, startIndex + 3).map((card) => (
          <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 p-4 ">
            <div className="border border-gray-300 rounded shadow-md bg-[#CFEAFF] p-10 hover:bg-white">
              <Image src={card.imageUrl} alt={card.title} width={20} height={20} className="w-20 h-20 rounded-full  mx-auto object-cover mb-2" />
              <h2 className="text-lg font-semibold text-center">{card.title}</h2>
              <p className="mt-2 text-center">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HomePage;
