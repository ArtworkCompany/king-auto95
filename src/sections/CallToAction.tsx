import { Clock, Crown, Phone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import data from "../data/sections.json" with { type: "json" };

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10"></div>
      <div className="container relative z-10 px-4 mx-auto text-center lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6">
            <Crown className="w-16 h-16 mx-auto text-gold drop-shadow-lg" />
            <div className="absolute inset-0 w-16 h-16 mx-auto text-gold/50 animate-pulse">
              <Crown className="w-16 h-16" />
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gold via-gold to-gold bg-clip-text">
            {data.callToAction.title}
          </h2>
          <p className="mb-12 text-xl text-gray-300">
            {data.callToAction.description}
          </p>

          <div className="mb-12">
            <Card className="bg-black border-2 shadow-lg border-gold shadow-gold/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h3 className="mb-4 text-2xl font-semibold text-gold">
                  {data.callToAction.callUs}
                </h3>
                <a
                  href="tel:+33781184550"
                  className="text-3xl font-bold text-gold drop-shadow-lg"
                >
                  {data.callToAction.phoneNumber}
                </a>
                <p className="mt-4 text-gray-300">
                  {data.callToAction.available7_7}
                </p>
              </CardContent>
            </Card>
          </div>
          {/* <div className="grid gap-8 mb-12 md:grid-cols-2">
            <Card className="bg-black border-2 shadow-lg border-gold shadow-gold/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h3 className="mb-4 text-2xl font-semibold text-gold">
                  {data.callToAction.callUs}
                </h3>
                <a href='tel:+33781184550' className="text-3xl font-bold text-gold drop-shadow-lg">
                  {data.callToAction.phoneNumber}
                </a>
                <p className="mt-4 text-gray-300">{data.callToAction.available7_7}</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-2 shadow-lg border-gold shadow-gold/20">
              <CardContent className="p-8 text-center">
                <SiInstagram className="w-12 h-12 mx-auto mb-4 text-gold" />
                <h3 className="mb-4 text-2xl font-semibold text-gold">
                  {data.callToAction.followUs}
                </h3>
                <a href={data.callToAction.instagram.url} target="_blank" className="mb-4 text-3xl font-bold text-gold drop-shadow-lg">
                  {data.callToAction.instagram.username}
                </a>
                <p className="mt-4 text-gray-300">{data.callToAction.lastRealization}</p>
              </CardContent>
            </Card>
          </div> */}

          <div className="inline-block p-6 text-black shadow-lg bg-gradient-to-r from-gold to-gold rounded-2xl shadow-gold/30">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">
                {data.callToAction.availableService}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
