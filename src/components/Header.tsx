import { useState, useEffect } from 'react';
import { Menu, X, CodeXml } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const sectionHrefs = navLinks.map(link => link.href);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSectionId = useActiveSection(sectionHrefs);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        "bg-gradient-to-r from-[#e6f0fd] via-[#e3f5ff] to-[#c6e6fb]",
        "dark:from-[#223058] dark:via-[#21375a] dark:to-[#090e19]",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a
  href="#"
  className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
>
  <CodeXml className="w-10 h-8 text-primary dark:text-primary" />
  <span
    className={cn(
      "text-3xl md:text-4xl font-bold tracking-tight",
      "bg-clip-text text-transparent",
      "bg-gradient-to-r from-primary via-primary/80 to-primary/60",
      "dark:from-primary dark:via-primary/90 dark:to-primary/70"
    )}
    style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
  >
    Pramod
  </span>
</a>


          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm lg:text-base font-medium rounded-md transition-all duration-200 ease-in-out group",
                  "text-muted-foreground hover:text-foreground",
                  activeSectionId === link.href.substring(1)
                    ? "text-primary dark:text-primary font-semibold"
                    : ""
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center",
                    activeSectionId === link.href.substring(1) ? "scale-x-100" : ""
                  )}
                />
              </a>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-3 p-2 rounded-md text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} className="animate-rotate-in" /> : <Menu size={28} className="animate-rotate-out" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-0 top-[calc(5rem+1px)] md:top-[calc(6rem+1px)] z-40 bg-background/95 backdrop-blur-lg overflow-y-auto",
            "transition-transform duration-300 ease-in-out"
          )}
        >
          <nav className="flex flex-col items-center space-y-2 px-4 pt-8 pb-12">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "w-full text-center py-4 px-4 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out",
                  "text-muted-foreground hover:text-foreground hover:bg-muted",
                  activeSectionId === link.href.substring(1)
                    ? "text-primary dark:text-primary bg-primary/10 font-semibold"
                    : "",
                  "opacity-0 animate-fade-slide-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
