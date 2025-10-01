import { MessageSquare } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <MessageSquare className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          ABOUT US
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          Learn more about TCU verse Hackathon 2025 and our mission to foster innovation.
        </p>

        <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
          {/* Add your about us content here */}
          <p className="mb-4">TCU verse Hackathon is a premier event bringing together innovators, developers, and creators to build the future.</p>
        </div>
      </div>
    </section>
  );
}
