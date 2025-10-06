import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <h2 className="text-xl font-bold text-primary-foreground">
              Anand Shukla
            </h2>
            <p className="text-xs text-accent">
              Education Leader & Motivational Speaker
            </p>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              About Prof. (Dr.) Anand
            </button>
            <button
              onClick={() => scrollToSection("invite")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Invite Prof. (Dr.) Anand
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Workshops & Talks
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors"
            >
              Leadership Journey
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
