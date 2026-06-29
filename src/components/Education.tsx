
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "JNTU GV",
    date: "2022–2026",
    details: "CGPA: 8.65",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    degree: "Intermediate - M.P.C",
    institution: "Narayana Junior College",
    date: "2020–2022",
    details: "Score: 96%",
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    degree: "Secondary School Education",
    institution: "Bhashyam E.M High School",
    date: "2019–2020",
    details: "Score: 96%",
    icon: Award,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="education" title="Education">
      <div ref={ref} className="relative max-w-4xl mx-auto px-4">
        {/* Animated timeline line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-4 md:left-8 top-0 w-[1px] bg-border" 
        />
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className={cn(
                  "absolute left-2 md:left-6 top-6 h-4 w-4 rounded-full border-2 border-background bg-foreground z-10",
                  "group-hover:scale-125 transition-transform duration-300"
                )} 
              />
              
              <motion.div
                whileHover={{ scale: 1.01, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border border-border/40 bg-card/30 overflow-hidden relative transition-all duration-300 hover:shadow-md hover:bg-accent/5 backdrop-blur-sm">
                  
                  <CardHeader>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-secondary text-foreground group-hover:scale-110 transition-transform duration-300`}>
                          <edu.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground transition-all duration-300 font-heading tracking-tight">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium mt-1 text-muted-foreground">
                            {edu.institution}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 text-sm font-medium whitespace-nowrap text-muted-foreground">
                        {edu.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-[5.5rem]">
                    <p className="text-foreground font-medium">{edu.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
