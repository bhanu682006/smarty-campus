import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Calendar, MapPin } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={campusHero}
          alt="Modern university campus with students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-campus-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Smart
            <span className="block bg-gradient-to-r from-white to-campus-secondary bg-clip-text text-transparent">
              Campus Assistant
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Get instant answers about class schedules, library hours, dining options, 
            and campus navigation. Your friendly AI companion for campus life! 🎓
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chatting
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Quick Access Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Schedules</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Library</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Dining</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;