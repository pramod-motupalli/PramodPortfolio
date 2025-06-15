
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const experiences = [
  {
    role: "Fullstack Intern",
    company: "GA Digital Solutions",
    date: "April 2025 – Present",
    description: "Worked on the Digital Operations project, developing robust RESTful APIs and dynamic web interfaces to automate key operational workflows and improve analytics. Contributed to backend logic, data processing, and user experience enhancements.",
  },
  {
    role: "Fullstack Intern",
    company: "Uptoskills",
    date: "April 2025 – Present",
    description: "Collaborated on the AI Resume Builder project, building both backend and frontend features that leveraged AI to generate and optimize professional resumes for users. Focused on fullstack integrations, interactive UI, and smooth user onboarding."
  },
  {
    role: "Frontend Intern",
    company: "IncrivelSoft",
    date: "April 2025 – Present",
    description: "Worked on TummyTales, a cross-platform food discovery and recipe-sharing web app. Implemented responsive user interfaces, engaging interactions, and enhanced usability to improve user experience and drive engagement."
  },
];

export const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-4 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <Card className="bg-card border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex justify-between items-start flex-col sm:flex-row">
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</CardTitle>
                      <CardDescription className="text-lg">{exp.company}</CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 sm:mt-0">{exp.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

