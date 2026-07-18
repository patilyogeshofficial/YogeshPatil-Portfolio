import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function EducationSection() {
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

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "SSVPS B.S. Deore College of Engineering, Dhule",
      location: "Dhule, India",
      duration: "2022 - 2026",
      grade: "7.0 CGPA (Till 7th Semester)",
      description:
      "Pursuing B.Tech in Computer Engineering with a strong interest in Java Full Stack Development, backend engineering, REST APIs, Spring Boot, React, and scalable web applications.",
      achievements: [
        "Selected as Reliance Foundation Scholar (2022–2026)",
        "Finalist in inter-college project competition",
        "Participated consistently in coding contests and tech quizzes",
        "Completed internship at CodeClause as Web Development Intern",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Technologies",
        "Computer Networks",
        "Operating Systems",
        "More",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Pratap College, Amalner",
      location: "Amalner, India",
      duration: "2022",
      grade: "70.5%",
      description:
        "Completed higher secondary education with focus on Science stream, building strong foundation in mathematics and computer science.",
      achievements: [
        "Strong performance in Science subjects",
        "Active participation in college technical events",

      ],
      courses: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Marathi",
        "English",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "G S High School, Amalner",
      location: "Amalner, India",
      duration: "2020",
      grade: "83.6%",
      description:
        "Completed secondary education with excellent performance, establishing strong academic foundation across core subjects.",
      achievements: [
        "Achieved 83.6% marks with distinction",
        "Strong performance in Mathematics and Science",
        "Active participation in school events and competitions"
      ],
      courses: [
      ],
    },
  ];

  const additionalEducation = [
    {
      title: "Java Programming Certification",
      provider: "Infosys Springboard",
      duration: "3 months",
      year: "2024",
      description:
        "Comprehensive Java programming course with hands-on projects",
    },
    {
      title: "Python Programming Certification",
      provider: "GUVI",
      duration: "2 months",
      year: "2024",
      description: "Python fundamentals and application development",
    },
    {
      title: "SQL for Data Management",
      provider: "Coursera",
      duration: "2 months",
      year: "2024",
      description: "Database management and querying fundamentals",
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

  const courseVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Floating particles for background
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 10 + 12,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="education"
      className="py-20 bg-muted/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-primary/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 240, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-primary/6 to-primary/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 120, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Education-themed Elements */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
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
              className="bg-primary/40 rounded-full"
              style={{ width: particle.size, height: particle.size }}
            />
          </motion.div>
        ))}

        {/* Floating Education Icons */}
        {[GraduationCap, BookOpen, FileCheck, Award].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            style={{
              left: `${20 + index * 18}%`,
              top: `${30 + index * 12}%`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: index * 2.5,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-7 h-7" />
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
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My academic background and continuous learning journey
          </motion.p>
        </motion.div>

        {/* Enhanced Formal Education */}
        <motion.div
          className="space-y-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group hover:border-primary/50 hover:bg-card/90"
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Enhanced Left Column - Basic Info */}
                <div className="lg:col-span-1 space-y-6">
                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: inView ? [0, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        <GraduationCap className="w-7 h-7 text-primary" />
                      </motion.div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {edu.institution}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="flex items-center space-x-3 text-muted-foreground group/item hover:text-foreground transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">{edu.duration}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3 text-muted-foreground group/item hover:text-foreground transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium">{edu.location}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5 }}
                    >
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-bold">
                        {edu.grade}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced Right Column - Details */}
                <div className="lg:col-span-2 space-y-6">
                  <motion.p
                    className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {edu.description}
                  </motion.p>

                  {/* Enhanced Achievements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-foreground font-bold mb-4 text-lg">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          variants={achievementVariants}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-muted-foreground flex items-start group/item"
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="group-hover/item:text-foreground transition-colors duration-200">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Enhanced Relevant Courses */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-foreground font-bold mb-4 text-lg">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.courses.map((course, courseIndex) => (
                        <motion.span
                          key={courseIndex}
                          variants={courseVariants}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ delay: courseIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 4px 12px rgba(168, 85, 247, 0.3)",
                          }}
                          className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-200 cursor-default"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Additional Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-bold text-foreground mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Additional Learning & Certifications
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalEducation.map((course, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="space-y-4">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: inView ? [0, 360] : 0,
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <FileCheck className="w-6 h-6 text-primary" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h4>
                    <p className="text-primary font-semibold text-sm">
                      {course.provider}
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {course.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-foreground font-bold">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="text-foreground font-bold">
                        {course.year}
                      </span>
                    </div>
                  </motion.div>

                  {/* Certification Badge */}
                  <motion.div
                    className="flex items-center justify-center pt-2 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-xs text-muted-foreground font-medium">
                        Certified
                      </span>
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
                        <Award className="w-3 h-3" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Summary */}
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
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-lg">
              Continuous Learning Journey
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
