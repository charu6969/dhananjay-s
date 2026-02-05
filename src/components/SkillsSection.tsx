import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Code, Bot, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Hardware & Embedded Systems",
    icon: Cpu,
    skills: [
      "Power and control circuit design",
      "PCB design, prototyping, and debugging",
      "Embedded architecture & HW/SW integration",
      "Sensor interfacing (LiDAR, IMU, RF, power)",
    ],
  },
  {
    title: "Programming & Firmware",
    icon: Code,
    skills: [
      "Embedded C and real-time firmware",
      "C/C++ for microcontroller control logic",
      "System-level optimization and debugging",
      "Robust error handling in constrained systems",
    ],
  },
  {
    title: "Robotics & Control",
    icon: Bot,
    skills: [
      "Mobile robotics design and integration",
      "Autonomous + manual control modes",
      "Feedback control using sensor data",
      "Actuation with DC motors, servos, pumps",
    ],
  },
  {
    title: "Design & Problem-Solving",
    icon: Wrench,
    skills: [
      "3D CAD modeling for mechanical assemblies",
      "System simulation and modeling",
      "First-principles engineering decisions",
      "Mathematics-backed analysis & debugging",
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="project-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
