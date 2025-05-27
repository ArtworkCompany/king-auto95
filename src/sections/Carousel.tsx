import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import React from "react";
import data from '../data/sections.json' with { type: "json" };

function BeforeAfterCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      title: "Nettoyage Extérieur Complet",
      before: "/images/placeholder.svg?height=400&width=600&text=AVANT",
      after: "/images/placeholder.svg?height=400&width=600&text=APRÈS",
      description: "Transformation complète d'une berline allemande",
    },
    {
      id: 2,
      title: "Rénovation Intérieur Cuir",
      before: "/images/placeholder.svg?height=400&width=600&text=AVANT",
      after: "/images/placeholder.svg?height=400&width=600&text=APRÈS",
      description: "Restauration des sièges en cuir d'un SUV de luxe",
    },
    {
      id: 3,
      title: "Détachage Professionnel",
      before: "/images/placeholder.svg?height=400&width=600&text=AVANT",
      after: "/images/placeholder.svg?height=400&width=600&text=APRÈS",
      description: "Élimination de taches tenaces sur moquettes",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur">
        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gold mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="text-gray-300">{slides[currentSlide].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  AVANT
                </div>
                <img
                  src={slides[currentSlide].before || "/images/placeholder.svg"}
                  alt="Avant nettoyage"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-xl border border-red-500/30"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-gold/20 rounded-xl blur-lg"></div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
                  APRÈS
                </div>
                <img
                  src={slides[currentSlide].after || "/images/placeholder.svg"}
                  alt="Après nettoyage"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-xl border border-gold/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-full p-3 backdrop-blur"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-full p-3 backdrop-blur"
      >
        <ChevronRight className="h-6 w-6" />
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
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-1 w-12 bg-gold"></div>
            <Crown className="h-8 w-8 text-gold" />
            <div className="h-1 w-12 bg-gold"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gold via-gold to-gold bg-clip-text text-transparent">
            Avant / Après
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez la transformation spectaculaire de nos véhicules
          </p>
        </div>
        <BeforeAfterCarousel />
      </div>
    </section>
  );
};

export default Carousel;
