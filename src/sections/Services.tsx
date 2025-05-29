import { Crown, Droplets, Shield, Sparkles, Stethoscope } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import data from "../data/sections.json" with { type: "json" };
import { cn } from "../lib/utils";

type IconType = "sparkles" | "droplets" | "stethoscope" | "shield";

const Services = () => {
  const icons: Record<IconType, typeof Sparkles> = {
    sparkles: Sparkles,
    droplets: Droplets,
    stethoscope: Stethoscope,
    shield: Shield,
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4 space-x-2">
            <div className="w-12 h-1 bg-gold"></div>
            <Crown className="w-8 h-8 text-gold" />
            <div className="w-12 h-1 bg-gold"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-white via-gold to-white bg-clip-text">
            {data.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            {data.services.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.services.services.map((service, index) => {
            const Icon = icons[service.icon as IconType];

            return (
              <Card
                className={cn(
                  "bg-black border-2 border-gold/30 hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group",
                  {
                    "lg:col-span-3 md:col-span-3":
                      index === data.services.services.length - 1,
                  },
                )}
                key={index}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Icon className="w-12 h-12 mx-auto transition-transform duration-300 text-gold group-hover:scale-110" />
                    <div className="absolute inset-0 w-12 h-12 mx-auto text-gold/30 animate-ping group-hover:animate-none">
                      <Icon className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gold">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
