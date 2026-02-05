import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            My profile demonstrates founder-grade execution: real hardware delivery, embedded + control depth, ML integration, and funded validation. I am building venture-scale robotics and intelligent hardware platforms and am open to partnerships with labs, deep-tech teams, and mission-driven investors.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="mailto:dharnuju5@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-all glow-effect"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              dharnuju5@gmail.com
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dhananjay-s-99064030a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border border-border hover:border-primary transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
