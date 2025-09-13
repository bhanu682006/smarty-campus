import ChatInterface from "./ChatInterface";

const ChatSection = () => {
  return (
    <section id="chat" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-primary mb-4">
            Chat with Your Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask questions about schedules, campus facilities, dining options, and more. 
            Your AI assistant is ready to help 24/7!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatInterface />
        </div>
      </div>
    </section>
  );
};

export default ChatSection;