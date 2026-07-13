import { motion } from "framer-motion";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "CodeClause",
      duration: "Jan 2025 - Feb 2025",
      location: "Remote",
      description:
        "Collaborated on real-time web applications, enhancing front-end user experience using HTML, CSS, and JavaScript. Optimized responsiveness and accessibility across devices.",
      achievements: [
        "Enhanced front-end UX for real-time web applications",
        "Optimized responsiveness and accessibility across devices",
        "Gained practical experience in frontend deployment",
        "Worked with version control using Git for collaborative development",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  const techVariants = {
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

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:col-span-1 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-1">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground font-medium mb-1">
                      {experience.duration}
                    </p>
                    <p className="text-muted-foreground">
                      {experience.location}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={techVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 4px 12px rgba(168, 85, 247, 0.3)",
                        }}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Right Column - Description & Achievements */}
                <div className="lg:col-span-2 space-y-6">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground leading-relaxed text-base"
                  >
                    {experience.description}
                  </motion.p>

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
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
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
                        ),
                      )}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
