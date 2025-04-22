import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Card from "../Components/Card";
import { FaCode, FaPalette, FaMobile, FaServer, FaDatabase, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      imageUrl: "https://www.solveo.co/wp-content/uploads/2020/01/ux_ix2012.jpg",
      tags: ["React", "Node.js", "TypeScript"],
      icon: FaCode,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces with seamless user experiences.",
      imageUrl: "https://cdn.dribbble.com/users/9362665/screenshots/17416927/6000183_4x.png",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      icon: FaPalette,
      color: "from-amber-500 to-pink-500"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      imageUrl: "https://fuselabcreative.com/wp-content/uploads/2023/03/latest-ui-ux-design-trends-2023-cover-2.jpg",
      tags: ["React Native", "Flutter", "Swift"],
      icon: FaMobile,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend Development",
      description: "Scalable and secure backend solutions for your applications.",
      imageUrl: "https://cdn.dribbble.com/users/5261465/screenshots/14032320/media/4717c4487865c0df3756f02cbc4c38b4.jpg",
      tags: ["Python", "Java", "Go"],
      icon: FaServer,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Database Design",
      description: "Optimized database architecture and management solutions.",
      imageUrl: "https://www.aceinfoway.com/blog/wp-content/uploads/2020/03/best-database-to-work-with-in-2020.jpg",
      tags: ["MongoDB", "PostgreSQL", "Redis"],
      icon: FaDatabase,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Security Solutions",
      description: "Comprehensive security measures to protect your applications.",
      imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6d91e369248837.5b7aa1859c5bd.png",
      tags: ["SSL", "Encryption", "Authentication"],
      icon: FaShieldAlt,
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-amber-900/20 to-black/80" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.1)_0%,transparent_70%)]"
      />

      {/* Interactive Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Floating Elements */}
      <motion.div
        initial={{ y: 100, x: -100, opacity: 0 }}
        animate={{
          y: [0, 30, 0],
          x: [-30, 0, -30],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ y: -100, x: 100, opacity: 0 }}
        animate={{
          y: [0, -30, 0],
          x: [30, 0, 30],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 relative inline-block"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.3)",
                  "0 0 20px rgba(147, 51, 234, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-lg blur-xl"
            />
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of services to help bring your ideas to life
          </motion.p>
        </motion.div>

        {/* Services Grid with Enhanced Interactions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    `0 0 20px rgba(147, 51, 234, 0.3)`,
                    `0 0 40px rgba(147, 51, 234, 0.2)`,
                    `0 0 20px rgba(147, 51, 234, 0.3)`,
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Card
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                tags={service.tags}
                icon={service.icon}
                color={service.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;