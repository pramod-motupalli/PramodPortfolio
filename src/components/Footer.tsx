import { Github, Linkedin, Heart, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-border/50 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://github.com/pramod-motupalli" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 shadow-sm"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-blue-600/20 hover:text-blue-600 transition-all duration-300 shadow-sm"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-heading tracking-tight">Pramod Motupalli</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mt-4 border border-border/50 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            Made with <Heart className="w-4 h-4 text-foreground/50 fill-foreground/20" /> using React & Three.js
          </motion.div>

          <p className="text-xs text-muted-foreground/60 mt-4">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-8 bottom-8 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hidden md:block"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};
