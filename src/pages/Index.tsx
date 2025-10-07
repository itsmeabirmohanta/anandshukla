import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedOn from "@/components/FeaturedOn";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Message from "@/components/Message";
import Invite from "@/components/Invite";
import Footer from "@/components/Footer";
import { PageSkeleton } from "@/components/ui/skeleton-loader";
import { usePageLoader } from "@/hooks/usePageLoader";
import { preventClickjacking } from "@/utils/security";

const Index = () => {
  const { isLoading } = usePageLoader({ 
    minLoadTime: 1000,
  });

  // Security: Prevent clickjacking
  useEffect(() => {
    preventClickjacking();
  }, []);

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
