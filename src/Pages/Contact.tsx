import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-amber-900/20 to-black/80" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.1)_0%,transparent_70%)]"
            />

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

            {/* Neon Lines */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/3 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"
            />
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-2/3 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
                        >
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(255, 224, 130, 0.5)",
                                        "0 0 40px rgb(255, 224, 130,0.3)",
                                        "0 0 20px rgba(255, 224, 130, 0.5)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-lg blur-xl"
                            />
                            Get In Touch
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-xl text-white/80 max-w-2xl mx-auto"
                        >
                            Have a project in mind? Let's create something amazing together.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="lg:col-span-2 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-8 shadow-lg"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                                            Name
                                        </label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                                            Email
                                        </label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                                        Subject
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                                        Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                        placeholder="Your message"
                                        required
                                    />
                                </div>
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="group relative w-full cursor-pointer overflow-hidden bg-gradient-to-r from-amber-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                >
                                    {/* Animated gradient overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    />

                                    {/* Button content */}
                                    <span className="relative cursor-pointer flex items-center justify-center gap-2">
                                        Send Message
                                        <motion.span
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            →
                                        </motion.span>
                                    </span>

                                    {/* Glow effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, transparent 70%)"
                                        }}
                                    />
                                </motion.button>
                            </form>
                        </motion.div>
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3 text-white/80"
                                    >
                                        <FaEnvelope className="text-amber-500 text-xl" />
                                        <span>contact@example.com</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3 text-white/80"
                                    >
                                        <FaPhone className="text-amber-500 text-xl" />
                                        <span>+1 234 567 890</span>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3 text-white/80"
                                    >
                                        <FaMapMarkerAlt className="text-amber-500 text-xl" />
                                        <span>123 Street, City, Country</span>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <motion.a
                                        whileHover={{ y: -5, color: "#8B5CF6" }}
                                        href="#"
                                        className="text-white/80 text-2xl hover:text-amber-500 transition-colors"
                                    >
                                        <FaGithub />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ y: -5, color: "#8B5CF6" }}
                                        href="#"
                                        className="text-white/80 text-2xl hover:text-amber-500 transition-colors"
                                    >
                                        <FaLinkedin />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ y: -5, color: "#8B5CF6" }}
                                        href="#"
                                        className="text-white/80 text-2xl hover:text-amber-500 transition-colors"
                                    >
                                        <FaTwitter />
                                    </motion.a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-6 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-white mb-2">Availability</h3>
                                <p className="text-white/80 mb-2">Response time: Within 24 hours</p>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
                                    <span className="text-white/80">Available for new projects</span>
                                </div>
                            </motion.div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 