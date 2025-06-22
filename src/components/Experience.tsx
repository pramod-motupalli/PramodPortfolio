import { Section } from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Make sure you have this utility
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'; // Adjust path
import { useMediaQuery } from '@/hooks/useMediaQuery'; // Adjust path

const experiencesData = [ // Renamed from 'experiences' to avoid conflict if used as prop
  {
    role: "Fullstack Intern",
    company: "GA Digital Solutions",
    date: "May 2025 – June-2025",
    description: "Worked on the Digital Operations project, developing robust RESTful APIs and dynamic web interfaces to automate key operational workflows and improve analytics. Contributed to backend logic, data processing, and user experience enhancements.",
  },
  {
    role: "Fullstack Intern",
    company: "Uptoskills",
    date: "April 2025 – June 2025",
    description: "Collaborated on the AI Resume Builder project, building both backend and frontend features that leveraged AI to generate and optimize professional resumes for users. Focused on fullstack integrations, interactive UI, and smooth user onboarding."
  },
  {
    role: "Frontend Intern",
    company: "IncrivelSoft",
    date: "April 2025 – June 2025",
    description: "Worked on TummyTales, a cross-platform food discovery and recipe-sharing web app. Implemented responsive user interfaces, engaging interactions, and enhanced usability to improve user experience and drive engagement."
  },
];

interface ExperienceItemProps {
  experience: typeof experiencesData[0];
  index: number;
  isMobile: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience: exp, index, isMobile }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  // Animate when 20% of the item is visible
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.2, freezeOnceVisible: true });

  const isLeftAlignedOnDesktop = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative md:flex md:items-start group",
        // Zig-zag layout for desktop
        !isMobile && (isLeftAlignedOnDesktop ? "" : "md:flex-row-reverse"),
        // Base transition classes for opacity and transform
        "transition-opacity transition-transform duration-700 ease-out",
        // Staggered delay using inline style (Tailwind delay classes can be limited)
        // Add `transform` class to ensure translate utilities apply
        "transform",
        // Initial animation state (hidden) vs. Visible state
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : cn(
              "opacity-0",
              // Mobile: slides up from bottom
              isMobile ? "translate-y-10" :
              // Desktop: slides from sides
              (isLeftAlignedOnDesktop ? "-translate-x-12" : "translate-x-12") // Increased distance for more effect
            )
      )}
      style={{ transitionDelay: isVisible ? '0ms' : `${index * 150}ms` }} // Apply delay only when initially hidden
    >
      {/* Timeline Dot & Date Container */}
      <div className={cn(
        "md:w-1/2 flex",
        !isMobile && (isLeftAlignedOnDesktop ? "md:justify-end md:pr-[calc(50%+1.25rem)]" : "md:justify-start md:pl-[calc(50%+1.25rem)]")
      )}>
        <div className={cn(
          "absolute left-0 top-1 h-5 w-5 rounded-full border-4 border-background bg-muted group-hover:bg-primary transition-colors duration-300",
          "md:left-1/2 md:-translate-x-1/2 md:group-hover:ring-4 md:group-hover:ring-primary/30"
        )} />
      </div>

      {/* Card Container with Connector */}
      <div className={cn(
        "relative mt-8 md:mt-0 w-full",
        !isMobile && "md:w-[calc(50%-1.25rem)]", // Gap from center line
        !isMobile && (isLeftAlignedOnDesktop ? "md:ml-[1.25rem]" : "md:mr-[1.25rem]")
      )}>
        {/* Connector Arrow (Desktop only) */}
        <div className={cn(
          "hidden md:block absolute top-3 w-4 h-4 bg-card border-border rotate-45",
          "group-hover:border-primary/50 transition-colors duration-300",
          !isMobile && (isLeftAlignedOnDesktop
            ? "left-[-8px] border-b-0 border-r-0 border-t border-l"
            : "right-[-8px] border-t-0 border-l-0 border-b border-r")
        )} aria-hidden="true" />

        <Card className={cn(
          "bg-card border border-border shadow-md transition-all duration-300 ease-out",
          "group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:border-primary/50 group-hover:scale-[1.02]"
        )}>
          <CardHeader>
            <div className="flex justify-between items-start flex-col sm:flex-row">
              <div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{exp.company}</CardDescription>
              </div>
              <p className="text-sm text-muted-foreground mt-2 sm:mt-0 whitespace-nowrap">{exp.date}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const Experience = () => {
  // Tailwind's `md` breakpoint is typically 768px.
  // `useMediaQuery` will return true if screen width is <= 767px.
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {/* Central Timeline Line - Hidden on mobile */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2 hidden md:block" aria-hidden="true" />

        <div className="space-y-16 md:space-y-0"> {/* Base spacing between items */}
          {experiencesData.map((exp, index) => (
            <ExperienceItem
              key={exp.company + exp.role + index} // More robust key
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