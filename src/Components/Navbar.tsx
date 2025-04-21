import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaThLarge, FaUsers, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home");

    const navItems = [
        { id: "home", icon: FaHome, label: "Home" },
        { id: "features", icon: FaThLarge, label: "Features" },
        { id: "team", icon: FaUsers, label: "Team" },
        { id: "profile", icon: FaUserCircle, label: "Profile" }
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed z-50 top-5 w-full flex justify-center hidden md:flex">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative flex items-center justify-between rounded-2xl px-6 py-1 overflow-hidden"
                >
                    {/* Background layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/75 to-black/90" />
                    <div className="absolute inset-0 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-white/5" />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl" />

                    {/* Content */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative text-white/90 font-medium mr-20 text-lg tracking-wide"
                    >
                        ZyrixCraft
                    </motion.div>
                    <div className="relative flex items-center space-x-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className="relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="activeTabDesktop"
                                        className="absolute inset-0 bg-yellow-500/10 rounded-xl"
                                        initial={false}
                                    />
                                )}
                                <item.icon
                                    className={`text-xl transition-all duration-300 ${activeTab === item.id
                                        ? "text-yellow-500"
                                        : "text-white/70 hover:text-white/90"
                                        }`}
                                />
                                <span
                                    className={`ml-2 text-sm transition-all duration-300 ${activeTab === item.id
                                        ? "text-yellow-500 font-medium"
                                        : "text-white/50 hover:text-white/70"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative"
                >
                    {/* Background layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-950/75 to-black/80" />
                    <div className="absolute inset-0 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-white/5" />
                    <div className="absolute inset-0 border-t border-white/10" />

                    {/* Content */}
                    <div className="relative flex justify-around items-center h-16">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className="relative flex flex-col items-center justify-center w-full h-full"
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="activeTabMobile"
                                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-500"
                                        initial={false}
                                    />
                                )}
                                <item.icon
                                    className={`text-xl transition-all duration-300 ${activeTab === item.id
                                        ? "text-yellow-500 scale-110"
                                        : "text-white/70"
                                        }`}
                                />
                                <span
                                    className={`text-[10px] mt-1 transition-all duration-300 ${activeTab === item.id
                                        ? "text-yellow-500 font-medium"
                                        : "text-white/50"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Navbar;
