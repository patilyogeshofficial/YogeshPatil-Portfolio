import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Code, Database, Monitor, Star, Zap } from "lucide-react";

export function SkillsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "from-primary to-primary/80",
      skills: [
        {
          name: "Java",
          level: 85,
          color: "bg-gradient-to-r from-primary to-primary/70",
        },
        {
          name: "Python",
          level: 80,
          color: "bg-gradient-to-r from-primary/90 to-primary/60",
        },
        {
          name: "JavaScript",
          level: 85,
          color: "bg-gradient-to-r from-primary/80 to-primary/50",
        },
        {
          name: "PHP",
          level: 75,
          color: "bg-gradient-to-r from-primary/70 to-primary/40",
        },
        {
          name: "SQL",
          level: 80,
          color: "bg-gradient-to-r from-primary/85 to-primary/55",
        },
      ],
    },
    {
      title: "Web Development",
      icon: Monitor,
      color: "from-primary/90 to-primary/70",
      skills: [
        {
          name: "HTML5/CSS3",
          level: 90,
          color: "bg-gradient-to-r from-primary to-primary/60",
        },
        {
          name: "JavaScript",
          level: 85,
          color: "bg-gradient-to-r from-primary/80 to-primary/50",
        },
        {
          name: "PHP",
          level: 75,
          color: "bg-gradient-to-r from-primary/70 to-primary/40",
        },
        {
          name: "Flask",
          level: 70,
          color: "bg-gradient-to-r from-primary/75 to-primary/45",
        },
        {
          name: "Chart.js",
          level: 65,
          color: "bg-gradient-to-r from-primary/65 to-primary/35",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      color: "from-primary/80 to-primary/60",
      skills: [
        {
          name: "VS Code",
          level: 90,
          color: "bg-gradient-to-r from-primary to-primary/60",
        },
        {
          name: "Git/GitHub",
          level: 85,
          color: "bg-gradient-to-r from-primary/85 to-primary/55",
        },
        {
          name: "SQLite",
          level: 80,
          color: "bg-gradient-to-r from-primary/80 to-primary/50",
        },
        {
          name: "Linux",
          level: 75,
          color: "bg-gradient-to-r from-primary/75 to-primary/45",
        },
        {
          name: "Windows",
          level: 95,
          color: "bg-gradient-to-r from-primary/95 to-primary/65",
        },
        {
          name: "macOS",
          level: 70,
          color: "bg-gradient-to-r from-primary/70 to-primary/40",
        },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: inView ? `${level}%` : 0,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  // Floating particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="skills"
      className="py-20 bg-background relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 240, 120, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Code-themed Floating Elements */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              opacity: [0, 1, 0.7, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-1 h-1 bg-primary/40 rounded-full"
              style={{ width: particle.size, height: particle.size }}
            />
          </motion.div>
        ))}

        {/* Floating Icons */}
        {[Code, Database, Monitor, Star, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Here are the technologies and tools I work with to bring ideas to
            life
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6 hover:bg-card/70 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Category Header */}
              <motion.div
                className="text-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${category.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <category.icon className="w-full h-full text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    variants={skillVariants}
                    custom={skillIndex}
                  >
                    <div className="flex justify-between items-center">
                      <motion.span
                        className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        className="text-sm text-muted-foreground font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`${skill.color} rounded-full h-2 relative`}
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1 + skillIndex * 0.2,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Skill Level Indicator */}
                      <motion.div
                        className="absolute top-0 right-0 transform translate-y-1"
                        style={{ left: `${skill.level}%` }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          delay: 1.2 + skillIndex * 0.1,
                          duration: 0.3,
                        }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Stats */}
              <motion.div
                className="pt-4 border-t border-border/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 + categoryIndex * 0.1 }}
              >
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Average Proficiency</span>
                  <span className="font-mono">
                    {Math.round(
                      category.skills.reduce(
                        (acc, skill) => acc + skill.level,
                        0,
                      ) / category.skills.length,
                    )}
                    %
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}{" "}
              Skills Mastered
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
