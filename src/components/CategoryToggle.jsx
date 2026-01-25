import React from 'react';

const CategoryToggle = ({ category, setCategory }) => {
  return (
    <div id="work" className="flex flex-col items-center mt-16 mb-12 w-full px-4">
      <div className="text-center mb-8 max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Bridging the gap between <span className="text-cyan-400">Data</span> and <span className="text-purple-400">Design</span>
        </h3>
        <p className="text-neutral-400 text-base md:text-lg">
          I specialize in two distinct yet complementary fields: 
          delivering <span className="text-cyan-400/80 font-medium">technical data-driven insights</span> and 
          creating <span className="text-purple-400/80 font-medium">compelling creative visual narratives</span>.
        </p>
      </div>

      <div className="relative flex p-2 bg-black/40 rounded-full border border-white/10 backdrop-blur-md shadow-2xl max-w-full overflow-hidden">
        
        <button
          onClick={() => setCategory('technical')}
          className={`relative z-10 px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-500 ease-out flex items-center justify-center gap-2 whitespace-nowrap ${
            category === 'technical'
              ? 'bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-[0_0_30px_rgba(6,182,212,0.6)] scale-105'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
           Data Science
        </button>
        
        <button
          onClick={() => setCategory('creative')}
          className={`relative z-10 px-8 py-3 md:px-12 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-500 ease-out flex items-center justify-center gap-2 whitespace-nowrap ${
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