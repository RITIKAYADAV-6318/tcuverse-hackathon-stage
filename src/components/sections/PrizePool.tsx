import { Trophy } from 'lucide-react';

export default function PrizePool() {
  return (
    <section id="prize-pool" className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Trophy className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          PRIZE POOL
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
          Amazing prizes await the most innovative projects.
        </p>

        <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prize tiers will go here */}
            <div className="border border-accent/30 p-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">1st Place</h3>
              <p className="text-3xl font-mono">$5,000</p>
            </div>
            <div className="border border-accent/30 p-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">2nd Place</h3>
              <p className="text-3xl font-mono">$3,000</p>
            </div>
            <div className="border border-accent/30 p-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">3rd Place</h3>
              <p className="text-3xl font-mono">$1,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
