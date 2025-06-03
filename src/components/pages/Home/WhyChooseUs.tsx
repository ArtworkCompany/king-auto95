import { Award, Crown } from "lucide-react";
import home from "../../../data/home.json" with { type: "json" };

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-bl from-blue-900 via-indigo-900 to-blue-800"
    >
      <div className="container px-4 mx-auto lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center mb-8 space-x-2">
              <div className="w-8 h-1 bg-secondary"></div>
              <Crown className="w-6 h-6 text-secondary" />
              <div className="w-8 h-1 bg-secondary"></div>
            </div>
            <h2 className="mb-8 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text">
              {home.whyChooseUs.title}
            </h2>
            <div className="space-y-6">
              {home.whyChooseUs.sections.map((section, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 space-x-4 transition-all duration-300 border rounded-lg border-cyan-300/20 bg-gradient-to-r from-cyan-300/5 to-transparent hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20"
                >
                  <Award className="flex-shrink-0 w-8 h-8 mt-1 text-secondary" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-secondary">
                      {section.title}
                    </h3>
                    <p className="text-white">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative justify-self-end">
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-300/30 to-cyan-400/20 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-l from-cyan-300/20 via-transparent to-cyan-300/20 rounded-3xl blur-2xl"></div>
            <img
              src="/images/why-choose-us.png"
              alt={home.whyChooseUs.title}
              className="relative z-10 border shadow-2xl rounded-2xl border-cyan-300/30"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
