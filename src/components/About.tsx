import aboutPortrait from "@/assets/about-portrait.jpg";

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
    <section id="about" className="bg-dark-bg py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[45%_55%] gap-12 items-start max-w-7xl mx-auto">
          {/* Large Framed Image */}
          <div className="animate-fade-up">
            <div className="relative">
              <div className="border-8 border-white rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={aboutPortrait}
                  alt="Prof. (Dr.) Anand Shukla"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-up">
            <h2 className="text-6xl md:text-7xl font-bold text-transparent" style={{
              WebkitTextStroke: '2px hsl(var(--accent))'
            }}>
              About Me
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I am Prof. (Dr.) Anand Shukla
            </h3>

            <div className="border-l-4 border-accent pl-6 space-y-6">
              <p className="text-lg leading-relaxed text-white">
                I am a motivational speaker, education leader, and institution builder. I am on a mission to inspire excellence in learning and life through innovation, research, and motivation.
              </p>

              <p className="text-lg leading-relaxed text-white">
                Currently serving as Dean at Lovely Professional University, I have worked across India's most respected universities to build quality education systems and empower the next generation of leaders.
              </p>

              <p className="text-lg leading-relaxed text-white">
                Honored as Sr. Member of IEEE and awarded for excellence in Software Engineering research and academic leadership.
              </p>
            </div>

            {/* Stat Boxes */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center">
                    <span className="text-2xl text-accent">📊</span>
                  </div>
                  <p className="text-white leading-relaxed">
                    <span className="font-semibold">{achievement.title}</span>
                    <br />
                    {achievement.description}
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
