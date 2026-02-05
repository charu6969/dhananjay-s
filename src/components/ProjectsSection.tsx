import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Autonomous Universal Rover",
    badge: "DST-FUNDED",
    description: "DST-funded multi-mode rover with autonomous navigation and manual override.",
    features: [
      "Point-to-point navigation and area coverage",
      "LiDAR-based obstacle detection and avoidance",
      "Dual joystick + manual control for safety",
      "Modular architecture for field adaptation",
    ],
  },
  {
    title: "Reverse Vending Machine",
    description: "AI-based recycling system that detects bottles, validates disposal, and rewards users with credits.",
    features: [
      "Computer-vision model trained for bottle detection",
      "Embedded controller for real-time validation",
      "Mechanical accept/reject actuation",
      "Scalable for multi-location deployment",
    ],
  },
  {
    title: "Flight Controller & Stabilizer",
    description: "Custom fixed-wing flight controller for real-time stabilization under wind disturbance.",
    features: [
      "IMU-based feedback control loop",
      "Embedded C firmware for low-latency response",
      "Compatible with standard RC transmitters",
      "Robust tuning for real-world stability",
    ],
  },
  {
    title: "Fire Fighting Robot",
    description: "Autonomous robot that detects flames, navigates, and suppresses fire.",
    features: [
      "Flame sensor for direction detection",
      "DC motor drive + servo nozzle control",
      "Pump system activation logic",
      "Arduino-based real-time control",
    ],
  },
  {
    title: "Long-range RF Transceiver",
    description: "Non-WiFi/Bluetooth RF communication system for long-range robotics control.",
    features: [
      "2 km+ range with 125 configurable channels",
      "Low-latency control links for RC platforms",
      "Interference-aware channel selection",
      "Integrated with embedded controllers",
    ],
  },
  {
    title: "Renewable Smart Grid",
    description: "Hardware + web platform for home energy monitoring and intelligent power routing.",
    features: [
      "Appliance-level power sensing",
      "Overload protection and fault isolation",
      "Solar ↔ grid source switching",
      "ML-based consumption forecasting",
    ],
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="project-card group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.badge && (
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 text-xs">
                    {project.badge}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <ul className="space-y-1.5">
                {project.features.map((feature) => (
                  <li key={feature} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span>
                    {feature}
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
