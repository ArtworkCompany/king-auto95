import { Crown, Sparkles } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-1 w-12 bg-yellow-400"></div>
            <Crown className="h-8 w-8 text-yellow-400" />
            <div className="h-1 w-12 bg-yellow-400"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Service exceptionnel ! Ma voiture n'avait jamais été aussi
                propre. L'équipe est très professionnelle et ponctuelle."
              </p>
              <div className="border-t border-yellow-400/20 pt-4">
                <p className="text-yellow-400 font-semibold">Marie Dubois</p>
                <p className="text-gray-400 text-sm">Particulier - Paris</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Incroyable transformation ! Les sièges en cuir de ma BMW sont
                comme neufs. Je recommande vivement King Auto."
              </p>
              <div className="border-t border-yellow-400/20 pt-4">
                <p className="text-yellow-400 font-semibold">Thomas Martin</p>
                <p className="text-gray-400 text-sm">
                  Chef d'entreprise - Cergy
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Service à domicile parfait ! Plus besoin de se déplacer, ils
                viennent directement au bureau. Très pratique !"
              </p>
              <div className="border-t border-yellow-400/20 pt-4">
                <p className="text-yellow-400 font-semibold">Sophie Leroy</p>
                <p className="text-gray-400 text-sm">Avocate - Pontoise</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
