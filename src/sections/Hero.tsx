import { Crown, Instagram, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5"></div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Crown className="h-12 w-12 text-yellow-400 drop-shadow-lg" />
                  <div className="absolute inset-0 h-12 w-12 text-yellow-400 animate-pulse opacity-50">
                    <Crown className="h-12 w-12" />
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                  King Auto
                </h1>
              </div>
              <div className="border-l-4 border-yellow-400 pl-6">
                <p className="text-xl lg:text-2xl text-yellow-400 font-medium">
                  L'excellence du nettoyage automobile, directement chez vous!
                </p>
              </div>
              <p className="text-lg text-gray-300 max-w-lg">
                Service de nettoyage automobile professionnel à domicile. Nous
                nous déplaçons chez vous pour redonner à votre véhicule tout son
                éclat.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold shadow-lg shadow-yellow-400/25"
              >
                <Phone className="mr-2 h-5 w-5" />
                Réserver maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-black/50 backdrop-blur"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Suivez-nous
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-500/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 rounded-3xl blur-2xl"></div>
            <img
              src="/king-auto95/placeholder.svg?height=500&width=600"
              alt="Luxury black car"
              width={600}
              height={500}
              className="relative z-10 rounded-2xl shadow-2xl border border-yellow-400/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
