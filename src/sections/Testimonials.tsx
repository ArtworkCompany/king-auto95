import { Crown, Sparkles } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import data from '../data/sections.json' with { type: "json" };

const Testimonials = () => {
  const { testimonials } = data.testimonials

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto lg:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center mb-4 space-x-2">
            <div className="w-12 h-1 bg-gold"></div>
            <Crown className="w-8 h-8 text-gold" />
            <div className="w-12 h-1 bg-gold"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gold lg:text-5xl">
            {data.testimonials.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            {data.testimonials.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          { testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 bg-black border-2 border-gold/30 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.sparkles)].map((_, i) => ( <Sparkles key={i} className="w-5 h-5 fill-current text-gold" /> ))}
                </div>
                <p className="mb-4 italic text-gray-300">
                  {testimonial.description}
                </p>
                <div className="pt-4 border-t border-gold/20">
                  <p className="font-semibold text-gold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
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
