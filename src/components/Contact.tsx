
import { Section } from './Section';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "motupallipramod21@gmail.com",
    href: "mailto:motupallipramod21@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Connect with me",
    href: "https://linkedin.com/in/s-n-m-s-durga-pramod-motupalli-643a9a255",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "Check out my code",
    href: "https://github.com/pramod-motupalli",
    color: "from-gray-700 to-gray-500"
  }
];

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="contact" title="Get In Touch">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a question or want to work together? Feel free to reach out.
          My inbox is always <span className="text-primary font-semibold">open</span>!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block group"
            >
              <Card className="border border-border/40 bg-card/30 p-8 h-full hover:border-border hover:bg-accent/5 transition-all duration-300 text-center relative overflow-hidden backdrop-blur-sm shadow-sm hover:shadow-md">
                
                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="p-4 bg-secondary rounded-full mb-4 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300"
                  >
                    <method.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground font-heading tracking-tight mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                  <Send className="w-4 h-4 text-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300" />
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="border border-border/50 bg-card/50 p-8 rounded-2xl inline-block backdrop-blur-md">
            <p className="text-2xl font-bold text-foreground font-heading tracking-tight mb-2">Let's build something amazing together!</p>
            <p className="text-muted-foreground">I'm always interested in hearing about new projects and opportunities.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

