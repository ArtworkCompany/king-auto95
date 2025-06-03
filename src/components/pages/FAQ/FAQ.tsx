import parse from "html-react-parser";
import {
  Car,
  ChevronDown,
  ChevronUp,
  Crown,
  MapPin,
  Shield,
} from "lucide-react";
import { useState } from "react";
import faq from "../../../data/faq.json" with { type: "json" };
import { Card, CardContent } from "../../ui/card";
import Footer from "../Home/Footer";
import Header from "../Home/Header";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cyan-300/30 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-6 text-left cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-secondary">{question}</h3>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 w-6 h-6 text-secondary" />
        ) : (
          <ChevronDown className="flex-shrink-0 w-6 h-6 text-secondary" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 space-y-4 text-secondary animate-fadeIn">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black text-secondary">
      <Header isHome={false} />
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 via-indigo-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10"></div>
        <div className="container relative z-10 px-4 mx-auto lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-6 space-x-2">
              <div className="w-12 h-1 bg-secondary"></div>
              <Crown className="w-10 h-10 text-secondary" />
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
              Questions Fréquentes
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-secondary">
              Tout ce que vous devez savoir sur nos services de nettoyage
              automobile à domicile
            </p>
          </div>
        </div>
        <div className="container relative z-10 px-4 py-16 mx-auto lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
              <Card className="transition-all duration-300 border-2 bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20">
                <CardContent className="p-6 text-center">
                  <Car className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
                  <h3 className="mb-2 text-lg font-semibold text-secondary">
                    Services Complets
                  </h3>
                  <p className="text-sm text-secondary">
                    Solutions de nettoyage pour tous types de véhicules
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 border-2 bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
                  <h3 className="mb-2 text-lg font-semibold text-secondary">
                    À Domicile
                  </h3>
                  <p className="text-sm text-secondary">
                    Nous nous déplaçons chez vous pour plus de confort
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 border-2 bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 mx-auto mb-4 text-cyan-300" />
                  <h3 className="mb-2 text-lg font-semibold text-secondary">
                    Produits Premium
                  </h3>
                  <p className="text-sm text-secondary">
                    Utilisation exclusive de produits professionnels
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="overflow-hidden border-2 shadow-lg bg-gradient-to-br from-blue-800/60 via-indigo-800/50 to-blue-900/60 border-cyan-300/30 rounded-2xl">
              <div className="p-6 space-y-6 md:p-10">
                {faq.questions.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={parse(item.answer)}
                  />
                ))}
              </div>
            </div>
            {/* <div className="mt-12 text-center">
              <p className="mb-6 text-xl text-secondary">
                Vous avez d'autres questions ?
              </p>
              <Button
                size="lg"
                className="font-semibold transition-all duration-300 border-2 rounded-lg shadow-sm cursor-pointer bg-card text-card-foreground bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 group"
                onClick={() => {
                  window.open(home.socialNetwork.instagram.url, "_blank");
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactez-nous
              </Button>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
