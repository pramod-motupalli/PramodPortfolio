
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Squid Game",
    link: "http://squidgame2025.vercel.app",
    description: "A 3-level gamified challenge that tests algorithmic thinking. Built in a team of 3. Engaged 50+ users and boosted interaction by 30%.",
    image: "/uploads/eb839865-4ba1-4ed7-bfa3-08a0caea8fea.png"
  },
  {
    title: "MoneyMatrix",
    link: "https://moneymatrix2025.vercel.app/",
    description: "Real-time currency converter for 50+ currencies. Generated interactive charts using Pandas, Matplotlib, and Seaborn. Improved decision-making time by 35% in tests.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=6000&auto=format&fit=crop"
  },{
    title: "Gate Master",
    link: "https://gatemaster.vercel.app/",
    description: "A GATE exam test series is a structured set of mock tests designed to simulate the actual GATE exam, helping aspirants practice, assess performance, and improve time management.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyrAks-_SGD_Nj1LP6TQMsmqmJRyRKaTjbA&s"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} className="bg-card border hover:border-primary/50 transition-all duration-300 flex flex-col group hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            {project.link && (
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};
