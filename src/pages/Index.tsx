
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Education } from '@/components/Education';
// import { Achievements } from '@/components/Achievements';
// import { Certifications } from '@/components/Certifications';
import { TechCloud } from '@/components/TechCloud';

const Index = () => {
  return (
    <div className="min-h-screen transition-all duration-500 text-foreground font-sans bg-transparent">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <TechCloud />
        <Skills />
        {/* <Certifications />
        <Achievements /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
