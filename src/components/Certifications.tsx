
import { Section } from './Section';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';

const certifications = [
  { name: 'Introduction to IoT', issuer: 'NPTEL' },
  { name: 'Python', issuer: 'HackerRank' },
  { name: 'Machine Learning with Python', issuer: 'edX' },
  { name: 'Introduction to Web Development', issuer: 'edX' },
  { name: 'Artificial Intelligence', issuer: 'Infosys Springboard' },
];

export const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Selected Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-md hover:bg-accent/5 transition-colors">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                  </div>
                  <div className="ml-auto">
                    <Badge variant="outline">Verified</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
