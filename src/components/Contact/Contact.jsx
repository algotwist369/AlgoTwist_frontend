import React from 'react'
import { motion } from 'framer-motion';
import {Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6 text-blue-600" />,
            title: "+91 7388480128",
            subtitle: "24/7 Enterprise Support"
        },
        {
            icon: <Mail className="w-6 h-6 text-blue-600" />,
            title: "info.algotwist@gmail.com",
            subtitle: "Business Inquiries"
        },
        {
            icon: <MapPin className="w-6 h-6 text-blue-600" />,
            title: "Vashi, Navi Mumbai",
            subtitle: "Mumbai"
        }
    ];

    return (
        <div>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="grid lg:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={itemVariants}>
                            <motion.h2 
                                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Ready to Transform
                                <span className="block text-blue-600">Your Business?</span>
                            </motion.h2>
                            <motion.p 
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Let's discuss how our enterprise solutions can accelerate your digital transformation and drive sustainable growth.
                            </motion.p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center group cursor-pointer"
                                        variants={itemVariants}
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div 
                                            className="mr-4"
                                            whileHover={{ 
                                                scale: 1.2,
                                                rotate: 5,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {info.icon}
                                        </motion.div>
                                        <div>
                                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {info.title}
                                            </div>
                                            <div className="text-gray-600">{info.subtitle}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
                            variants={formVariants}
                            whileHover={{ 
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                y: -5
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.h3 
                                className="text-2xl font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Request Consultation
                            </motion.h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <motion.div
                                        custom={0}
                                        variants={inputVariants}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <motion.input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </motion.div>
                                    <motion.div
                                        custom={1}
                                        variants={inputVariants}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <motion.input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </motion.div>
                                </div>
                                <motion.div
                                    custom={2}
                                    variants={inputVariants}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                                    <motion.input 
                                        type="email" 
                                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div
                                    custom={3}
                                    variants={inputVariants}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                    <motion.input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div
                                    custom={4}
                                    variants={inputVariants}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                                    <motion.textarea 
                                        rows="4" 
                                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.button 
                                    type="submit" 
                                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                    whileHover={{ 
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Schedule Consultation
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact
