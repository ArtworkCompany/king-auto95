import { SiCalendly, SiInstagram } from '@icons-pack/react-simple-icons';
import { Crown } from "lucide-react";
import { Button } from "../components/ui/button";
import data from '../data/sections.json' with { type: "json" };

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 pb-4">
                <div className="relative">
                  <Crown className="h-12 w-12 text-gold drop-shadow-lg" />
                  <div className="absolute inset-0 h-12 w-12 text-gold animate-pulse opacity-50">
                    <Crown className="h-12 w-12" />
                  </div>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r f text-gold drop-shadow-2xl">
                  {data.title}
                </h1>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <p className="text-xl lg:text-2xl text-gold">
                  {data.description}
                </p>
              </div>
              <p className="text-lg text-gray-300 max-w-lg">{data.hero.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold to-gold hover:from-gold hover:to-gold text-black font-semibold shadow-lg shadow-gold/25"
              >
                <SiCalendly className="mr-2 h-5 w-5" />
                {data.hero.button.bookNow}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-black bg-black/50 backdrop-blur"
              >
                <SiInstagram className="mr-2 h-5 w-5" />
                {data.hero.button.followUs}
              </Button>
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
              className="relative z-10 rounded-2xl shadow-2xl border border-gold/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
