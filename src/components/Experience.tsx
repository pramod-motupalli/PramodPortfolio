
import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const experiencesData = [
  {
    role: "Software Developer",
    company: "GA Digital Solutions",
    date: "Apr 2026 – Present",
    description: "GA HireSync: Designed & maintained 20+ Django/DRF endpoints for recruitment lifecycle. Built 3 AI agents and 2 LLM bots, cutting recruiter effort by ~30%. Developed React analytics dashboards. GA Grid: Architected RBAC supporting 5 roles across 25 users; built workspace, work-item, and task lifecycle modules.",
    tech: ["React", "Django", "FastAPI", "PostgreSQL", "AI/ML", "RBAC"]
  },
  {
    role: "Fullstack Intern",
    company: "Uptoskills",
    date: "April 2025 – September 2025",
    description: "Collaborated on the AI Resume Builder project, building both backend and frontend features that leveraged AI to generate and optimize professional resumes for users. Focused on fullstack integrations, interactive UI, and smooth user onboarding.",
    tech: ["MERN Stack", "OpenAI API", "Redux"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Incrivelsoft Pvt Ltd",
    date: "Apr 2025 – Jul 2025",
    description: "Built 8+ reusable React + Tailwind CSS components (carousels, quizzes, responsive layouts) for TummyTales, a pregnancy support platform, improving cross-feature UI consistency. Implemented fully static, performance-optimized frontend with zero external API dependencies, ensuring fast load times and high reliability across devices.",
    tech: ["React", "Tailwind CSS", "UI/UX"]
  },
];

interface ExperienceItemProps {
  experience: typeof experiencesData[0];
  index: number;
  isMobile: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience: exp, index, isMobile }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  const isLeftAlignedOnDesktop = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={cn(
        "relative md:flex md:items-start group",
        !isMobile && (isLeftAlignedOnDesktop ? "" : "md:flex-row-reverse")
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Dot & Date Container */}
      <div className={cn(
        "md:w-1/2 flex",
        !isMobile && (isLeftAlignedOnDesktop ? "md:justify-end md:pr-[calc(50%+2rem)]" : "md:justify-start md:pl-[calc(50%+2rem)]")
      )}>
        <div className={cn(
          "absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 transition-transform duration-300",
          "md:left-1/2 md:-translate-x-1/2",
          isHovered ? "scale-150 bg-white" : ""
        )} />
      </div>

      {/* Card Container */}
      <div className={cn(
        "relative mt-8 md:mt-0 w-full perspective-1000",
        !isMobile && "md:w-[calc(50%-2rem)]", 
        !isMobile && (isLeftAlignedOnDesktop ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4")
      )}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className={cn(
            "border border-border/40 bg-card/30 overflow-hidden relative shadow-sm",
            "hover:border-border hover:shadow-md",
            "transition-all duration-300 backdrop-blur-sm"
          )}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <CardTitle className="text-xl font-bold text-foreground font-heading tracking-tight">{exp.role}</CardTitle>
                </div>
                <CardDescription className="text-lg font-medium text-foreground/80 flex items-center justify-between w-full">
                  <span>{exp.company}</span>
                  <span className="text-sm font-normal text-muted-foreground flex items-center gap-1 bg-secondary px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {exp.date}
                  </span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech && exp.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Central Timeline Line */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform md:-translate-x-1/2" aria-hidden="true" />

        <div className="space-y-12">
          {experiencesData.map((exp, index) => (
            <ExperienceItem
              key={index}
              experience={exp}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};