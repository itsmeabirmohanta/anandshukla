import messagePhoto from "@/assets/message-photo.png";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Message = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="message"
      className="relative bg-dark-bg py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden"
    >
      {/* Background image with lazy loading */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(4, 4, 4, 0.98) 0%, rgba(4, 4, 4, 0.92) 35%, rgba(4, 4, 4, 0.75) 60%, rgba(4, 4, 4, 0.5) 85%, transparent 100%), url(${messagePhoto})`,
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "70% center" : "right center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Loading placeholder */}
      {!imageLoaded && <div className="absolute inset-0 bg-dark-bg" />}

      {/* Lazy load background image */}
      <img
        src={messagePhoto}
        alt=""
        onLoad={() => setImageLoaded(true)}
        className="hidden"
        loading="lazy"
        decoding="async"
      />
      {/* Mobile bottom gradient for better text readability */}
      <div
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{
          background: `linear-gradient(to top, rgba(4,4,4,0.9) 0%, transparent 50%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {/* Section Header with improved styling */}
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-up">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent opacity-80" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight">
                A Message
              </h2>
            </div>
            <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-accent to-accent/30"></div>
          </div>

          {/* Quote Container with enhanced design */}
          <div
            className="space-y-6 sm:space-y-8 md:space-y-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* First Quote */}
            <div className="group relative">
              <div className="absolute -left-2 sm:-left-3 md:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/70 to-transparent"></div>
              <div className="pl-6 sm:pl-8 md:pl-10 lg:pl-12 pr-4 sm:pr-6 md:pr-8 py-4 sm:py-5 md:py-6 bg-white/5 backdrop-blur-sm rounded-r-lg border-l-4 border-accent hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent/40 mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light italic">
                  Education is not just about knowledge — it is about building{" "}
                  <span className="text-accent font-medium">character</span>,{" "}
                  <span className="text-accent font-medium">purpose</span> and{" "}
                  <span className="text-accent font-medium">confidence</span>.
                  My mission is to create a generation of learners who lead with
                  vision and live with values.
                </p>
              </div>
            </div>

            {/* Second Quote */}
            <div className="group relative">
              <div className="absolute -left-2 sm:-left-3 md:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/70 to-transparent"></div>
              <div className="pl-6 sm:pl-8 md:pl-10 lg:pl-12 pr-4 sm:pr-6 md:pr-8 py-4 sm:py-5 md:py-6 bg-white/5 backdrop-blur-sm rounded-r-lg border-l-4 border-accent hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent/40 mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light italic">
                  Through my talks and mentorship, I aim to inspire educators
                  and students to discover their{" "}
                  <span className="text-accent font-medium">potential</span> and
                  shape a{" "}
                  <span className="text-accent font-medium">
                    future that matters
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Attribution */}
            <div
              className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-lg text-accent/90 font-semibold tracking-wide">
                — Dr. Anand Shukla
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent element */}
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Message;
