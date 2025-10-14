import React, { useEffect, useState } from 'react';
import {
  Atom,
  BarChart3,
  BrainCircuit,
  Code,
  Database,
  Flame,
  FunctionSquare,
  Github,
  GitBranch,
  LayoutDashboard,
  LineChart,
  Network,
  Palette,
  Server,
  Table,
  Wind,
  
} from 'lucide-react';

// Updated fresh gradients for each technology card
const technologies = [
  { name: "Python", icon: <FunctionSquare size={20} />, gradient: "from-[#4F46E5] via-[#7C3AED] to-[#EC4899]" },
  { name: "Java", icon: <Table size={20} />, gradient: "from-[#F59E0B] via-[#EF4444] to-[#DC2626]" },
  { name: "C", icon: <Database size={20} />, gradient: "from-[#10B981] via-[#059669] to-[#047857]" },
  { name: "C++", icon: <BrainCircuit size={20} />, gradient: "from-[#06B6D4] via-[#0891B2] to-[#0E7490]" },
  { name: "JavaScript", icon: <Code size={20} />, gradient: "from-[#FBBF24] via-[#F59E0B] to-[#D97706]" },
  { name: "React.js", icon: <Atom size={20} />, gradient: "from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]" },
  { name: "Tailwind CSS", icon: <Wind size={20} />, gradient: "from-[#14B8A6] via-[#0D9488] to-[#0F766E]" },
  { name: "HTML", icon: <LayoutDashboard size={20} />, gradient: "from-[#F97316] via-[#EA580C] to-[#DC2626]" },
  { name: "CSS", icon: <Palette size={20} />, gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]" },
  { name: "Node.js", icon: <Server size={20} />, gradient: "from-[#22C55E] via-[#16A34A] to-[#15803D]" },
  { name: "Express.js", icon: <Network size={20} />, gradient: "from-[#64748B] via-[#475569] to-[#334155]" },
  { name: "MongoDB", icon: <BarChart3 size={20} />, gradient: "from-[#059669] via-[#047857] to-[#065F46]" },
  { name: "NumPy", icon: <LineChart size={20} />, gradient: "from-[#2563EB] via-[#1D4ED8] to-[#1E40AF]" },
  { name: "Pandas", icon: <Table size={20} />, gradient: "from-[#7C2D12] via-[#9A3412] to-[#DC2626]" },
  { name: "Matplotlib", icon: <BarChart3 size={20} />, gradient: "from-[#15803D] via-[#16A34A] to-[#22C55E]" },
  { name: "Seaborn", icon: <Palette size={20} />, gradient: "from-[#0EA5E9] via-[#0284C7] to-[#0369A1]" },
  { name: "Scikit-learn", icon: <BrainCircuit size={20} />, gradient: "from-[#F59E0B] via-[#D97706] to-[#B45309]" },
  { name: "Tkinter", icon: <LayoutDashboard size={20} />, gradient: "from-[#6366F1] via-[#4F46E5] to-[#4338CA]" },
  { name: "Git", icon: <GitBranch size={20} />, gradient: "from-[#EF4444] via-[#DC2626] to-[#B91C1C]" },
  { name: "GitHub", icon: <Github size={20} />, gradient: "from-[#374151] via-[#1F2937] to-[#111827]" },
  { name: "REST APIs", icon: <Network size={20} />, gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]" },
  { name: "Firebase", icon: <Flame size={20} />, gradient: "from-[#F59E0B] via-[#EF4444] to-[#DC2626]" },
];

// Generate spherical coordinates for positioning
const generateSpherePositions = (count: number, radius: number) => {
  const positions = [];
  const golden = (1 + Math.sqrt(5)) / 2; // Golden ratio
  
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = golden * i * 2 * Math.PI;
    
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    
    positions.push({
      x: x * radius,
      y: y * radius,
      z: z * radius,
    });
  }
  
  return positions;
};

export const TechCloud = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const sphereRadius = 200;
  const positions = generateSpherePositions(technologies.length, sphereRadius);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-2 sm:px-8 transition-all duration-500 overflow-hidden">
      <h2 className='text-4xl font-bold text-blue-600 text-center'>Tech Cloud</h2>
      <div className="flex justify-center items-center min-h-[420px] sm:min-h-[500px]">
        <div 
          className="relative w-[500px] h-[500px]"
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg) rotateX(10deg)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {technologies.map((tech, index) => {
              const position = positions[index];
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={tech.name}
                  className={`
                    absolute flex flex-col items-center justify-center rounded-xl shadow-lg cursor-pointer
                    bg-gradient-to-br ${tech.gradient} 
                    w-16 h-16 text-center transition-all duration-300
                    border border-white/20 backdrop-blur-sm
                    ${isHovered ? 'scale-125 z-20' : 'hover:scale-110'}
                  `}
                  style={{
                    transform: `
                      translate3d(${position.x}px, ${position.y}px, ${position.z}px)
                      translate(-50%, -50%)
                      rotateY(${-rotation}deg)
                      ${isHovered ? 'rotateX(-10deg)' : 'rotateX(-10deg)'}
                    `,
                    left: '50%',
                    top: '50%',
                    boxShadow: isHovered 
                      ? '0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)'
                      : '0 4px 15px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.15)',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center justify-center mb-1 text-white drop-shadow-md">
                    {tech.icon}
                  </div>
                  <span className="font-bold text-xs text-white tracking-wide leading-tight">
                    {tech.name}
                  </span>
                  
                  {isHovered && (
                    <div className="absolute -inset-1 rounded-xl blur-sm bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-75 -z-10"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
