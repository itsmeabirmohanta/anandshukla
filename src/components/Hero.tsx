import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";
import { useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToInvite = () => {
    const element = document.getElementById("invite");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end md:items-center overflow-hidden"
    >
      {/* Background image with loading optimization */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "90% center",
        }}
      />

      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Preload hero image */}
      <link rel="preload" as="image" href={heroBanner} />
      <img
        src={heroBanner}
        alt=""
        onLoad={() => setImageLoaded(true)}
        className="hidden"
        loading="eager"
        decoding="sync"
      />
      {/* Gradient overlay - darker on left, lighter on right to keep person prominent */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right, 
            rgba(0, 0, 0, 0.8) 0%, 
            rgba(0, 0, 0, 0.7) 25%,
            rgba(0, 0, 0, 0.5) 45%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.15) 75%,
            rgba(0, 0, 0, 0.05) 90%,
            transparent 100%
          )`,
        }}
      ></div>

      {/* Mobile: Bottom gradient to ensure text readability */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 30%,
            transparent 60%
          )`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 md:py-24 lg:py-28 relative z-10">
        <div className="flex items-end md:items-center min-h-[80vh] md:min-h-[75vh]">
          {/* Content - Takes up more space on desktop for better readability */}
          <div className="animate-fade-up w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-[1.1] md:leading-[1.15]">
              <span className="block text-amber-400 font-light tracking-wide mb-2 md:mb-3">
                Create a life you
              </span>
              <span className="block text-white font-bold drop-shadow-2xl">
                were born to
              </span>
              <span className="block text-white font-bold drop-shadow-2xl">
                live
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 mb-6 sm:mb-7 md:mb-8 lg:mb-10 font-light max-w-2xl lg:max-w-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed drop-shadow-lg">
              When you believe in yourself, your potential is waiting to be
              explored, and I strive to help you discover your maximum
              potential.
            </p>
            <Button
              onClick={scrollToInvite}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 transition-all hover:scale-105 w-full sm:w-auto shadow-2xl"
            >
              Invite Me to Speak
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
