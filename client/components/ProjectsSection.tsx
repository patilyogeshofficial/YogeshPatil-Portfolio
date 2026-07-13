import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Star, Calendar, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  status: "live" | "development" | "completed";
  year: string;
  stars?: number;
}

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "TechQuest - Online Quiz Platform",
      description:
        "A dynamic quiz platform for technical assessments with admin controls and scoring system. Features include login system, timer control, result dashboard, and data visualization with Chart.js to enhance user insights.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2F4f31bc9fa1894ea99764635228b79c0c?format=webp&width=800",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Chart.js"],
      liveUrl: "https://techquest-demo.vercel.app",
      githubUrl: "https://github.com/patilyogeshofficial/techquest",
      featured: true,
      category: "Web Application",
      status: "live",
      year: "2024",
      stars: 45,
    },
    {
      title: "Healthcare Administration Console",
      description:
        "A hospital operations console for managing patients, appointments, and reports. Streamlined hospital record handling with user-friendly interface and CRUD operations with printable patient summaries.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2F7ace40296394474492cc45a4b83c7c4f?format=webp&width=800",
      technologies: ["Python", "SQLite", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://healthcare-console-demo.vercel.app",
      githubUrl: "https://github.com/patilyogeshofficial/healthcare-console",
      featured: true,
      category: "Desktop Application",
      status: "live",
      year: "2024",
      stars: 32,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React and featuring smooth animations and optimized performance.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "https://github.com/patilyogeshofficial/portfolio",
      featured: false,
      category: "Personal",
      status: "development",
      year: "2024",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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

  const projectVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "live":
        return "Live";
      case "development":
        return "In Development";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my recent work and the impact I've made through code
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-20 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <motion.div
                className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <motion.div
                    className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center">
                          <span className="px-3 py-1 bg-white/90 text-black text-sm rounded-full font-medium">
                            {project.category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(project.status)}>
                              {getStatusText(project.status)}
                            </Badge>
                            {project.stars && (
                              <span className="px-2 py-1 bg-white/90 text-black text-sm rounded-full flex items-center">
                                <Star className="w-3 h-3 mr-1" />
                                {project.stars}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusText(project.status)}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </span>
                    {project.stars && (
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {project.stars} stars
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 text-sm rounded-full font-medium hover:bg-primary/20 transition-colors dark:bg-primary/10 dark:text-primary dark:border-primary/30"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + techIndex * 0.05,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="default"
                      className="bg-primary hover:bg-primary/90 group"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="group" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        Source Code
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-bold text-foreground mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Other Notable Projects
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {/* Project Image */}
                  <motion.div
                    className="aspect-video bg-muted rounded-xl overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-3 right-3">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs rounded-full dark:bg-primary/10 dark:text-primary dark:border-primary/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
