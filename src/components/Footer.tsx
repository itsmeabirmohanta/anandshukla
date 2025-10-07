import { Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-secondary py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Dr. Anand Shukla
          </h3>
          <p className="text-xs sm:text-sm text-accent">
            Education Leader & Motivational Speaker
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm sm:text-base text-foreground hover:text-accent transition-colors"
          >
            About Anand
          </button>
          <button
            onClick={() => scrollToSection("invite")}
            className="text-sm sm:text-base text-foreground hover:text-accent transition-colors"
          >
            Invite Anand
          </button>
          <button
            onClick={() => scrollToSection("videos")}
            className="text-sm sm:text-base text-foreground hover:text-accent transition-colors"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm sm:text-base text-foreground hover:text-accent transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a
            href="https://www.linkedin.com/in/prof-dr-anand-shukla-59342838"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
          <a href="#" className="hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Disclaimer
          </a>
        </div>

        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <a
            href="https://abirmahanta.site"
            className="hover:text-accent transition-colors"
          >
            <p>Designed by Abir Media Group</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
