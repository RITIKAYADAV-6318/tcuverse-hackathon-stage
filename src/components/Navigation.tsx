import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'THEMES', href: '#themes' },
  { name: 'SCHEDULE', href: '#schedule' },
  { name: 'GLORY', href: '#glory' },
  { name: 'SPONSORS', href: '#sponsors' },
  { name: 'APPLY FOR MENTOR', href: '#mentor' },
  { name: 'CREWS', href: '#crews' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-glow">TCU_VERSE</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-xs font-mono text-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/50"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-xs font-mono text-foreground hover:text-primary transition-colors border border-primary/20 hover:border-primary"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
