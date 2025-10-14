
import { Section } from './Section';
import { Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
        <Card className="bg-card border-border">
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200 bg-transparent"
                >
                  <div className="flex-none rounded-full bg-gradient-to-tr from-primary to-blue-400 text-white p-2 shadow-md">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <p className="text-base text-foreground leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
