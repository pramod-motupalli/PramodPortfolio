
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "JNTU GV",
    date: "2022–2026",
    details: "CGPA: 8.4"
  },
  {
    degree: "Intermediate - M.P.C",
    institution: "Narayana Junior College",
    date: "2020–2022",
    details: "Score: 96%"
  },
  {
    degree: "Secondary School Education",
    institution: "Bhashyam E.M High School",
    date: "2019–2020",
    details: "Score: 96%"
  },
];

export const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-4 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <Card className="bg-card border hover:border-primary/50 transition-colors duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start flex-col sm:flex-row">
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg">{edu.institution}</CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 sm:mt-0">{edu.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.details}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
