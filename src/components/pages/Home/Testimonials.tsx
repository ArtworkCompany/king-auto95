import { Crown, Sparkles } from "lucide-react";
import home from "../../../data/home.json" with { type: "json" };
import { Card, CardContent } from "../../ui/card";

const Testimonials = () => {
  const { testimonials } = home.testimonials;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 via-indigo-800 via-blue-900 to-indigo-900">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4 space-x-2">
            <div className="w-12 h-1 bg-secondary"></div>
            <Crown className="w-8 h-8 text-secondary" />
            <div className="w-12 h-1 bg-secondary"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-secondary lg:text-5xl">
            {home.testimonials.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-secondary">
            {home.testimonials.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="transition-all duration-300 border-2 bg-gradient-to-br from-blue-800/80 via-indigo-800/60 to-blue-900/80 border-cyan-300/30 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-300/20"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.sparkles)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className="w-5 h-5 fill-current text-secondary"
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-secondary">
                  {testimonial.description}
                </p>
                <div className="pt-4 border-t border-cyan-300/20">
                  <p className="font-semibold text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary/80">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
