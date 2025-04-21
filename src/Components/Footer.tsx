import React from 'react';
import { FaInstagram, FaDiscord, FaTwitter, FaTiktok, FaHeart, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About', href: '#' },
            { name: 'Projects', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Contact', href: '#' }
        ],
        social: [
            { name: 'Instagram', href: '#', icon: '📸' },
            { name: 'Twitter', href: '#', icon: '🐦' },
            { name: 'Discord', href: '#', icon: '💬' },
            { name: 'TikTok', href: '#', icon: '🎵' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' }
        ]
    };

    return (
        <footer className="relative py-12 overflow-hidden">
            {/* Gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-light text-white">ZyrixCraft</h3>
                        <p className="text-purple-100/60 text-sm">
                            Crafting digital experiences with creativity and precision
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm text-purple-300/70 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-purple-100/60 hover:text-purple-300/90 text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm text-purple-300/70 uppercase tracking-wider">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-purple-100/60 text-sm group">
                                <FaEnvelope className="text-purple-300/70 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                                <span className="group-hover:text-purple-300/90 transition-colors">contact@zyrixcraft.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-purple-100/60 text-sm group">
                                <FaMapMarkerAlt className="text-purple-300/70 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                                <span className="group-hover:text-purple-300/90 transition-colors">Digital Space</span>
                            </div>
                            <div className="flex items-center space-x-2 text-purple-100/60 text-sm group">
                                <FaClock className="text-purple-300/70 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                                <span className="group-hover:text-purple-300/90 transition-colors">24/7 Available</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-purple-500/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-purple-100/40 text-sm">
                            © 2024 ZyrixCraft. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-6">
                            {[
                                { icon: FaInstagram, href: '#', label: 'Instagram' },
                                { icon: FaDiscord, href: '#', label: 'Discord' },
                                { icon: FaTwitter, href: '#', label: 'Twitter' },
                                { icon: FaTiktok, href: '#', label: 'TikTok' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-purple-100/40 hover:text-purple-300/90 transition-colors group cursor-pointer"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 