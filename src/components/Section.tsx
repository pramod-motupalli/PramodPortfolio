
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  id: string;
}

export const Section = ({ title, id, children, className, ...props }: SectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className={cn('transition-opacity duration-700 ease-out', inView ? 'opacity-100' : 'opacity-0 translate-y-5')}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};
