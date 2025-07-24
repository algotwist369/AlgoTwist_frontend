import React from 'react'
import { motion } from 'framer-motion'

const SuccessGuarantee = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
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

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "backOut"
            }
        }
    };

    const guaranteeCards = [
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Performance Guarantee",
            description: "If your solution doesn't meet the agreed-upon performance metrics within 30 days, we'll optimize it at no additional cost until it does.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            title: "Money-Back Guarantee",
            description: "Not satisfied with our solution? We'll provide a full refund of your investment within 30 days, no questions asked.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
            ),
            title: "Ongoing Support",
            description: "Receive unlimited support and maintenance for 30 days after deployment to ensure your solution runs smoothly.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        }
    ];

    return (
        <div>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={titleVariants}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Your Success, Our Promise
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're so confident in our ability to deliver exceptional results that we offer a comprehensive minimum 30-day success guarantee on all our enterprise solutions.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {guaranteeCards.map((card, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer group"
                                variants={cardVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    y: -5
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className={`w-16 h-16 ${card.bgColor} rounded-full flex items-center justify-center mb-6`}
                                    variants={iconVariants}
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: 10,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {card.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="mt-12 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <motion.div 
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.svg 
                                className="w-5 h-5 mr-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </motion.svg>
                            Risk-Free Implementation
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default SuccessGuarantee
