
import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Code2, Heart } from 'lucide-react';

const highlights = [
  'Full-stack web development',
  'Agentic AI & LLM Applications',
  'Real-time systems & performance tuning',
  'Clean, accessible UI & UX'
];

const stats = [
  { label: 'Projects Completed', value: '15+', icon: Code2 },
  { label: 'Technologies', value: '20+', icon: Heart },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="about" title="About Me">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Split Layout: Photo & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Large Landscape Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full relative group"
          >
            {/* Decorative backdrop elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-[8px] border-border shadow-2xl ring-1 ring-border/20 bg-muted">
              <img 
                src="/PRAMOD4.jpeg" 
                alt="Pramod Motupalli" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
              
              {/* Overlay with Name on Hover (Optional, keeping it clean for now) */}
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-2 px-6 py-3 bg-card border border-border/50 rounded-full shadow-xl backdrop-blur-md"
            >
               <Code2 className="text-primary w-5 h-5" />
               <span className="font-bold text-foreground">Full Stack Dev</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground font-heading tracking-tight mb-2">
                Pramod Motupalli
              </h3>
              <p className="text-xl text-primary font-medium">Building bridges between data & design</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Innovative and driven Computer Science student at <span className="text-foreground font-medium">JNTU Gurajada Vizianagaram</span>. 
              I specialize in building full-stack web applications and machine learning solutions, focusing on performance, accessibility, and delightful user experiences.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <a href="/Pramod Motupalli Resume.pdf" download="Pramod_Motupalli_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Stats & Side Info (Reorganized) */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            {/* Quick Facts */}
            <Card className="border border-border/40 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Quick Facts
                </h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span>Location</span>
                    <span className="text-foreground font-medium">Hyderabad, India</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span>Education</span>
                    <span className="text-foreground font-medium">B.Tech Hons(CSE)</span>
                  </div>
                   <div className="flex justify-between">
                    <span>Availability</span>
                    <span className="text-foreground font-medium">Open to Work</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border border-border/40 bg-card/30 backdrop-blur-sm md:col-span-2">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" /> Tech & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Tailwind', 'SQL','Java', 'FastAPI', 'Agentic AI','Django', 'Git'].map((t) => (
                    <Badge key={t} variant="secondary" className="px-3 py-1">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
        </motion.div>

      </div>
    </Section>
  );
};
