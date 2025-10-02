import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function Hero() {
   const targetDate = new Date("2025-11-23T00:00:00"); // 🎯 countdown target
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 text-center px-4 space-y-8">
        <div className="text-xs font-mono text-secondary animate-pulse mb-4">
          &gt; INITIALIZING SYSTEM...
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          <div className="flex flex-col items-center">
            <img 
              src="/TCU%20logo.png" 
              alt="TCUVERSE 2025 - INNOVATE TO INSPIRE"
              className="min-w-full h-auto"
            />
          </div>
        </h1>

        <div className="flex items-center justify-center space-x-2 text-accent text-xs font-mono mb-6">
          <div className="w-16 h-16 border-2 border-secondary rounded-full animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-secondary rounded-full" />
          </div>
          <div className="text-left">
            <div className="text-lg">THIS OCTOBER 31ST</div>
            <div className="text-lg">BE READY!</div>
          </div>
        </div>

         {/* Countdown Timer */}
       <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
      {Object.entries(countdown).map(([key, value]) => (
        <div key={key} className="border border-primary p-4 bg-card/50">
          <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
            {value}
          </div>
          <div className="text-xs font-mono text-muted-foreground uppercase">
            {key}
          </div>
        </div>
      ))}
    </div>


        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="bg-secondary text-background hover:bg-secondary/90 border-2 border-secondary text-lg px-8 py-6 font-mono"
          >
            Apply with Devfolio
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-background text-lg px-8 py-6 font-mono"
          >
            Guidelines
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-12 border-2 border-primary bg-primary/10 p-6 max-w-3xl mx-auto backdrop-blur-sm">
          <div className="text-xs font-mono text-accent mb-4">FOLLOW US</div>
          <div className="flex justify-center space-x-6">
            {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Discord'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-primary hover:text-secondary transition-colors text-sm font-mono"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
