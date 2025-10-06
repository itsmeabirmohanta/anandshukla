import aboutPortrait from "@/assets/about-portrait.jpg";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const About = () => {
  const careerHighlights = [
    "Dean – Lovely Professional University (2024 – Present)",
    "Former Dean – Rayat Bahra University (2023 – 2024)",
    "Former Dean – CGC Jhanjeri (2022 – 2023)",
    "Former Dean – Graphic Era Hill University (2022)",
    "Former Professor & Research Head – Chandigarh University (2018 – 2022)",
    "Former HOD – Invertis University (2010 – 2018)",
    "Former Assistant Professor – RBMI Group of Institutions (2006 – 2010)",
  ];

  return (
    <section id="about" className="bg-dark-bg py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <img
              src={aboutPortrait}
              alt="Prof. (Dr.) Anand Shukla"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          <div className="text-primary-foreground space-y-6 animate-fade-up">
            <h2 className="text-4xl font-bold mb-2 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent transform translate-y-2"></span>
            </h2>

            <h3 className="text-2xl font-semibold text-accent">
              Hi, I'm Prof. (Dr.) Anand Shukla
            </h3>

            <p className="text-lg leading-relaxed text-primary-foreground/90">
              I am an education leader, motivational speaker, and institution builder
              with over two decades of experience in academia and administration.
              Currently serving as Dean at Lovely Professional University (LPU), I have
              worked across some of India's most respected universities to build quality
              education systems aligned with NAAC, NIRF, NBA, QS and NEP 2020 standards.
            </p>

            <p className="text-lg leading-relaxed text-primary-foreground/90">
              As a Sr. Member of IEEE and researcher in Software Engineering, I am
              passionate about bridging education and innovation while motivating the
              next generation of leaders.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent">
                Career Highlights
              </h4>
              
              {/* Current Position - Highlighted */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span className="text-base font-semibold text-primary-foreground">
                    {careerHighlights[0]}
                  </span>
                </div>
              </div>

              {/* Previous Positions - Collapsible */}
              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-3">
                  <span>Previous Positions</span>
                  <span className="text-sm">▾</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {careerHighlights.slice(1).map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-primary-foreground/80"
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-accent">Education</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Ph.D. in Software Engineering – Invertis University (2016)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>M.Tech. & MCA – UPTU Lucknow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
