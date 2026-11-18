import React from 'react';

const CategoryToggle = ({ category, setCategory }) => {
  return (
    <div id="work" className="flex flex-col items-center mt-20 mb-10 w-full scroll-mt-24 px-4 md:mt-30">
      <div className="text-center mb-8 max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Data Science & Creative Work
        </h3>
        <p className="text-neutral-400 text-base md:text-lg">
          Explore my research and data projects, or switch to video and creative production.
        </p>
      </div>

      <div className="relative flex w-full max-w-md p-2 bg-black/40 rounded-full border border-white/10 backdrop-blur-md shadow-2xl" role="group" aria-label="Choose project category">
        
        <button
          onClick={() => setCategory('technical')}
          aria-pressed={category === 'technical'}
          className={`relative z-10 flex-1 min-w-0 px-3 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-500 ease-out flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua ${
            category === 'technical'
              ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-105'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
           Data Science
        </button>
        
        <button
          onClick={() => setCategory('creative')}
          aria-pressed={category === 'creative'}
          className={`relative z-10 flex-1 min-w-0 px-3 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-500 ease-out flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua ${
            category === 'creative'
              ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] scale-105'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
           Creative
        </button>
      </div>
    </div>
  );
};

export default CategoryToggle;
