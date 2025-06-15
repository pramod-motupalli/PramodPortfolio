
import { Section } from './Section';
import { Badge } from '@/components/ui/badge';

const skills = {
  "Languages": ["Python", "Java", "C", "C++", "JavaScript"],
  "Frontend": ["React.js", "Tailwind CSS", "HTML", "CSS", "Vite"],
  "Backend": ["Node.js", "Express.js", "Django"],
  "Database": ["MongoDB", "PostgreSQL"],
  "Libraries & Tools": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Tkinter"],
  "Others": ["Git", "GitHub", "REST APIs", "Firebase"],
  "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Critical Thinking"]
};

export const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-4xl mx-auto space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <Badge key={skill} variant="secondary" className="text-lg px-4 py-2 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default hover:scale-105">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
