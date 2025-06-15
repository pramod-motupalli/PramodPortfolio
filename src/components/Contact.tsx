
import { Section } from './Section';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-muted-foreground mb-12">
          Have a question or want to work together? Feel free to reach out.
          My inbox is always open!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="mailto:motupallipramod21@gmail.com" className="block group">
            <Card className="p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl dark:group-hover:shadow-primary/20 group-hover:border-primary/50 text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Pramod's Mail</h3>
              </div>
            </Card>
          </a>
          
          <a href="https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255" target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl dark:group-hover:shadow-primary/20 group-hover:border-primary/50 text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Pramod's LinkedIn</h3>
              </div>
            </Card>
          </a>
          
          <a href="https://github.com/pramod-motupalli" target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl dark:group-hover:shadow-primary/20 group-hover:border-primary/50 text-center">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Pramod's GitHub</h3>
              </div>
            </Card>
          </a>
        </div>
      </div>
    </Section>
  );
};
