import {
  Car,
  Crown,
  Droplets,
  Shield,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-1 w-12 bg-yellow-400"></div>
            <Crown className="h-8 w-8 text-yellow-400" />
            <div className="h-1 w-12 bg-yellow-400"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des prestations complètes pour redonner à votre véhicule tout son
            éclat
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 group">
            <CardContent className="p-6 text-center">
              <div className="relative mb-4">
                <Car className="h-12 w-12 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-12 w-12 text-yellow-400/30 mx-auto animate-ping group-hover:animate-none">
                  <Car className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Lavage Extérieur
              </h3>
              <p className="text-gray-300">
                Nettoyage complet de la carrosserie, jantes et vitres pour un
                véhicule éclatant
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 group">
            <CardContent className="p-6 text-center">
              <div className="relative mb-4">
                <Sparkles className="h-12 w-12 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-12 w-12 text-yellow-400/30 mx-auto animate-ping group-hover:animate-none">
                  <Sparkles className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Nettoyage Intérieur Approfondi
              </h3>
              <p className="text-gray-300">
                Aspiration et nettoyage minutieux de l'habitacle pour un
                intérieur impeccable
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 group">
            <CardContent className="p-6 text-center">
              <div className="relative mb-4">
                <Droplets className="h-12 w-12 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-12 w-12 text-yellow-400/30 mx-auto animate-ping group-hover:animate-none">
                  <Droplets className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Shampoing Sièges et Moquettes
              </h3>
              <p className="text-gray-300">
                Nettoyage en profondeur des tissus pour éliminer odeurs et
                salissures
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 group">
            <CardContent className="p-6 text-center">
              <div className="relative mb-4">
                <Stethoscope className="h-12 w-12 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-12 w-12 text-yellow-400/30 mx-auto animate-ping group-hover:animate-none">
                  <Stethoscope className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Détachage Tissus
              </h3>
              <p className="text-gray-300">
                Traitement spécialisé pour éliminer les taches les plus tenaces
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 group lg:col-span-2 md:col-span-2">
            <CardContent className="p-6 text-center">
              <div className="relative mb-4">
                <Shield className="h-12 w-12 text-yellow-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-12 w-12 text-yellow-400/30 mx-auto animate-ping group-hover:animate-none">
                  <Shield className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Rénovation Plastiques et Cuirs
              </h3>
              <p className="text-gray-300">
                Traitement et protection des matériaux pour leur redonner leur
                aspect d'origine
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
