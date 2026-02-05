import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-border"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Dhananjay S. Built with passion for hardware innovation.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:dharnuju5@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/dhananjay-s-99064030a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
