import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedOn from "@/components/FeaturedOn";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Message from "@/components/Message";
import Invite from "@/components/Invite";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedOn />
      <About />
      <Videos />
      <Message />
      <Invite />
      <Footer />
    </div>
  );
};

export default Index;
