
import { Section } from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const highlights = [
  'Full-stack web development (MERN)',
  'Machine Learning & Data Analysis',
  'Real-time systems & performance tuning',
  'Clean, accessible UI & UX'
];

export const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Card className="bg-card border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 items-center">
                  <img src="/PassPortSize Pic1.jpg" alt="Pramod profile" />
                </Avatar>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Motupalli S N M S Durga Pramod</h3>
                  <p className="text-sm text-muted-foreground">B.Tech (CSE) • Full Stack Developer • ML Enthusiast</p>
                </div>
              </div>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Innovative and driven Computer Science student at Jawaharlal Nehru Technological University - Gurajada Vizianagaram. I build full-stack web applications and machine learning solutions with a focus on performance, accessibility and delightful user experiences.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-center text-sm text-foreground">
                    <Badge variant="outline" className="mr-3">{i + 1}</Badge>
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/Pramod Motupalli Resume_Full Stack Developer.pdf" download="Pramod Motupalli_Resume.pdf">Download Resume</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-4">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 rounded-lg border border-border shadow-sm">
            <h4 className="text-xl font-semibold text-foreground">Quick Facts</h4>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium">Vizianagaram, India</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Availability</p>
                <p className="font-medium">Open to internships & freelance</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Education</p>
                <p className="font-medium">B.Tech, JNTU GV (2022–2026)</p>
              </div>
              
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card shadow-sm">
            <h4 className="text-xl font-semibold text-foreground">Tech & Tools</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Node', 'MongoDB', 'Express', 'Python', 'Tailwind'].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card shadow-sm">
            <h4 className="text-xl font-semibold text-foreground">Interests</h4>
            <p className="mt-3 text-muted-foreground">Building performant web apps, experimenting with ML models, competitive programming, and mentoring juniors.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
