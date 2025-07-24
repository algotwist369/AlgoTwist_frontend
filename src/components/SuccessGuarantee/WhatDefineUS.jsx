import React from 'react'
import { FaUserTie, FaBrain, FaCogs, FaClock, FaMoneyBillWave, FaRocket } from 'react-icons/fa'

const features = [
    { title: 'Vision-Driven Teams', icon: <FaUserTie /> },
    { title: 'Creative Mindset', icon: <FaBrain /> },
    { title: 'Tech Expertise', icon: <FaCogs /> },
    { title: 'Real-Time Support', icon: <FaClock /> },
    { title: 'Cost Efficient', icon: <FaMoneyBillWave /> },
    { title: 'Future-Ready', icon: <FaRocket /> },
]

const WhatDefineUS = () => {
    return (
        <section className="relative bg-white text-gray-900 py-20 px-6 overflow-hidden">
            {/* Decorative blurred background shapes */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl z-0" />
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start relative z-10">

                {/* Left Glass Card with animated border */}
                <div className="relative group p-8 rounded-3xl max-w-[370px] text-gray-900 shadow-2xl overflow-hidden bg-white/70 border border-purple-200 backdrop-blur-2xl"
                    style={{ boxShadow: '0 12px 40px rgba(128,0,255,0.10)' }}
                >
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none z-10 animate-pulse"
                        style={{
                            background: 'linear-gradient(120deg, rgba(128,0,255,0.10) 0%, rgba(168,85,247,0.08) 100%)',
                            border: '2px solid transparent',
                            maskImage: 'linear-gradient(white, white)',
                        }}
                    />
                    {/* Content */}
                    <div className="relative z-20">
                        <div className="flex items-center mb-5">
                            <span className="text-5xl text-purple-400 mr-3">❝</span>
                            <h3 className="text-2xl font-extrabold text-purple-700 tracking-wide">Our Belief</h3>
                        </div>
                        <p className="text-lg text-gray-700 font-medium leading-relaxed">
                            We don't follow trends — we build what lasts.<br />
                            Our focus is on creating <span className="text-purple-700 font-semibold">practical, timeless, and scalable</span> solutions that solve real problems — not just for today, but for the future.
                        </p>
                    </div>
                </div>

                {/* Right: Features */}
                <div>
                    <h2 className="text-5xl font-extrabold mb-6 text-purple-700 drop-shadow-lg tracking-tight">What Defines Us</h2>
                    <p className="text-xl text-gray-700 mb-10 max-w-xl">
                        Our team brings <span className="text-purple-700 font-semibold">experience, creativity, and strategy</span> together. We believe in clarity, consistency, and delivering results that matter.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 p-5 border border-purple-100 rounded-2xl bg-white/80 hover:bg-purple-50/70 transition-all duration-200 shadow group cursor-pointer hover:scale-[1.03] hover:shadow-xl"
                                style={{ backdropFilter: 'blur(8px)' }}
                            >
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-200">
                                    <span className="text-purple-700 text-2xl group-hover:scale-110 transition-transform duration-200">{feature.icon}</span>
                                </span>
                                <span className="text-gray-900 text-lg font-bold group-hover:text-purple-700 transition-colors duration-200 tracking-wide">{feature.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhatDefineUS
