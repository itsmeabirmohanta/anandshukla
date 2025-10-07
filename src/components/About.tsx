import aboutPortrait from "@/assets/about-portrait.png";

const About = () => {
  const achievements = [
    {
      title: "20+ Years",
      description: "of leadership experience across India's top universities, building quality education systems aligned with NAAC, NIRF, NBA, QS and NEP 2020 standards."
    },
    {
      title: "Research & Innovation",
      description: "Sr. Member of IEEE and active researcher in Software Engineering, bridging education and innovation while mentoring the next generation."
    }
  ];

  return (
    <section id="about" className="bg-dark-bg py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 sm:gap-10 lg:gap-14 items-start max-w-7xl mx-auto">
          {/* Large Framed Image */}
          <div className="animate-fade-up">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="border-0 sm:border-0 md:border-0 border-white rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={aboutPortrait}
                  alt="Prof. (Dr.) Anand Shukla"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-primary-foreground space-y-5 sm:space-y-6 md:space-y-8 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent" style={{
              WebkitTextStroke: '2px hsl(var(--accent))'
            }}>
              About Me
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Hi, I am Prof. (Dr.) Anand Shukla
            </h3>

            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/95">
                I am a motivational speaker, education leader, and institution builder. I am on a mission to inspire excellence in learning and life through innovation, research, and motivation.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/95">
                Currently serving as Dean at Lovely Professional University, I have worked across India's most respected universities to build quality education systems and empower the next generation of leaders.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/95">
                Honored as Sr. Member of IEEE and awarded for excellence in Software Engineering research and academic leadership.
              </p>
            </div>

            {/* Stat Boxes */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 pt-4 sm:pt-6 md:pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-accent/20 rounded flex items-center justify-center">
                    <span className="text-lg sm:text-xl md:text-2xl text-accent">📊</span>
                  </div>
                  <p className="text-white leading-relaxed text-sm sm:text-base">
                    <span className="font-semibold text-base sm:text-lg">{achievement.title}</span>
                    <br />
                    <span className="text-white/90">{achievement.description}</span>
                  </p>
                  <div className="w-full h-px bg-accent/30"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
