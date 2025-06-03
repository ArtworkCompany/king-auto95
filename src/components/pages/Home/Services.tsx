import { Crown, Droplets, Shield, Sparkles, Stethoscope } from "lucide-react";
import home from "../../../data/home.json" with { type: "json" };
import { cn } from "../../../lib/utils";
import { Card, CardContent } from "../../ui/card";

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
      className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800"
    >
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4 space-x-2">
            <div className="w-12 h-1 bg-secondary"></div>
            <Crown className="w-8 h-8 text-secondary" />
            <div className="w-12 h-1 bg-secondary"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-secondary lg:text-5xl bg-clip-text">
            {home.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white">
            {home.services.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {home.services.services.map((service, index) => {
            const Icon = icons[service.icon as IconType];

            return (
              <Card
                className={cn(
                  "bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-2 border-cyan-300/30 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-300/20 group",
                  {
                    "lg:col-span-3 md:col-span-3":
                      index === home.services.services.length - 1,
                  },
                )}
                key={index}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Icon className="w-12 h-12 mx-auto transition-transform duration-300 text-cyan-300 group-hover:scale-110" />
                    <div className="absolute inset-0 w-12 h-12 mx-auto text-cyan-300/30 animate-ping group-hover:animate-none">
                      <Icon className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-secondary">
                    {service.title}
                  </h3>
                  <p className="text-white">{service.description}</p>
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
