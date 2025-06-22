// src/hooks/useActiveSection.ts (or lib/utils.ts)
import { useState, useEffect, useMemo } from 'react';

export const useActiveSection = (sectionIds: string[], rootMargin = "-50% 0px -50% 0px"): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const observerOptions = useMemo(() => ({
    rootMargin, // Trigger when section is in the middle of the viewport
    threshold: 0, // As soon as any part is visible with the rootMargin
  }), [rootMargin]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = sectionIds.map(id => document.getElementById(id.substring(1))); // remove '#'
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, [sectionIds, observerOptions]);

  return activeSection;
};