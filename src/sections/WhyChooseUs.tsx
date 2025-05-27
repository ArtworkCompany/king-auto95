import { Award, Crown, MapPin, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="h-1 w-8 bg-gold"></div>
              <Crown className="h-6 w-6 text-gold" />
              <div className="h-1 w-8 bg-gold"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gold via-gold to-gold bg-clip-text text-transparent">
              Pourquoi nous choisir ?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent">
                <Award className="h-8 w-8 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    Service Professionnel
                  </h3>
                  <p className="text-gray-300">
                    Équipe expérimentée et formée aux dernières techniques de
                    nettoyage automobile
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent">
                <MapPin className="h-8 w-8 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    Déplacement à Domicile et au Bureau
                  </h3>
                  <p className="text-gray-300">
                    Nous venons directement chez vous ou sur votre lieu de
                    travail pour votre confort
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent">
                <Sparkles className="h-8 w-8 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gold">
                    Produits de Haute Qualité
                  </h3>
                  <p className="text-gray-300">
                    Utilisation exclusive de produits professionnels respectueux
                    de votre véhicule
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-gold/30 to-gold/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-l from-gold/20 via-transparent to-gold/20 rounded-3xl blur-2xl"></div>
            <img
              src="/images/placeholder.svg?height=400&width=500"
              alt="Professional car cleaning"
              width={500}
              height={400}
              className="relative z-10 rounded-2xl shadow-2xl border border-gold/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
