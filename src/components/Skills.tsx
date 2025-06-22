import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const allSkillsList = [
  "Python", "Java", "C", "C++", "JavaScript",
  "React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite",
  "Node.js", "Express.js", "Django",
  "MongoDB", "PostgreSQL", "MySQL", "Firebase",
  "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Tkinter",
  "Git", "GitHub", "REST APIs","Postman"
];

const shuffledSkills = [...allSkillsList].sort(() => Math.random() - 0.5);

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.1, freezeOnceVisible: true });

  return (
    <section id="skills" className="py-12">
      <div ref={containerRef} className="w-full">
        <h2 className="text-4xl font-bold text-blue-600 text-center">Skills</h2>
        <br />
        <div
          className={cn(
            "flex flex-wrap justify-center gap-4 px-4 py-2",
            "transition-opacity duration-1000 ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {shuffledSkills.map((skill, index) => (
            <Badge
              key={skill + index}
              variant="outline"
              className={cn(
                "whitespace-nowrap px-4 py-2 text-sm md:text-base font-medium rounded-lg",
                "border-border bg-card text-muted-foreground shadow-sm",
                "cursor-pointer transition-transform transition-colors duration-300 ease-out",
                "hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:scale-110",
                "opacity-0 animate-fade-slide-in"
              )}
              style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
