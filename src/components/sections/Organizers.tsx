import { Briefcase } from 'lucide-react';

export default function Organizers() {
  return (
    <section id="organizers" className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Briefcase className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          ORGANIZERS
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          Meet the team bringing TCU verse Hackathon to life.
        </p>

        <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Organizer cards will go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
