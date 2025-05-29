import { Award, Crown } from "lucide-react";
import data from "../data/sections.json" with { type: "json" };

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center mb-8 space-x-2">
              <div className="w-8 h-1 bg-gold"></div>
              <Crown className="w-6 h-6 text-gold" />
              <div className="w-8 h-1 bg-gold"></div>
            </div>
            <h2 className="mb-8 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-gold via-gold to-gold bg-clip-text">
              {data.whyChooseUs.title}
            </h2>
            <div className="space-y-6">
              {data.whyChooseUs.sections.map((section, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 space-x-4 border rounded-lg border-gold/20 bg-gradient-to-r from-gold/5 to-transparent"
                >
                  <Award className="flex-shrink-0 w-8 h-8 mt-1 text-gold" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gold">
                      {section.title}
                    </h3>
                    <p className="text-gray-300">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative justify-self-end">
            <div className="absolute inset-0 bg-gradient-to-l from-gold/30 to-gold/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-l from-gold/20 via-transparent to-gold/20 rounded-3xl blur-2xl"></div>
            <img
              src="/images/why-choose-us.png"
              alt={data.whyChooseUs.title}
              className="relative z-10 border shadow-2xl rounded-2xl border-gold/30"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
