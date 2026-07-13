import { Button } from "./ui/button";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "framer-motion";

export function HeroSection() {
  const typewriterPhrases = [
    "Final-year B.Tech CSE Student",
    "Full Stack Developer",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Floating particles data
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    initialX: Math.random() * 400 - 200,
    initialY: Math.random() * 400 - 200,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-primary/30 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `50%`,
              top: `50%`,
            }}
            animate={{
              x: [
                particle.initialX,
                particle.initialX + 100,
                particle.initialX - 50,
                particle.initialX,
              ],
              y: [
                particle.initialY,
                particle.initialY - 100,
                particle.initialY + 50,
                particle.initialY,
              ],
              opacity: [0, 1, 0.5, 0],
              scale: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={textVariants}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I am
                <br />
                <motion.span
                  className="gradient-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Yogesh Patil
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                I am a{" "}
                <TypewriterEffect
                  phrases={typewriterPhrases}
                  className="gradient-text font-semibold"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delayBetweenPhrases={2500}
                />
              </motion.p>
            </div>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Final-year B.Tech Computer Engineering student seeking
              opportunities to apply programming and database skills, contribute
              to real-world projects, and grow as a software or web developer.
              With a passion for learning and hands-on experience in web
              development, I am ready to make a meaningful contribution to
              innovative projects.
            </motion.p>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://cdn.builder.io/o/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2Fc2a90cb5cd4b425ba43f32cfecb12ca9?alt=media&token=f63befcd-1572-408b-b488-a66d7ca55af5&apiKey=3546de7d0bc94d888bb9d8ba3ad90d82"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Yogesh_Patil_Resume.pdf"
                  >
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image with Enhanced Animations */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Animated Background Elements */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
                  ],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: "calc(100% + 2rem)",
                  height: "calc(100% + 2rem)",
                  left: "-1rem",
                  top: "-1rem",
                }}
              />

              {/* Main Profile Image */}
              <motion.div
                className="w-36 h-36 xs:w-40 xs:h-40 sm:w-44 sm:h-44 md:w-84 md:h-84 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3546de7d0bc94d888bb9d8ba3ad90d82%2F2f2665dd51094329b48c55c37e4ac1c7?format=webp&width=800"
                  alt="Yogesh Patil"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Enhanced Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full backdrop-blur-sm"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute top-1/2 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full shadow-lg shadow-primary/50"
                animate={{
                  y: [-10, 10, -10],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 -right-3 sm:-right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full shadow-lg shadow-primary/50"
                animate={{
                  x: [-5, 5, -5],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Additional Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
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
