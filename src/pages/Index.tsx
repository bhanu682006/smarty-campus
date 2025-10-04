import HeroSection from "@/components/HeroSection";
import QuickQuestions from "@/components/QuickQuestions";
import ChatSection from "@/components/ChatSection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, User as UserIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Smart Campus Assistant - Your AI Guide to Campus Life";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get instant answers about class schedules, library hours, dining options, and campus navigation with our AI-powered Smart Campus Assistant.');
    }

    // Check auth status
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-campus-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* User Bar */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2">
        <div className="flex items-center gap-2 px-3">
          <UserIcon className="h-4 w-4 text-campus-primary" />
          <span className="text-sm font-medium">{user?.email}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

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
