import { Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Anand Shukla</h3>
          <p className="text-sm text-accent">Education Leader & Motivational Speaker</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-accent transition-colors"
          >
            About Himeesh
          </button>
          <button
            onClick={() => scrollToSection("invite")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Invite Himeesh
          </button>
          <button
            onClick={() => scrollToSection("videos")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/prof-dr-anand-shukla-59342838"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-muted-foreground">
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

        <div className="text-center text-sm text-muted-foreground">
          <p>Designed by HAS Technovyas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
