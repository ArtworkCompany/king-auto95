import { SiCalendly } from "@icons-pack/react-simple-icons";
import { Crown } from "lucide-react";
import { Button } from "../../components/ui/button";
import data from "../../data/sections.json" with { type: "json" };
import SocialNetworkButton from "./SocialNetworkButton";

const Hero = () => {
  const onBookClick = (type: "calendly" | "instagram") => () => {
    if (type === "calendly") return;

    window.open(data.callToAction.instagram.url, "_blank");
  };

  return (
    <section className="relative py-20 overflow-hidden lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
      <div className="container relative z-10 px-4 mx-auto lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center pb-4 space-x-3">
                <div className="relative">
                  <Crown className="w-12 h-12 text-gold drop-shadow-lg" />
                  <div className="absolute inset-0 w-12 h-12 opacity-50 text-gold animate-pulse">
                    <Crown className="w-12 h-12" />
                  </div>
                </div>
                <h1 className="text-5xl font-bold lg:text-6xl bg-gradient-to-r f text-gold drop-shadow-2xl">
                  {data.title}
                </h1>
              </div>
              <div className="pl-6 border-l-4 border-gold">
                <p className="text-xl lg:text-2xl text-gold">
                  {data.description}
                </p>
              </div>
              <p className="max-w-lg text-lg text-gray-300">
                {data.hero.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-black border-2 border-black cursor-pointer hover:bg-black hover:text-gold bg-gold backdrop-blur"
                onClick={onBookClick("calendly")}
              >
                <SiCalendly className="w-5 h-5 mr-2" />
                {data.hero.button.bookNow}
              </Button>
              <SocialNetworkButton />
            </div>
          </div>
          <div className="relative justify-self-end">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-gold/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-3xl blur-2xl"></div>
            <img
              src="/images/presentation.png"
              alt={data.title}
              width={600}
              height={500}
              className="relative z-10 border shadow-2xl rounded-2xl border-gold/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
