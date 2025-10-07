import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import invitePhoto from "@/assets/invite-photo.png";
import { useRateLimiter } from "@/hooks/useRateLimiter";
import { RateLimitPresets } from "@/utils/rateLimiter";
import { toast } from "@/hooks/use-toast";
import { Mail, Calendar, Users, Award } from "lucide-react";

const Invite = () => {
  const { checkLimit } = useRateLimiter(RateLimitPresets.FORM_SUBMISSION);

  const handleInviteClick = () => {
    // Check rate limit before opening email client
    if (!checkLimit()) {
      return;
    }

    toast({
      title: "Opening Email Client",
      description: "Redirecting to your email application...",
    });

    window.location.href = "mailto:anandshukla0203@gmail.com";
  };

  const eventTypes = [
    {
      icon: Users,
      title: "Keynote Speeches",
      description: "Inspiring talks on leadership and innovation"
    },
    {
      icon: Calendar,
      title: "Panel Discussions",
      description: "Expert insights on education transformation"
    },
    {
      icon: Award,
      title: "Academic Workshops",
      description: "Hands-on sessions for institutions"
    },
    {
      icon: Mail,
      title: "Motivational Talks",
      description: "Empowering sessions for students & professionals"
    }
  ];

  return (
    <section id="invite" className="bg-gradient-to-br from-light-bg via-white to-light-bg py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 relative inline-block">
              Invite Dr. Anand Shukla
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-accent via-primary to-accent"></span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Transform your event with insights from a leader shaping the future of education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 animate-fade-up order-2 lg:order-1">
              {/* Event Types Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventTypes.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20 hover:border-accent/40 bg-white/80 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-2.5 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">
                            {event.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-xl p-6 sm:p-8 border border-accent/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Ready to make your event exceptional?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                  Whether it's a corporate event, academic conference, or student gathering, 
                  Dr. Shukla brings decades of expertise and a passion for inspiring growth.
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm sm:text-base md:text-lg px-8 sm:px-10 py-5 sm:py-6 transition-all hover:scale-105 hover:shadow-2xl w-full sm:w-auto group"
                  onClick={handleInviteClick}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Send Invitation
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="animate-fade-up order-1 lg:order-2">
              <div className="relative group">
                {/* Decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                
                <img
                  src={invitePhoto}
                  alt="Prof. Anand Shukla at an event"
                  className="relative rounded-xl shadow-2xl w-full max-w-lg mx-auto lg:mx-0 group-hover:scale-[1.02] transition-transform duration-300"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-4 animate-fade-up">
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    🎤 Available for Events
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Nationwide & International
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invite;
