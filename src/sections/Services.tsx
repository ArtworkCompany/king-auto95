import {
  Car,
  Crown
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import data from '../data/sections.json' with { type: "json" };
import { cn } from "../lib/utils";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-1 w-12 bg-gold"></div>
            <Crown className="h-8 w-8 text-gold" />
            <div className="h-1 w-12 bg-gold"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            {data.services.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {data.services.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.services.map((service, index) => (
            <Card className={cn("bg-black border-2 border-gold/30 hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group", {
              "lg:col-span-3 md:col-span-3": index === data.services.services.length - 1
            })} key={index}>
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Car className="h-12 w-12 text-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 h-12 w-12 text-gold/30 mx-auto animate-ping group-hover:animate-none">
                    <Car className="h-12 w-12" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gold">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
