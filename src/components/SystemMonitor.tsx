import { useEffect, useState } from 'react';

interface SystemStat {
  label: string;
  value: string;
}

export default function SystemMonitor() {
  const [stats, setStats] = useState<SystemStat[]>([
    { label: 'CPU', value: '0%' },
    { label: 'MEM', value: '0%' },
    { label: 'NET', value: '0 KB/s' },
    { label: 'TEMP', value: '0°C' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats([
        { label: 'CPU', value: `${Math.floor(Math.random() * 40 + 30)}%` },
        { label: 'MEM', value: `${Math.floor(Math.random() * 20 + 70)}%` },
        { label: 'NET', value: `${Math.floor(Math.random() * 500 + 100)} KB/s` },
        { label: 'TEMP', value: `${Math.floor(Math.random() * 20 + 45)}°C` },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Left */}
      <div className="fixed top-20 left-4 z-40 space-y-1 text-xs font-mono text-accent">
        {stats.map((stat) => (
          <div key={stat.label}>
            {stat.label}: <span className="text-primary">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Top Right */}
      <div className="fixed top-20 right-4 z-40 space-y-1 text-xs font-mono text-accent text-right">
        <div>PWR: <span className="text-primary">92%</span></div>
        <div>SIG: <span className="text-primary">-44 dBm</span></div>
        <div>LAT: <span className="text-primary">142ms</span></div>
        <div>ERR: <span className="text-primary">0</span></div>
      </div>

      {/* Bottom Left */}
      <div className="fixed bottom-4 left-4 z-40 font-mono text-xs text-accent">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary"
                style={{ height: `${Math.random() * 20 + 10}px` }}
              />
            ))}
          </div>
        </div>
        <div className="mt-1">ID: <span className="text-primary">TCUVERSE2025</span></div>
      </div>

      {/* Bottom Right */}
      <div className="fixed bottom-4 right-4 z-40 font-mono text-xs text-accent text-right">
        <div>PWR: <span className="text-primary">89%</span></div>
        <div>SIG: <span className="text-primary">-32 dBm</span></div>
        <div>LAT: <span className="text-primary">73ms</span></div>
        <div>ERR: <span className="text-primary">0</span></div>
      </div>

      {/* Corner Brackets */}
      <div className="fixed top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary z-40" />
      <div className="fixed top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary z-40" />
      <div className="fixed bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary z-40" />
      <div className="fixed bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary z-40" />
    </>
  );
}
