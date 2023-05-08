import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import instalNode from '../assets/portfolio/installNode.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
// import reactWeather from '../assets/portfolio/reactWeather.jpg';
import travel from '../assets/portfolio/travel.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: travel,
      demo: 'https://travel-seven-eosin.vercel.app/',
      
    },
    {
      id: 2,
      src: reactParallax,
      demo: 'https://example.com/demo3',
      
    },
    {
      id: 3,
      src: arrayDestruct,
      demo: 'https://example.com/demo3',
      
    },
    {
      id: 4,
      src: reactSmooth,
      demo: 'https://example.com/demo4',
      
    },
    // {
    //   id: 5,
    //   src: reactWeather,
    //   demo: 'https://example.com/demo5',
      
    // },
    {
      id: 6,
      src: instalNode,
      demo: 'https://example.com/demo6',
      
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bond inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">I am working on some of project that are not done yet but here my one of project is traveling Check out </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              </a>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Demo</button>
                </a>
                {/* <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
