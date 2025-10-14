import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Code2, Database, Layout, Brain, GitBranch, Server, ChartBar } from 'lucide-react';

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "Java", "C", "JavaScript"],
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    name: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    name: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express.js", "Django"],
    gradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    name: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    gradient: "from-orange-500/10 to-yellow-500/10"
  },
  
  {
    name: "Tools & Technologies",
    icon: <GitBranch className="w-5 h-5" />,
    skills: ["Git", "GitHub", "REST APIs", "Postman", "Tkinter"],
    gradient: "from-indigo-500/10 to-purple-500/10"
  }
];

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.1, freezeOnceVisible: true });

  return (
    <section id="skills" className="py-16 md:py-24">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4">
            A comprehensive overview of my technical expertise and tools I work with regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.name}
              className={cn(
                "overflow-hidden border transition-all duration-300",
                "hover:border-primary/50 hover:shadow-lg group",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
                background: `linear-gradient(135deg, ${category.gradient})`
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={cn(
                        "bg-background/50 backdrop-blur-sm",
                        "transition-all duration-300",
                        "hover:bg-primary/10 hover:border-primary group-hover:border-primary/50"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
