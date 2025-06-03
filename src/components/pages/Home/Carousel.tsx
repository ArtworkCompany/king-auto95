import { Crown } from "lucide-react";
import React, { useEffect, useState } from "react";
import home from "../../../data/home.json" with { type: "json" };
import { cn } from "../../../lib/utils";

function BeforeAfterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { slides } = home.carousel;

  const carouselRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide(false); // auto slide, pas de reset
    }, 3500);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;

    setCurrentSlide(index);
    startAutoSlide();
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = (resetTimer = true) => {
    if (isTransitioning) return;

    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (resetTimer) startAutoSlide();
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    startAutoSlide();

    return stopAutoSlide;
  }, [slides.length]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleTouch = (e: TouchEvent) => {
      nextSlide();
    };

    container.addEventListener("touchend", handleTouch);

    return () => {
      container.removeEventListener("touchend", handleTouch);
    };
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        ref={carouselRef}
        className="relative overflow-hidden border-2 shadow-lg rounded-2xl border-secondary/30 bg-gradient-to-br from-blue-800/60 via-indigo-800/50 to-blue-900/60 backdrop-blur cursor-grab active:cursor-grabbing"
      >
        <div className="p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <div className="absolute z-10 px-3 py-1 text-sm font-semibold bg-red-500 rounded-full shadow-md text-secondary top-4 left-4">
                  {home.carousel.before}
                </div>
                <img
                  src={slides[currentSlide].before}
                  alt={home.carousel.beforeClear}
                  className="w-full h-[300px] lg:h-[700px] object-cover rounded-xl border border-red-400/50 shadow-md transition-all duration-500"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-cyan-400/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <div className="absolute z-10 px-3 py-1 text-sm font-semibold text-blue-900 rounded-full shadow-md top-4 left-4 bg-cyan-400">
                  {home.carousel.after}
                </div>
                <img
                  src={slides[currentSlide].after}
                  alt={home.carousel.afterClear}
                  className="w-full h-[300px] lg:h-[700px] object-cover rounded-xl border border-secondary/50 shadow-md transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(`w-3 h-3 rounded-full transition-all duration-300`, {
              "bg-secondary scale-125": index === currentSlide,
              "bg-secondary/30 hover:bg-secondary/60": index !== currentSlide,
            })}
          />
        ))}
      </div>
    </div>
  );
}

const Carousel = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-800">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4 space-x-2">
            <div className="w-12 h-1 bg-secondary"></div>
            <Crown className="w-8 h-8 text-secondary" />
            <div className="w-12 h-1 bg-secondary"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-secondary lg:text-5xl">
            {home.carousel.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-secondary">
            {home.carousel.description}
          </p>
        </div>
        <BeforeAfterCarousel />
      </div>
    </section>
  );
};

export default Carousel;
