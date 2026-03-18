import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "SUMMER 2020",
    desc: "We know how large objects will act, but things on a small scale.",
    img: "/img/banner/banner-bg.png",
  },
  {
    id: 2,
    title: "FASHION SALE",
    subtitle: "WINTER 2026",
    desc: "Discover the latest trends with amazing offers.",
    img: "/img/banner/banner-bg.png",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      className="relative w-full min-h-screen md:h-150 flex items-center justify-center transition-all duration-700 ease-in-out overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-top md:bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[current].img})`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center md:items-start md:text-left text-white w-full">
        
        <p className="text-sm md:text-base font-bold tracking-[0.2em] mb-4 uppercase">
          {slides[current].subtitle}
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] max-w-lg">
          {slides[current].title}
        </h1>

        <p className="mb-10 max-w-70 sm:max-w-md text-base md:text-lg text-gray-100">
          {slides[current].desc}
        </p>

        <button className="bg-green-500 hover:bg-green-600 transition-colors px-10 py-4 font-bold rounded text-sm md:text-base">
          SHOP NOW
        </button>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white text-2xl z-20 transition-all"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white text-2xl z-20 transition-all"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              current === index ? "w-10 bg-white" : "w-5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}