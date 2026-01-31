
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import { FloatingShapes } from './FloatingShapes';
import { Typewriter } from './AnimatedText';
import { motion } from 'framer-motion';

export const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'Machine Learning Enthusiast',
    'Problem Solver',
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* 3D Floating Shapes Background - Keeping opacity low for minimal look */}
      <div className="opacity-20">
        <FloatingShapes />
      </div>
      
      {/* Particle Background - Subtle */}
      <div className="opacity-40">
        <ParticleBackground />
      </div>
      
      {/* Gradient Grid Background - Very subtle */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-medium mb-6 tracking-wide"
          >
            HELLO, I'M
          </motion.p>

          {/* Name with minimalist gradient animation */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 pb-2 tracking-tight font-heading"
          >
            <span className="text-foreground">
              Pramod Motupalli
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center font-heading font-light"
          >
            <Typewriter texts={roles} className="font-medium text-foreground" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building <span className="text-foreground font-semibold">scalable web applications</span> with precision and clarity.
          </motion.p>
          
          {/* ... buttons ... */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <a href="https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <a href="https://github.com/pramod-motupalli" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                <span>GitHub</span>
              </a>
            </Button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Get in Touch</span>
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="glass-card hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <a
                href="/Pramod Motupalli Resume.pdf"
                download="Pramod_Motupalli_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

