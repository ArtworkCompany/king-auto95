import { SiCalendly } from "@icons-pack/react-simple-icons";
import { Crown } from "lucide-react";
import home from "../../../../data/home.json" with { type: "json" };
import { Button } from "../../../ui/button";
import SocialNetworkButton from "./SocialNetworkButton";

const Hero = () => {
  const onBookClick = (type: "calendly" | "instagram") => () => {
    if (type === "calendly") return;

    window.open(home.socialNetwork.instagram.url, "_blank");
  };

  return (
    <section className="relative py-20 overflow-hidden lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10"></div>
      <div className="container relative z-10 px-4 mx-auto lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center pb-4 space-x-3">
                <div className="relative">
                  <Crown className="w-12 h-12 text-secondary drop-shadow-lg" />
                  <div className="absolute inset-0 w-12 h-12 opacity-50 text-secondary animate-pulse">
                    <Crown className="w-12 h-12" />
                  </div>
                </div>
                <h1 className="text-5xl font-bold text-secondary lg:text-6xl bg-gradient-to-r f drop-shadow-2xl">
                  {home.title}
                </h1>
              </div>
              <div className="pl-6 border-l-4 border-secondary">
                <p className="text-xl text-secondary lg:text-2xl">
                  {home.description}
                </p>
              </div>
              <p className="max-w-lg text-lg text-white">
                {home.hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="transition-all duration-300 border-2 rounded-lg shadow-sm cursor-pointer bg-card text-card-foreground bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20 group"
                onClick={() => {
                  window.location.href = "/reservation";
                }}
              >
                <SiCalendly className="w-5 h-5 mr-2" />
                {home.hero.button.bookNow}
              </Button>
              <SocialNetworkButton />
            </div>
          </div>
          <div className="relative justify-self-end">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl"></div>
            <img
              src="/images/presentation-v3.jpeg"
              alt={home.title}
              width={300}
              className="relative z-10 border shadow-2xl rounded-2xl border-secondary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
