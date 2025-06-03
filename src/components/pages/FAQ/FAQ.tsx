import parse from "html-react-parser";
import {
  Car,
  ChevronDown,
  ChevronUp,
  Crown,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { useState } from "react";
import faq from "../../../data/faq.json" with { type: "json" };
import { Button } from "../../ui/button";
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
    <div className="border-b border-secondary/30 last:border-b-0">
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
        <div className="pb-6 space-y-4 text-gray-300 animate-fadeIn">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen text-secondary bg-black">
      <Header isHome={false} />
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-secondary/5"></div>
        <div className="container relative z-10 px-4 mx-auto lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-6 space-x-2">
              <div className="w-12 h-1 bg-secondary"></div>
              <Crown className="w-10 h-10 text-secondary" />
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-transparent lg:text-6xl bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text">
              Questions Fréquentes
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300">
              Tout ce que vous devez savoir sur nos services de nettoyage
              automobile à domicile
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-black">
        <div className="container px-4 mx-auto lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
              <Card className="transition-all duration-300 bg-black border-2 border-secondary/30 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
                <CardContent className="p-6 text-center">
                  <Car className="w-10 h-10 mx-auto mb-4 text-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-secondary">
                    Services Complets
                  </h3>
                  <p className="text-sm text-gray-300">
                    Solutions de nettoyage pour tous types de véhicules
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 bg-black border-2 border-secondary/30 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-4 text-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-secondary">
                    À Domicile
                  </h3>
                  <p className="text-sm text-gray-300">
                    Nous nous déplaçons chez vous pour plus de confort
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 bg-black border-2 border-secondary/30 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 mx-auto mb-4 text-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-secondary">
                    Produits Premium
                  </h3>
                  <p className="text-sm text-gray-300">
                    Utilisation exclusive de produits professionnels
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="overflow-hidden border-2 bg-gradient-to-br from-gray-900 to-black border-secondary/30 rounded-2xl">
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
            <div className="mt-12 text-center">
              <p className="mb-6 text-xl text-gray-300">
                Vous avez d'autres questions ?
              </p>
              <Button
                size="lg"
                className="font-semibold text-black shadow-lg bg-gradient-to-r from-secondary to-secondary hover:from-secondary hover:to-yellow-600 shadow-secondary/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
