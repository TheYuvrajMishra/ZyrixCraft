import { motion } from "framer-motion";
import RotatingText from "../Components/RotatingText";
const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-amber-500/20 to-black" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.1)_0%,black_100%)]"
      />

      {/* Chaotic Neon Triangles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`triangle-${i}`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              rotate: [0, 180, 360],
              scale: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            className="absolute w-0 h-0"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "40px solid",
              borderBottomColor: `rgba(${Math.random() * 255}, ${
                Math.random() * 100
              }, ${Math.random() * 255}, 0.2)`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Neon Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ y: 100, x: -100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ y: -100, x: 100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Animated Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
        />
      ))}

      {/* Glowing Orbs */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          className="absolute w-4 h-4 rounded-full"
          style={{
            top: `${20 + i * 30}%`,
            left: `${20 + i * 25}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.3)",
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-lg blur-xl"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-600">
                ZyrixCraft
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-white/80 mb-4 sm:mb-6 whitespace-normal text-center w-full px-4"
          >
            We create{" "}
            <RotatingText
              texts={[
                "Websites",
                "UI/UX Designs",
                "Graphic Designs",
                "Digital Experiences",
              ]}
              mainClassName="px-2 sm:px-3 bg-amber-200/10 ml-1 sm:ml-2 border border-white/20 text-white overflow-hidden py-1 justify-center rounded-md inline-flex shadow-md"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{" "}
            that inspire and innovate
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center mt-10 gap-3 sm:gap-4 w-full px-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 224, 130, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-amber-600 to-pink-600 text-white rounded-full font-medium shadow-md shadow-amber-500/20 relative overflow-hidden group w-full sm:w-auto"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              Get Started
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20 relative overflow-hidden group w-full sm:w-auto"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "100+", label: "Projects" },
              { number: "50+", label: "Clients" },
              { number: "5+", label: "Years" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  boxShadow: "0 0px 20px rgb(255, 224, 130, 0.2)",
                }}
                className="text-center cursor-pointer p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.8 + index * 0.1,
                  }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 10px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-sm"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
