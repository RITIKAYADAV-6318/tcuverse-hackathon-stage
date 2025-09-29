import { Calendar, Trophy, Users, Briefcase, UserPlus, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const sections = [
  {
    id: 'themes',
    icon: Trophy,
    title: 'THEMES',
    content: 'Explore cutting-edge hackathon themes across AI, Web3, IoT, and more.',
  },
  {
    id: 'schedule',
    icon: Calendar,
    title: 'SCHEDULE',
    content: 'Day-by-day breakdown of workshops, hacking sessions, and judging rounds.',
  },
  {
    id: 'glory',
    icon: Trophy,
    title: 'GLORY',
    content: 'Hall of fame showcasing previous winners and their legendary projects.',
  },
  {
    id: 'sponsors',
    icon: Briefcase,
    title: 'SPONSORS',
    content: 'Our incredible partners making TCU verse Hackathon possible.',
  },
  {
    id: 'mentor',
    icon: UserPlus,
    title: 'APPLY FOR MENTOR',
    content: 'Share your expertise and guide the next generation of innovators.',
  },
  {
    id: 'crews',
    icon: Users,
    title: 'CREWS',
    content: 'Meet the organizing team behind TCU verse Hackathon 2025.',
  },
  {
    id: 'contact',
    icon: MessageSquare,
    title: 'CONTACT',
    content: 'Get in touch with us for any queries or collaborations.',
  },
];

export default function Sections() {
  return (
    <div className="py-20">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center px-4 ${
            index % 2 === 0 ? 'bg-background' : 'bg-card/30'
          }`}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <section.icon className="w-16 h-16 text-primary animate-float" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
              {section.title}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
              {section.content}
            </p>

            <div className="border border-primary p-8 bg-card/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-left">
                <div className="border border-accent/30 p-4">
                  <div className="text-accent mb-2">&gt; STATUS:</div>
                  <div className="text-primary">ACTIVE</div>
                </div>
                <div className="border border-accent/30 p-4">
                  <div className="text-accent mb-2">&gt; PRIORITY:</div>
                  <div className="text-secondary">HIGH</div>
                </div>
                <div className="border border-accent/30 p-4">
                  <div className="text-accent mb-2">&gt; ACCESS:</div>
                  <div className="text-primary">GRANTED</div>
                </div>
              </div>

              {section.id === 'mentor' && (
                <Button 
                  size="lg"
                  className="mt-6 bg-primary text-background hover:bg-primary/90 border-2 border-primary font-mono"
                >
                  APPLY NOW
                </Button>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
