import React from 'react'
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Footer = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
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

  const footerSections = [
    {
      title: "Services",
      items: ["Enterprise Development", "Mobile Solutions", "Cloud Migration", "DevOps & Infrastructure"]
    },
    {
      title: "Industries",
      items: ["Financial Services", "Healthcare", "E-Commerce", "Manufacturing"]
    },
    {
      title: "Company",
      items: ["About Us", "Leadership Team", "Careers", "Press & Media"]
    }
  ];

  return (
    <div>
      <footer className="bg-[#393E46] text-white py-16">
        <div className="w-11/12 mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
                  variants={logoVariants}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  AlgoTwist
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-white leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Delivering enterprise-grade technology solutions that drive innovation and business growth.
              </motion.p>
              <motion.div 
                className="text-sm text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                ISO 27001 Certified | SOC 2 Type II Compliant
              </motion.div>
            </motion.div>

            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.h4 
                  className="font-semibold mb-6 text-lg text-white"
                  whileHover={{ color: "#3b82f6" }}
                  transition={{ duration: 0.2 }}
                >
                  {section.title}
                </motion.h4>
                <div className="space-y-3 text-white">
                  {section.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      className="hover:text-white cursor-pointer transition-colors"
                      whileHover={{ 
                        x: 5,
                        color: "#ffffff",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.p 
              className="text-white text-sm"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              &copy; 2025 TechSolutions Pro. All rights reserved. Owned by AlgoTwist.
            </motion.p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-white">
              {["Privacy Policy", "Terms of Service", "Security"].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="hover:text-white transition-colors"
                  whileHover={{ 
                    x: 2,
                    color: "#ffffff",
                    transition: { duration: 0.2 }
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
