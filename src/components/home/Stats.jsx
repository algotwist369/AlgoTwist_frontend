import React from 'react'
import { stats } from "../../data/data.jsx"

const Stats = ({ isVisible }) => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-black text-sm md:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
