
import { Section } from './Section';
import { Award } from 'lucide-react';

const certifications = [
  "Introduction to IoT – NPTEL",
  "Python – HackerRank",
  "Machine Learning with Python – edX",
  "Introduction to Web Development – edX",
  "Infosys Springboard Artificial Intelligence Certifications"
];

export const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center text-lg text-muted-foreground">
              <Award className="h-5 w-5 text-primary mr-4 flex-shrink-0" />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
