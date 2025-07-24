import React from 'react'
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';


const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Expert",
    "Certified Kubernetes Administrator"
];

const Certifications = () => {
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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={titleVariants}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Industry <span className="text-blue-600">Certifications</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our team maintains the highest industry standards and certifications
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div 
                                key={index} 
                                className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                    y: -5
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                </motion.div>
                                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {cert}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Certifications
