import CallToAction from "./CallToAction";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero/Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen text-secondary bg-black">
      <Header isHome={true} />
      <Hero />
      <Services />
      <Carousel />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
