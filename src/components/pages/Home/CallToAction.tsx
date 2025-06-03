import { Clock, Crown, Phone } from "lucide-react";
import home from "../../../data/home.json" with { type: "json" };
import { Card, CardContent } from "../../ui/card";

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 via-indigo-900 to-blue-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-cyan-400/10"></div>
      <div className="container relative z-10 px-4 mx-auto text-center lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6">
            <Crown className="w-16 h-16 mx-auto text-secondary drop-shadow-lg" />
            <div className="absolute inset-0 w-16 h-16 mx-auto text-secondary/50 animate-pulse">
              <Crown className="w-16 h-16" />
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-secondary lg:text-5xl">
            {home.callToAction.title}
          </h2>
          <p className="mb-12 text-xl text-secondary">
            {home.callToAction.description}
          </p>

          <div className="mb-12">
            <Card className="border-2 shadow-lg bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 shadow-cyan-300/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="mb-4 text-2xl font-semibold text-secondary">
                  {home.callToAction.callUs}
                </h3>
                <a
                  href="tel:+33781184550"
                  className="text-3xl font-bold text-secondary drop-shadow-lg"
                >
                  {home.callToAction.phoneNumber}
                </a>
                <p className="mt-4 text-secondary">
                  {home.callToAction.available7_7}
                </p>
              </CardContent>
            </Card>
          </div>
          {/* <div className="grid gap-8 mb-12 md:grid-cols-2">
            <Card className="bg-black border-2 shadow-lg border-secondary shadow-secondary/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="mb-4 text-2xl font-semibold text-secondary">
                  {home.callToAction.callUs}
                </h3>
                <a href='tel:+33781184550' className="text-3xl font-bold text-secondary drop-shadow-lg">
                  {home.callToAction.phoneNumber}
                </a>
                <p className="mt-4 text-secondary">{home.callToAction.available7_7}</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-2 shadow-lg border-secondary shadow-secondary/20">
              <CardContent className="p-8 text-center">
                <SiInstagram className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="mb-4 text-2xl font-semibold text-secondary">
                  {home.callToAction.followUs}
                </h3>
                <a href={home.callToAction.instagram.url} target="_blank" className="mb-4 text-3xl font-bold text-secondary drop-shadow-lg">
                  {home.callToAction.instagram.username}
                </a>
                <p className="mt-4 text-secondary">{home.callToAction.lastRealization}</p>
              </CardContent>
            </Card>
          </div> */}

          <div className="inline-block p-6 transition-all duration-300 border-2 rounded-lg shadow-sm bg-card text-card-foreground bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 group">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">
                {home.callToAction.availableService}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
