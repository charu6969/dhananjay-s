import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, GraduationCap, Award } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "2nd Place — State Level Hackathon",
    description: "Techavishkar State Hackathon recognition for innovative hardware solution.",
  },
  {
    icon: Trophy,
    title: "DST Funding (NIDHI PRAYAS)",
    description: "Government funding for the Autonomous Universal Rover project.",
  },
  {
    icon: GraduationCap,
    title: "Centum in Mathematics",
    description: "Perfect 100/100 score in 12th Grade Mathematics, highlighting strong analytics.",
  },
];

const education = {
  degree: "Bachelor of Engineering — Electrical & Electronics Engineering",
  university: "JSS Science and Technology University",
  period: "2022–2026",
  description: "Focused on hardware systems, robotics, embedded design, and applied engineering projects with an emphasis on real-world deployment.",
  preUniversity: "Jnanodaya PU College • Centum (100/100) in Mathematics.",
};

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Achievements & Education
          </h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="project-card text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="project-card max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{education.degree}</h3>
              <p className="text-sm text-muted-foreground">{education.university} • {education.period}</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{education.description}</p>
          <p className="text-sm text-muted-foreground border-t border-border pt-4">
            <span className="text-primary">Pre-University:</span> {education.preUniversity}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
