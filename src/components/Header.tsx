
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  // { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-gradient-to-r from-[#b3d8fd] via-[#d1eaff] to-[#e0edff] dark:from-[#3c6195] dark:via-[#174073] dark:to-[#0d203d] shadow-md border-b border-border"
            : "bg-gradient-to-r from-[#b9d6fc] via-[#e3f5ff] to-[#c6e6fb] dark:from-[#223058] dark:via-[#21375a] dark:to-[#2654b6]"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a
            href="#"
            className="text-4xl font-extrabold tracking-tight text-white bg-clip-text text-transparent drop-shadow-lg"
            style={{
              letterSpacing: '0.05em',
              textShadow: '0 2px 16px rgba(64,83,191,.14)'
            }}
          >
            Pramod
          </a>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8 lg:space-x-12 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 dark:text-gray-200 px-3 py-2 rounded-md
                    hover:bg-gradient-to-tr hover:from-[#d7edfa] hover:via-[#e6f2fb] hover:to-[#eaf6ff]
                    dark:hover:bg-gradient-to-tr dark:hover:from-[#23395d] dark:hover:via-[#384765] dark:hover:to-[#377dcb]
                    hover:text-blue-900 dark:hover:text-blue-100
                    transition-all duration-200"
                  style={{ transition: 'background 200ms, color 200ms' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
            <div className="md:hidden ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-[#e6f0fd] via-[#e3f5ff] to-[#c6e6fb] dark:from-[#223058] dark:via-[#23395d] dark:to-[#377dcb] backdrop-blur-md shadow-md border-b border-border animate-fade-in">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-foreground
                  hover:bg-gradient-to-tr hover:from-[#d7edfa] hover:via-[#e6f2fb] hover:to-[#eaf6ff]
                  dark:hover:bg-gradient-to-tr dark:hover:from-[#23395d] dark:hover:via-[#384765] dark:hover:to-[#377dcb]
                  hover:text-blue-900 dark:hover:text-blue-100
                  px-3 py-2 rounded-md transition-colors duration-200"
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
