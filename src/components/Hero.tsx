
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary/90 to-blue-400 mb-4 pb-2">
          Motupalli S N M S Durga Pramod
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
         Hi, I'm Pramod — a passionate Full Stack Developer and CSE undergrad focused on MERN stack and Machine Learning. I build real-time, scalable web apps with clean UI and powerful backend logic. Let's create impactful digital experiences together.
</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild variant="outline" size="lg">
            <a href="https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/pramod-motupalli" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
        </div>
        <div>
          <Button size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
         <Button variant="secondary" size="lg" className="ml-4 bg-slate-800">
  <a
  href="/Pramod Motupalli_Full_Stack_Developer_Resume.pdf"
  download="Pramod Motupalli_Resume.pdf"
  className="text-white"
>
  Download Resume
</a>

</Button>


        </div>
      </div>
    </section>
  );
};
