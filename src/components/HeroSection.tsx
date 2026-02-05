import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/dhananjay-photo.png";

const highlights = [
  "DST NIDHI PRAYAS funded",
  "State Hackathon 2nd Place",
  "Centum in Mathematics",
  "Hardware + ML integration",
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container relative z-10 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/50 blur-xl opacity-50 animate-pulse-glow" />
              <img
                src={profilePhoto}
                alt="Dhananjay S"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-primary/50"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-4"
          >
            Founder • Robotics & Embedded Systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Dhananjay{" "}
            <span className="gradient-text">S</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4"
          >
            I build investor-ready hardware platforms that move from concept to deployment—integrating robotics, embedded systems, and intelligent sensing into scalable products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground mb-8"
          >
            B.E. Electrical & Electronics Engineering • JSS Science and Technology University (2022–2026)
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90 glow-effect"
            >
              View Projects
            </a>
            <a
              href="mailto:dharnuju5@gmail.com"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-border hover:border-primary flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/dhananjay-s-99064030a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-border hover:border-primary flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {highlights.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="highlight-badge"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
