
import { Section } from './Section';
import { Trophy } from 'lucide-react';

const achievements = [
  "GATE 2025 Score: 453 (AIR 9860)",
  "HackerRank: 3⭐ in Python & Java",
  "Top 10% in class with Honors",
  "100-day LeetCode streak",
  "Published \"Talestime\" blog",
  "Served as a member of the organizing committee for a Practical Machine Learning workshop attended by 100+ participants during a national-level technical symposium."
];

export const Achievements = () => {
  return (
    <Section id="achievements" title="Achievements">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-4">
          {achievements.map((item, index) => (
            <li key={index} className="flex items-start text-lg text-muted-foreground">
              <Trophy className="h-5 w-5 text-primary mr-4 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
