import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedOn from "@/components/FeaturedOn";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Message from "@/components/Message";
import Invite from "@/components/Invite";
import Footer from "@/components/Footer";
import { PageSkeleton } from "@/components/ui/skeleton-loader";
import { WelcomeLoader } from "@/components/ui/welcome-loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { preventClickjacking } from "@/utils/security";

const Index = () => {
  const { isLoading } = usePageLoader({
    minLoadTime: 1000,
  });
  const isFirstVisit = useFirstVisit();
  const [showWelcome, setShowWelcome] = useState(false);

  // Security: Prevent clickjacking
  useEffect(() => {
    preventClickjacking();
  }, []);

  // Check if we should show welcome loader
  useEffect(() => {
    if (isFirstVisit === true) {
      setShowWelcome(true);
    }
  }, [isFirstVisit]);

  // Show welcome loader for first-time visitors
  if (showWelcome) {
    return <WelcomeLoader onComplete={() => setShowWelcome(false)} />;
  }

  // Show regular page loader for returning visitors or after welcome
  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedOn />
      <About />
      <Videos />
      <Message />
      <Invite />
      <Footer />
    </div>
  );
};

export default Index;
