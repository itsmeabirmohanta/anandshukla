import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg shadow-lg" : "bg-dark-bg/95 md:bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-primary-foreground">
              Dr. Anand Shukla
            </h2>
            <p className="text-xs text-accent hidden sm:block">
              Education Leader & Motivational Speaker
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("invite")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Invite
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Workshops & Talks
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Leadership Journey
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-sm xl:text-base px-4 xl:px-6"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary-foreground p-2 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-fade-up">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("invite")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              Invite
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              Workshops & Talks
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              Leadership Journey
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              Contact Me
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
