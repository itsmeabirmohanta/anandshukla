import { Button } from "@/components/ui/button";
import invitePhoto from "@/assets/invite-photo.jpg";

const Invite = () => {
  return (
    <section id="invite" className="bg-light-bg py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight relative inline-block">
              Invite Prof. (Dr.) Anand Shukla
              <br />
              <span className="text-accent">for your next event or growth journey</span>
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-accent transform translate-y-4"></span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Available for keynotes, panel discussions, academic workshops, and
              motivational talks on education leadership and innovation.
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() =>
                (window.location.href = "mailto:anandshukla0203@gmail.com")
              }
            >
              Invite Anand
            </Button>
          </div>

          <div className="animate-fade-up">
            <img
              src={invitePhoto}
              alt="Prof. Anand Shukla at an event"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invite;
