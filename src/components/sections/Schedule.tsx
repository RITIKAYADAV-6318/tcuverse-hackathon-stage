import { Calendar } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="min-h-screen flex items-center justify-center px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Calendar className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          SCHEDULE
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          Day-by-day breakdown of workshops, hacking sessions, and judging rounds.
        </p>

        <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Schedule items will go here */}
            <div className="text-left border-l-4 border-primary pl-4">
              <h3 className="text-2xl font-bold">Day 1</h3>
              <p className="text-muted-foreground">October 31, 2025</p>
              {/* Add schedule items */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
