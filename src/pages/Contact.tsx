import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { PageSkeleton } from "@/components/ui/skeleton-loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import {
  preventClickjacking,
  sanitizeHTML,
  isValidEmail,
  isValidPhone,
} from "@/utils/security";
import { useRateLimiter } from "@/hooks/useRateLimiter";
import { RateLimitPresets } from "@/utils/rateLimiter";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const navigate = useNavigate();
  const { isLoading } = usePageLoader({ minLoadTime: 800 });
  const { checkLimit } = useRateLimiter({
    ...RateLimitPresets.FORM_SUBMISSION,
    storageKey: "contact-form",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    preventClickjacking();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    if (!checkLimit()) {
      return; // Toast is handled by the hook
    }

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeHTML(formData.name),
      email: sanitizeHTML(formData.email),
      phone: sanitizeHTML(formData.phone),
      organization: sanitizeHTML(formData.organization),
      subject: sanitizeHTML(formData.subject),
      message: sanitizeHTML(formData.message),
    };

    // Create mailto link
    const mailtoSubject = encodeURIComponent(
      sanitizedData.subject || "Contact Inquiry from Website"
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nPhone: ${sanitizedData.phone}\nOrganization: ${sanitizedData.organization}\n\nMessage:\n${sanitizedData.message}`
    );
    const mailtoLink = `mailto:contact@example.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description:
        "Your default email client will open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
    });
  };

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-white to-light-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-white/90 hover:text-accent hover:bg-accent/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Get in Touch
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Have a question or want to invite Dr. Anand Shukla for a speaking
              engagement? Reach out through the form below or use the contact
              information provided.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
              {/* Contact Form */}
              <div className="animate-fade-up">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Organization/Institution
                      </label>
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Your organization name"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us about your inquiry or event details..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. Your information will be kept private
                      and secure.
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8 animate-fade-up">
                {/* Contact Cards */}
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          contact@example.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Phone
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Location
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          Available for speaking engagements
                          <br />
                          across India and internationally
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <Calendar className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Response Time
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          Typically within 24-48 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Invite Card */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Speaking Engagements
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    Invite Dr. Anand Shukla to speak at your university,
                    conference, or corporate event. Topics include leadership,
                    education innovation, and motivational speaking.
                  </p>
                  <Button
                    onClick={() => navigate("/#invite")}
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    View Invitation Details
                  </Button>
                </div>

                {/* Social Proof */}
                <div className="bg-gradient-to-br from-dark-bg to-dark-bg/90 text-white rounded-lg p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    Trusted by Leading Institutions
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    Dr. Anand Shukla has delivered impactful talks at
                    prestigious universities and organizations across India,
                    inspiring thousands of students and professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
