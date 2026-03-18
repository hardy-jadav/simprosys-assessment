import React from "react";

const PromoSection = () => {
  return (
    <section className="bg-[#f3f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0 md:h-162.5 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-87.5 md:h-full">
          <img
            src="/img/feature/featuerepic2.png"
            alt="couple"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 px-6 py-12 md:py-0 flex flex-col justify-center text-center md:text-left">
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            SUMMER 2020
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Part of the Neural <br className="hidden md:block" />
            Universe
          </h1>

          <p className="text-gray-500 mb-8 max-w-md mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center sm:items-start">
            <button className="w-fit bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded font-bold transition-all active:scale-95 shadow-md">
              BUY NOW
            </button>

            <button className="w-fit border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-10 py-3 rounded font-bold transition-all active:scale-95">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
