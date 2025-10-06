import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToInvite = () => {
    const element = document.getElementById("invite");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(4, 4, 4, 0.85) 0%, rgba(4, 4, 4, 0.5) 100%), url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-32 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Empowering Minds,
          <br />
          <span className="text-accent">Inspiring Leaders</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 font-light">
          With over two decades in education and leadership, I strive to inspire
          excellence in learning and life through innovation, research and motivation.
        </p>
        <Button
          onClick={scrollToInvite}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
        >
          Invite Me to Speak
        </Button>
      </div>
    </section>
  );
};

export default Hero;
