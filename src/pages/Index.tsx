import HeroSection from "@/components/HeroSection";
import QuickQuestions from "@/components/QuickQuestions";
import ChatSection from "@/components/ChatSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Smart Campus Assistant - Your AI Guide to Campus Life";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get instant answers about class schedules, library hours, dining options, and campus navigation with our AI-powered Smart Campus Assistant.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuickQuestions />
      <ChatSection />
      
      {/* Footer */}
      <footer className="bg-campus-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Smart Campus Assistant</p>
          <p className="text-sm opacity-80">Making campus life easier, one question at a time 🎓</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
