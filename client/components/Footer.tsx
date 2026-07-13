import { Heart, MapPin, Mail, Phone, ArrowUp, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/patilyogeshofficial",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/patilyogeshofficial",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:patilyogeshofficial@gmail.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-card/80 backdrop-blur-sm border-t border-border/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-l from-blue-500/5 to-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 py-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F70508e16b22e4fac90ebd663daece6d0%2F9e1dac4092b349b9ac2eed5a80e5d5f6?format=webp&width=800"
                  alt="Yogesh Patil Logo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Yogesh Patil
                </h3>
                <p className="text-sm text-primary">Software Developer</p>
              </div>
            </motion.div>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Final-year B.Tech Computer Engineering student passionate about
              web development and solving real-world problems through code.
            </motion.p>

            <motion.div className="flex space-x-3" variants={containerVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/25"
                  aria-label={social.name}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3
              className="text-lg font-semibold text-foreground flex items-center space-x-2"
              variants={itemVariants}
            >
              <Code className="w-5 h-5 text-primary" />
              <span>Quick Links</span>
            </motion.h3>
            <motion.nav className="space-y-3" variants={containerVariants}>
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                  variants={itemVariants}
                  whileHover={{
                    x: 4,
                    transition: { duration: 0.2 },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3
              className="text-lg font-semibold text-foreground flex items-center space-x-2"
              variants={itemVariants}
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>Get In Touch</span>
            </motion.h3>
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.div variants={itemVariants} className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href="mailto:patilyogeshofficial@gmail.com"
                      className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    >
                      patilyogeshofficial@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a
                      href="tel:+918010729955"
                      className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    >
                      +91 8010729955
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <a
                      href="https://maps.google.com/maps?q=Dhule,+Maharashtra,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    >
                      Dhule, Maharashtra, India
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border/50 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-sm text-muted-foreground"
              variants={itemVariants}
            >
              <span>© {currentYear} Yogesh Patil. Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of</span>
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-base"
              >
                ☕
              </motion.div>
            </motion.div>

            <motion.div
              className="flex space-x-6 text-sm"
              variants={containerVariants}
            >
              <motion.a
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                variants={itemVariants}
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
