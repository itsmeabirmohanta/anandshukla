import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, GraduationCap, Users, BookOpen } from "lucide-react";
import { PageSkeleton } from "@/components/ui/skeleton-loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import { preventClickjacking } from "@/utils/security";
import aboutPortrait from "@/assets/about-portrait.png";

const AboutPage = () => {
  const navigate = useNavigate();
  const { isLoading } = usePageLoader({ minLoadTime: 800 });

  useEffect(() => {
    preventClickjacking();
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <PageSkeleton />;
  }

  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "20+ Years of Leadership",
      description:
        "Leadership experience across India's top universities, building quality education systems aligned with NAAC, NIRF, NBA, QS and NEP 2020 standards.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Sr. Member of IEEE",
      description:
        "Active researcher in Software Engineering, bridging education and innovation while mentoring the next generation.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Institution Builder",
      description:
        "Worked across India's most respected universities to build quality education systems and empower the next generation of leaders.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research & Innovation",
      description:
        "Awarded for excellence in Software Engineering research and academic leadership, continuously contributing to the field.",
    },
  ];

  const positions = [
    {
      title: "Dean",
      organization: "Lovely Professional University",
      period: "Current",
      description:
        "Leading academic excellence and institutional development initiatives.",
    },
    {
      title: "Academic Leadership",
      organization: "Various Top Indian Universities",
      period: "20+ Years",
      description:
        "Built quality education systems aligned with national and international standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-white to-light-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto animate-fade-up">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-white/90 hover:text-accent hover:bg-accent/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="grid lg:grid-cols-[40%_60%] gap-8 sm:gap-10 lg:gap-14 items-center">
              {/* Image */}
              <div className="animate-fade-up">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="border-0 sm:border-0 md:border-0 border-white rounded-sm overflow-hidden shadow-2xl">
                    <img
                      src={aboutPortrait}
                      alt="Prof. (Dr.) Anand Shukla"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="text-white space-y-4 sm:space-y-5 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  Prof. (Dr.) Anand Shukla
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-accent font-light">
                  Education Leader & Motivational Speaker
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                  On a mission to inspire excellence in learning and life
                  through innovation, research, and motivation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
            {/* About Section */}
            <div className="animate-fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                About Me
              </h2>
              <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6 space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90">
                  I am a motivational speaker, education leader, and institution
                  builder. I am on a mission to inspire excellence in learning
                  and life through innovation, research, and motivation.
                </p>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90">
                  Currently serving as Dean at Lovely Professional University, I
                  have worked across India's most respected universities to
                  build quality education systems and empower the next
                  generation of leaders.
                </p>

                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90">
                  Honored as Sr. Member of IEEE and awarded for excellence in
                  Software Engineering research and academic leadership.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="animate-fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                Key Achievements
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center text-accent mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Position */}
            <div className="animate-fade-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
                Leadership Journey
              </h2>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-sm shadow-lg border-l-4 border-accent"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {position.title}
                      </h3>
                      <span className="text-sm sm:text-base font-semibold text-accent bg-accent/10 px-4 py-1 rounded">
                        {position.period}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground mb-2">
                      {position.organization}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-dark-bg p-8 sm:p-10 md:p-12 rounded-sm text-center animate-fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Collaborate?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                I'm always looking for opportunities to speak at events,
                collaborate on research, or help institutions build better
                education systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => navigate("/contact")}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6"
                >
                  Get in Touch
                </Button>
                <Button
                  onClick={() => navigate("/#invite")}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark-bg transition-all hover:scale-105 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6"
                >
                  Invite Me to Speak
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
