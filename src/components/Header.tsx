import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    // If we're on the home page, just scroll
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with section hash
      navigate(`/#${sectionId}`);
    }
  };

  // Handle scroll to section on page load if hash is present
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg shadow-lg" : "bg-dark-bg/95 md:bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-primary-foreground">
              Dr. Anand Shukla
            </h2>
            <p className="text-xs text-accent hidden sm:block">
              Education Leader & Motivational Speaker
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8">
            <Link
              to="/about"
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              About
            </Link>
            <button
              onClick={() => handleNavigation("invite")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Invite
            </button>
            <button
              onClick={() => handleNavigation("videos")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Workshops & Talks
            </button>
            <button
              onClick={() => handleNavigation("message")}
              className="text-sm lg:text-sm xl:text-base text-primary-foreground hover:text-accent transition-colors whitespace-nowrap"
            >
              Message
            </button>
            <Button
              onClick={() => navigate("/contact")}
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
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              About
            </Link>
            <button
              onClick={() => handleNavigation("invite")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              Invite
            </button>
            <button
              onClick={() => handleNavigation("videos")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              Workshops & Talks
            </button>
            <button
              onClick={() => handleNavigation("message")}
              className="block w-full text-left px-4 py-3 text-primary-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded"
            >
              Message
            </button>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact");
              }}
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
