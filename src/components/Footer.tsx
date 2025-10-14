import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#e6f0fd] via-[#e3f5ff] to-[#c6e6fb] dark:from-[#223058] dark:via-[#21375a] dark:to-[#090e19] py-6 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-3">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/pramod-motupalli" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-150 p-2 rounded-md hover:bg-white/5">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-150 p-2 rounded-md hover:bg-white/5">
              <Linkedin size={24} />
            </a>
          </div>
          <div className="text-sm text-muted-foreground">Interested in collaborating? <a href="#contact" className="text-primary hover:underline">Get in touch</a></div>
        </div>
        <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Motupalli S N M S Durga Pramod. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
