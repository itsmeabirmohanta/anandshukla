import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileText, AlertCircle, Ban, Scale } from "lucide-react";
import { PageSkeleton } from "@/components/ui/skeleton-loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import { preventClickjacking } from "@/utils/security";

const Terms = () => {
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
              <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Terms of Service
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
                Welcome to the official website of Dr. Anand Shukla. By
                accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  Acceptance of Terms
                </h2>
              </div>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  By using this website, you confirm that you accept these Terms
                  of Service and agree to comply with them. If you do not agree
                  to these terms, you must not use this website.
                </p>
              </div>
            </div>

            {/* Use of Website */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Use of Website
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  This website is provided for informational purposes about Dr.
                  Anand Shukla's educational leadership, motivational speaking,
                  and professional services. You may:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    View and browse content for personal, non-commercial use
                  </li>
                  <li>
                    Contact us through provided forms for legitimate inquiries
                  </li>
                  <li>Share links to our content on social media platforms</li>
                  <li>
                    Request Dr. Anand Shukla for speaking engagements and
                    workshops
                  </li>
                </ul>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <div className="flex items-start gap-3 mb-4">
                <Ban className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  Prohibited Activities
                </h2>
              </div>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Use automated systems (bots, scrapers) to access the website
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    website
                  </li>
                  <li>Transmit viruses, malware, or any malicious code</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Harass, abuse, or harm others through the website</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>
                    Copy, modify, or distribute website content without
                    permission
                  </li>
                  <li>
                    Use the website for commercial purposes without
                    authorization
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Intellectual Property Rights
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  All content on this website, including but not limited to
                  text, images, videos, logos, graphics, and design elements, is
                  the property of Dr. Anand Shukla or licensed to us. This
                  content is protected by copyright, trademark, and other
                  intellectual property laws.
                </p>
                <p className="leading-relaxed">
                  You may not reproduce, distribute, modify, or create
                  derivative works from any content without explicit written
                  permission.
                </p>
              </div>
            </div>

            {/* User Submissions */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                User Submissions
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  Any content you submit through contact forms, invitation
                  requests, or other communication channels:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Must be accurate and truthful</li>
                  <li>Must not violate any third-party rights</li>
                  <li>Must not contain offensive or inappropriate content</li>
                  <li>May be used by us to respond to your inquiry</li>
                </ul>
              </div>
            </div>

            {/* Rate Limiting */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Rate Limiting and Security
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  To protect our website and ensure fair access for all users,
                  we implement rate limiting on certain actions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Form submissions are limited to prevent spam</li>
                  <li>
                    Excessive requests may result in temporary access
                    restrictions
                  </li>
                  <li>
                    We monitor for suspicious activity and may block malicious
                    users
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                  Disclaimer of Warranties
                </h2>
              </div>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  This website is provided "as is" without warranties of any
                  kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The website will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>The website is free of viruses or harmful components</li>
                  <li>Information provided is accurate or complete</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Limitation of Liability
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  To the fullest extent permitted by law, Dr. Anand Shukla shall
                  not be liable for any direct, indirect, incidental,
                  consequential, or punitive damages arising from your use of or
                  inability to use this website.
                </p>
              </div>
            </div>

            {/* External Links */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Links to External Websites
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. These
                  links are provided for your convenience only. We have no
                  control over these websites and are not responsible for their
                  content, privacy policies, or practices.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Changes to Terms
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms of Service at any
                  time. Changes will be effective immediately upon posting to
                  the website. Your continued use of the website after changes
                  are posted constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="border-l-4 border-accent pl-4 sm:pl-5 md:pl-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Governing Law
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground space-y-3">
                <p className="leading-relaxed">
                  These Terms of Service shall be governed by and construed in
                  accordance with applicable laws. Any disputes arising from
                  these terms or your use of the website shall be subject to the
                  exclusive jurisdiction of the appropriate courts.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Questions About Terms
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us through our website's contact form.
              </p>

              <Button
                onClick={() => navigate("/")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all"
              >
                Return to Homepage
              </Button>
            </div>

            {/* Acceptance Notice */}
            <div className="text-center pt-8 border-t border-accent/30">
              <p className="text-xs sm:text-sm text-muted-foreground">
                By using this website, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
