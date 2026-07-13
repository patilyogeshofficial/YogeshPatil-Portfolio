import { Trophy, Award, Star, Target, Users, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function AchievementsSection() {
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

  const achievements = [
    {
      title: "Reliance Foundation Scholar",
      description:
        "Selected as Reliance Foundation Scholar for the period 2022–2026, recognizing academic excellence and potential in engineering.",
      category: "Academic",
      date: "2022-2026",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "Inter-college Project Competition Finalist",
      description:
        "Achieved finalist position in inter-college project competition, demonstrating innovation and technical skills in software development.",
      category: "Competition",
      date: "2024",
      icon: Award,
      color: "text-purple-500",
    },
    {
      title: "Consistent Coding Contest Participant",
      description:
        "Actively participated in multiple coding contests and tech quizzes, continuously improving problem-solving skills and algorithm knowledge.",
      category: "Technical",
      date: "2022-2025",
      icon: Code,
      color: "text-green-500",
    },
    {
      title: "Web Development Internship",
      description:
        "Successfully completed web development internship at CodeClause, gaining practical experience in frontend technologies and deployment.",
      category: "Professional",
      date: "2025",
      icon: Target,
      color: "text-blue-500",
    },
    {
      title: "Technical Project Portfolio",
      description:
        "Developed multiple technical projects including TechQuest quiz platform and Healthcare Administration Console, showcasing full-stack development skills.",
      category: "Projects",
      date: "2024-2025",
      icon: Star,
      color: "text-pink-500",
    },
    {
      title: "Multiple Certifications",
      description:
        "Earned certifications in Java Programming, Python Programming, SQL, and Web Development from reputed platforms like Infosys Springboard, GUVI, and Coursera.",
      category: "Learning",
      date: "2024",
      icon: Users,
      color: "text-orange-500",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "5+", icon: Target },
    { label: "Certifications Earned", value: "4", icon: Award },
    { label: "CGPA", value: "7.0", icon: Trophy },
    { label: "Programming Languages", value: "4+", icon: Code },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const countUpVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Floating particles for background
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="achievements"
      className="py-20 bg-muted/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-primary/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/6 to-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, -15, 0],
              opacity: [0, 1, 0.6, 0],
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
              className="bg-primary/30 rounded-full"
              style={{ width: particle.size, height: particle.size }}
            />
          </motion.div>
        ))}

        {/* Floating Achievement Icons */}
        {[Trophy, Award, Star, Target].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            style={{
              left: `${15 + index * 20}%`,
              top: `${25 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Milestones and recognitions that mark my professional journey
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="text-center group"
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  animate={
                    inView
                      ? {
                          rotate: [0, 360],
                          transition: {
                            duration: 2,
                            delay: index * 0.2,
                            ease: "easeInOut",
                          },
                        }
                      : {}
                  }
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300"
                variants={countUpVariants}
              >
                {stat.value}
              </motion.div>
              <motion.div
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10 hover:bg-card/90"
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="space-y-4">
                {/* Enhanced Header */}
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="w-14 h-14 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:bg-background">
                      <motion.div
                        animate={{
                          rotate: inView ? [0, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.1,
                          ease: "easeInOut",
                        }}
                      >
                        <achievement.icon
                          className={`w-7 h-7 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {achievement.title}
                    </motion.h3>
                    <motion.div
                      className="flex items-center space-x-3 mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.span
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        {achievement.category}
                      </motion.span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {achievement.date}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Description */}
                <motion.p
                  className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {achievement.description}
                </motion.p>

                {/* Achievement Indicator */}
                <motion.div
                  className="flex items-center justify-between pt-2 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs text-muted-foreground font-medium">
                      Achievement Unlocked
                    </span>
                  </div>
                  <motion.div
                    className="text-primary/60"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Star className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-lg">
              {achievements.length} Major Achievements
            </span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
