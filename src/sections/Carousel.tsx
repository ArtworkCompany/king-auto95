import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import React from "react";
import data from "../data/sections.json" with { type: "json" };

function BeforeAfterCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const { slides } = data.carousel;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden border-2 rounded-2xl border-gold/30 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur">
        <div className="p-8">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gold">
              {slides[currentSlide].title}
            </h3>
            <p className="text-gray-300">{slides[currentSlide].description}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <div className="absolute z-10 px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-full top-4 left-4">
                  {data.carousel.before}
                </div>
                <img
                  src={slides[currentSlide].before}
                  alt={data.carousel.beforeClear}
                  className="w-full h-[700px] object-cover rounded-xl border border-red-500/30"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-gold/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <div className="absolute z-10 px-3 py-1 text-sm font-semibold text-black rounded-full top-4 left-4 bg-gold">
                  {data.carousel.after}
                </div>
                <img
                  src={slides[currentSlide].after}
                  alt={data.carousel.afterClear}
                  className="w-full h-[700px] object-cover rounded-xl border border-gold/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute p-3 transition-all duration-300 -translate-y-1/2 border-2 rounded-full left-4 top-1/2 bg-black/80 border-gold text-gold hover:bg-gold hover:text-black backdrop-blur"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute p-3 transition-all duration-300 -translate-y-1/2 border-2 rounded-full right-4 top-1/2 bg-black/80 border-gold text-gold hover:bg-gold hover:text-black backdrop-blur"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold scale-125"
                : "bg-gold/30 hover:bg-gold/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const Carousel = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4 space-x-2">
            <div className="w-12 h-1 bg-gold"></div>
            <Crown className="w-8 h-8 text-gold" />
            <div className="w-12 h-1 bg-gold"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gold via-gold to-gold bg-clip-text">
            {data.carousel.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            {data.carousel.description}
          </p>
        </div>
        <BeforeAfterCarousel />
      </div>
    </section>
  );
};

export default Carousel;
