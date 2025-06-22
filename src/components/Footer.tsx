import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#e6f0fd] via-[#e3f5ff] to-[#c6e6fb] dark:from-[#223058] dark:via-[#21375a] dark:to-[#090e19] py-4 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-2">
          <a href="https://github.com/pramod-motupalli" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-150">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-150">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Motupalli S N M S Durga Pramod. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
