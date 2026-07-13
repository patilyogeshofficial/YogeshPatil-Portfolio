import {
  ExternalLink,
  Award,
  BookOpen,
  FileCheck,
  Star,
  Shield,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function CertificationsSection() {
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

  const certifications = [
    {
      title: "Java Programming",
      issuer: "Infosys Springboard",
      date: "2024",
      credentialId: "INFOSYS-JAVA-2024",
      description:
        "Comprehensive Java programming certification covering object-oriented programming concepts and best practices.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Fb2675a2d2eda465db2373de3be484dfc?format=webp&width=800",
      verifyUrl: "https://www.infosysspringboard.com/",
      category: "Programming",
    },
    {
      title: "Java Programming Certification Test",
      issuer: "KNOWLEDGEGATE",
      date: "2025",
      credentialId: "11783312219979860626670",
      description:
        "Comprehensive Java programming certification covering object-oriented programming concepts and best practices.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Fb2675a2d2eda465db2373de3be484dfc?format=webp&width=800",
      verifyUrl:
        "https://learn.knowledgegate.ai/learn/certificate/11783312-219979",
      category: "Programming",
    },
    {
      title: "Python Programming",
      issuer: "GUVI",
      date: "2024",
      credentialId: "GUVI-PYTHON-2024",
      description:
        "Python programming certification covering fundamentals, data structures, and application development.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Ff4db1b9c6030426a809ee0e0a905fcaf?format=webp&width=800",
      verifyUrl: "https://www.guvi.in/",
      category: "Programming",
    },
    {
      title: "SQL for Data Management",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-SQL-2024",
      description:
        "Database management and SQL querying certification for effective data handling and manipulation.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Ffc585df6587048b0820bb818f6455974?format=webp&width=800",
      verifyUrl: "https://www.coursera.org/",
      category: "Database",
    },
    {
      title: "Web Development Basics",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-WEB-2024",
      description:
        "Foundational web development certification covering HTML, CSS, JavaScript, and responsive design principles.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Ffc585df6587048b0820bb818f6455974?format=webp&width=800",
      verifyUrl: "https://www.coursera.org/",
      category: "Web Development",
    },
    {
      title: "Google Cloud Platform Fundamentals",
      issuer: "Google Cloud",
      date: "2024",
      credentialId: "GCP-FUND-2024",
      description:
        "Introduction to Google Cloud Platform services, computing options, and cloud architecture fundamentals.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Fb50f2d6d5e994dcdaeceb84facd53bd0?format=webp&width=800",
      verifyUrl: "https://cloud.google.com/certification",
      category: "Cloud Computing",
    },
    {
      title: "LinkedIn Learning - Professional Development",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "LINKEDIN-PRO-2024",
      description:
        "Professional skills development including communication, teamwork, and career advancement strategies.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2F0295592c5d514312bb96d867c999bb54?format=webp&width=800",
      verifyUrl: "https://www.linkedin.com/learning/",
      category: "Professional",
    },
    {
      title: "MongoDB Database Fundamentals",
      issuer: "MongoDB University",
      date: "2024",
      credentialId: "MONGO-FUND-2024",
      description:
        "NoSQL database fundamentals, document modeling, and MongoDB operations for modern application development.",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2F043218db8393499ea5bc8cb8966b3ee3?format=webp&width=800",
      verifyUrl: "https://university.mongodb.com/",
      category: "Database",
    },
  ];

  const stats = [
    { label: "Total Certifications", value: "8+", icon: FileCheck },
    { label: "Programming Languages", value: "3+", icon: Code },
    { label: "Platforms Covered", value: "6", icon: Award },
    { label: "Skill Categories", value: "5", icon: Star },
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
      id="certifications"
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

        {/* Floating Certification Icons */}
        {[Award, BookOpen, FileCheck, Star].map((Icon, index) => (
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
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional certifications that validate my skills and knowledge
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

        {/* Enhanced Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
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
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
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
                      {cert.title}
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
                        {cert.category}
                      </motion.span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {cert.date}
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
                  {cert.description}
                </motion.p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Issuer:</span>
                    <span className="text-foreground font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      Credential ID:
                    </span>
                    <span className="text-foreground font-mono text-xs">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Certification Indicator */}
                <motion.div
                  className="flex items-center justify-between pt-2 border-t border-border/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs text-muted-foreground font-medium">
                      Certified Professional
                    </span>
                  </div>
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Verify</span>
                    <motion.div whileHover={{ x: 2 }}>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Summary */}
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
            <Award className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-lg">
              {certifications.length} Professional Certifications
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
