import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2020",
    desc: "We know how large objects will act, but things on a small scale.",
    price: "$16.48",
    img: "/img/feature/featuerepic1.png",
  },
  {
    id: 2,
    title: "Vita Classic Product",
    subtitle: "WINTER 2020",
    desc: "We know how large objects will act, but things on a small scale.",
    price: "$16.48",
    img: "/img/feature/featuerepic1.png",
  },
];

export default function FeatureBanner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full min-h-162.5 bg-[#2e8b6c] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-0 md:h-162.5 flex flex-col md:flex-row items-center justify-between">

        <div className="text-white text-center md:text-left md:w-1/2">

          <p className="text-sm tracking-widest mb-4">
            {slides[current].subtitle}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-sm md:text-base mb-6 max-w-md mx-auto md:mx-0">
            {slides[current].desc}
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-center md:justify-start">

            <span className="text-lg font-semibold">
              {slides[current].price}
            </span>

            <button className="bg-green-500 px-6 py-3 font-semibold rounded">
              ADD TO CART
            </button>

          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end items-end h-full">
          <img
            src={slides[current].img}
            alt="product"
            className="h-75 md:h-130 object-contain"
          />
        </div>

      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white text-2xl hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white text-2xl hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded cursor-pointer transition-all duration-300 ${
              index === current
                ? "w-10 bg-white"
                : "w-5 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}