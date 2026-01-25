import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden text-center px-5">
      <div className="absolute inset-0 bg-[url('/assets/stars.png')] opacity-40 animate-pulse"></div>
      
      <div className="z-10 flex flex-col items-center gap-6">
        <h1 className="text-9xl font-bold text-white tracking-widest relative">
          4
          <span className="text-purple-500 animate-pulse">0</span>
          4
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
          Lost in Space?
        </h2>
        
        <p className="text-neutral-400 text-lg max-w-lg mx-auto">
          The page you are looking for has drifted into a black hole or never existed. 
          Let's get you back to mission control.
        </p>

        <Link
          to="/"
          className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        >
          Return to Base
        </Link>
      </div>

      {/* Decorative Planet or Element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default NotFound;
