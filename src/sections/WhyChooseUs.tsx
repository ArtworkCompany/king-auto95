import { Award, Crown, MapPin, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="h-1 w-8 bg-yellow-400"></div>
              <Crown className="h-6 w-6 text-yellow-400" />
              <div className="h-1 w-8 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Pourquoi nous choisir ?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg border border-yellow-400/20 bg-gradient-to-r from-yellow-400/5 to-transparent">
                <Award className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    Service Professionnel
                  </h3>
                  <p className="text-gray-300">
                    Équipe expérimentée et formée aux dernières techniques de
                    nettoyage automobile
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg border border-yellow-400/20 bg-gradient-to-r from-yellow-400/5 to-transparent">
                <MapPin className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    Déplacement à Domicile et au Bureau
                  </h3>
                  <p className="text-gray-300">
                    Nous venons directement chez vous ou sur votre lieu de
                    travail pour votre confort
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg border border-yellow-400/20 bg-gradient-to-r from-yellow-400/5 to-transparent">
                <Sparkles className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
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
            <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/30 to-yellow-500/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-l from-yellow-400/20 via-transparent to-yellow-400/20 rounded-3xl blur-2xl"></div>
            <img
              src="/king-auto95/placeholder.svg?height=400&width=500"
              alt="Professional car cleaning"
              width={500}
              height={400}
              className="relative z-10 rounded-2xl shadow-2xl border border-yellow-400/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
