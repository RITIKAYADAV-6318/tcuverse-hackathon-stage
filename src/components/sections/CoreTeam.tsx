import { Users } from 'lucide-react';

export default function CoreTeam() {
  return (
    <section id="core-team" className="min-h-screen flex items-center justify-center px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Users className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          CORE TEAM
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          The driving force behind TCU verse Hackathon 2025.
        </p>

        <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team members will go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
