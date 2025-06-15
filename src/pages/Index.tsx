
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Education } from '@/components/Education';
import { Achievements } from '@/components/Achievements';
import { Certifications } from '@/components/Certifications';
import { TechCloud } from '@/components/TechCloud';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEF2FF] via-[#D5FFE4] to-[#C4E5FF] dark:from-[#141e30] dark:via-[#243B55] dark:to-[#24243e] transition-all duration-500 text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <TechCloud />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
