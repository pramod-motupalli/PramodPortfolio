
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const projects = [
  {
    title: "NeuraResume",
    link: "https://neuraresume.vercel.app/",
    description: "The backend API for NeuraResume, built with FastAPI and Python. It handles resume parsing, communicates with the Groq/Llama 3.3 LLM, and orchestrates the AI agents. It provides an interactive interface for users to upload resumes, view AI-powered insights, and download interview preparation materials.",
    image: "/neuraresume.png",
    tags: ["FastAPI", "Python", "AI/ML", "LLM"]
  },
  {
    title: "Chess.IO",
    link: "https://chess-io-2026.vercel.app/",
    description: "A full-stack Chess application where you can play against a Python-based AI agent,Custom Minimax algorithm with Alpha-Beta pruning and positional evaluation.",
    image: "/chess-io.png",
    tags: ["Python", "AI", "Minimax", "Game Dev"]
  },
  {
    title: "TeluguTilakam",
    link: "https://telugutilakam.jntugvcev.in/",
    description: "Developed a responsive website for Telugu Sahithi Samiti, integrating traditional design aesthetics with modern web technologies to showcase events, activities, and Telugu cultural identity.",
    image: "/uploads/WhatsApp Image 2025-08-26 at 13.06.56_a31336df.jpg",
    tags: ["Web Design", "Responsive", "Cultural"]
  },
  {
    title: "Gate Master",
    link: "https://gatemaster.vercel.app/",
    description: "A GATE exam test series is a structured set of mock tests designed to simulate the actual GATE exam, helping aspirants practice, assess performance, and improve time management.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyrAks-_SGD_Nj1LP6TQMsmqmJRyRKaTjbA&s",
    tags: ["React", "Education", "Testing"]
  },
  {
    title: "Squid Game",
    link: "http://squidgame2025.vercel.app",
    description: "A 3-level gamified challenge that tests algorithmic thinking. Built in a team of 3. Engaged 50+ users and boosted interaction by 30%.",
    image: "/uploads/eb839865-4ba1-4ed7-bfa3-08a0caea8fea.png",
    tags: ["React", "Gamification", "Team Project"]
  },
  {
    title: "MoneyMatrix",
    link: "https://moneymatrix2025.vercel.app/",
    description: "Real-time currency converter for 50+ currencies. Generated interactive charts using Pandas, Matplotlib, and Seaborn. Improved decision-making time by 35% in tests.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop",
    tags: ["Python", "Data Viz", "Real-time"]
  },
  
  
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.3s ease-out',
      }}
      className="h-full"
    >
      <Card className="border border-border/50 bg-card/30 transition-all duration-300 flex flex-col group h-full overflow-hidden relative hover:shadow-lg hover:border-border/80">
        
        <div className="relative w-full h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Floating tags */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-background/90 text-foreground border border-border/20 rounded-md backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <CardHeader className="relative z-20 pb-2">
          <CardTitle className="text-xl text-foreground font-heading tracking-tight group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow relative z-20">
          <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
        </CardContent>

        {project.link && (
          <CardFooter className="relative z-20 pt-0">
            <Button
              asChild
              variant="outline"
              className="w-full border-border/50 hover:bg-muted/50 text-foreground transition-all duration-300 group-hover:border-foreground/20"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github className="h-4 w-4" />
                <span>View Project</span>
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

