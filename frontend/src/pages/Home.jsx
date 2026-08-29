import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AITools from "../components/AITools";
import WhyMindly from "../components/WhyMindly";
import FeaturedProducts from "../components/FeaturedProducts";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home({ cart, user, onLogout }) {
  return (
    <div className="min-h-screen bg-[#05050a] text-white">

      <Navbar
        cart={cart}
        user={user}
        onLogout={onLogout}
      />

      <Hero />

      <AITools />

      <WhyMindly />

      <FeaturedProducts />

      <CTA />

      <Footer />

    </div>
  );
}

export default Home;