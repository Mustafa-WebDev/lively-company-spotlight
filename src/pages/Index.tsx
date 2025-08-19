import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="packages">
          <Packages />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
