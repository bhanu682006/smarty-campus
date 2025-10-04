import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Utensils, BookOpen, HelpCircle } from "lucide-react";

const QuickQuestions = () => {
  const categories = [
    {
      icon: Calendar,
      title: "Class Schedules",
      questions: [
        "What's my next class?",
        "Show me today's schedule",
        "When is my Math lecture?",
        "Are there any class cancellations?"
      ],
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Library Services",
      questions: [
        "What are library hours?",
        "Book a study room",
        "Where can I print documents?",
        "Library late fees policy"
      ],
      color: "text-green-600"
    },
    {
      icon: Utensils,
      title: "Dining & Food",
      questions: [
        "What's on the menu today?",
        "Dining hall hours",
        "Best coffee spots on campus",
        "Food delivery to dorms"
      ],
      color: "text-orange-600"
    },
    {
      icon: MapPin,
      title: "Campus Navigation",
      questions: [
        "Where is Building C?",
        "Parking availability",
        "Campus shuttle schedule",
        "Nearest ATM location"
      ],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Administrative",
      questions: [
        "Registration deadlines",
        "How to change my major?",
        "Financial aid office hours",
        "Grade appeal process"
      ],
      color: "text-red-600"
    },
    {
      icon: HelpCircle,
      title: "General Help",
      questions: [
        "Student support services",
        "Wi-Fi connection issues",
        "Lost and found",
        "Emergency contacts"
      ],
      color: "text-indigo-600"
    }
  ];

  const handleQuestionClick = (question: string) => {
    document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const input = document.querySelector('input[placeholder*="Ask me anything"]') as HTMLInputElement;
      if (input) {
        input.value = question;
        input.focus();
      }
    }, 500);
  };

  return (
    <section id="questions" className="py-16 bg-campus-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            Quick Help Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a category below to get instant answers to common campus questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-campus transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg bg-gray-100 ${category.color} mr-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.questions.map((question, qIndex) => (
                  <Button
                    key={qIndex}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-campus-primary/5 hover:text-campus-primary"
                    onClick={() => handleQuestionClick(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickQuestions;