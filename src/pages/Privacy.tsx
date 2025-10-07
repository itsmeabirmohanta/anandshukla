import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, Mail } from "lucide-react";
import { PageSkeleton } from "@/components/ui/skeleton-loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import { preventClickjacking } from "@/utils/security";

const Privacy = () => {
  const navigate = useNavigate();
  const { isLoading } = usePageLoader({ minLoadTime: 800 });

  useEffect(() => {
    preventClickjacking();
    window.scrollTo(0, 0);
  }, []);

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
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Privacy Policy
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Last Updated: October 7, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 animate-fade-up">
            {/* Introduction */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Dr. Anand Shukla ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website.
              </p>
            </div>

            {/* Information Collection */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  Information We Collect
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Personal Information
                  </h3>
                  <p className="leading-relaxed">
                    When you use our contact forms or invitation requests, we
                    may collect:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Name and professional title</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Organization or institution name</li>
                    <li>Event details and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Automatically Collected Information
                  </h3>
                  <p className="leading-relaxed">
                    We may automatically collect certain information about your
                    device, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address (anonymized)</li>
                    <li>Usage patterns and navigation data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  How We Use Your Information
                </h2>
              </div>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and invitation requests</li>
                  <li>Provide and maintain our website services</li>
                  <li>
                    Send you information about workshops, talks, and events
                  </li>
                  <li>Improve our website and user experience</li>
                  <li>
                    Detect and prevent security threats and fraudulent
                    activities
                  </li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  Data Security
                </h2>
              </div>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit</li>
                  <li>Rate limiting to prevent abuse</li>
                  <li>Input sanitization and validation</li>
                  <li>CSRF protection mechanisms</li>
                  <li>Regular security audits and updates</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100%
                  secure. While we strive to use commercially acceptable means
                  to protect your data, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Third-Party Services
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  these external sites. We encourage you to review their privacy
                  policies before providing any personal information.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Your Rights
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  Contact Us
                </h2>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us through our website's
                contact form.
              </p>

              <Button
                onClick={() => navigate("/")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all"
              >
                Go to Contact Section
              </Button>
            </div>

            {/* Updates */}
            <div className="text-center pt-8 border-t border-accent/30">
              <p className="text-xs sm:text-sm text-muted-foreground">
                We may update this Privacy Policy from time to time. The latest
                version will always be posted on this page with the "Last
                Updated" date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
