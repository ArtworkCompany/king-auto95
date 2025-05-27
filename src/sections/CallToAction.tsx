import { Clock, Crown, Instagram, Phone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10"></div>
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6">
            <Crown className="h-16 w-16 text-gold mx-auto drop-shadow-lg" />
            <div className="absolute inset-0 h-16 w-16 text-gold/50 mx-auto animate-pulse">
              <Crown className="h-16 w-16" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gold via-gold to-gold bg-clip-text text-transparent">
            Réservez Votre Service
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Contactez-nous dès maintenant pour redonner à votre véhicule l'éclat
            qu'il mérite
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black border-2 border-gold shadow-lg shadow-gold/20">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gold">
                  Appelez-nous
                </h3>
                <p className="text-3xl font-bold text-gold mb-2 drop-shadow-lg">
                  07 81 18 45 50
                </p>
                <p className="text-gray-300">Disponible 7j/7</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-2 border-gold shadow-lg shadow-gold/20">
              <CardContent className="p-8 text-center">
                <Instagram className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gold">
                  Suivez-nous
                </h3>
                <p className="text-3xl font-bold text-gold mb-2 drop-shadow-lg">
                  @King_auto_95
                </p>
                <p className="text-gray-300">Nos dernières réalisations</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-gold to-gold text-black rounded-2xl p-6 inline-block shadow-lg shadow-gold/30">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">
                Service disponible 7j/7 sur rendez-vous uniquement
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
