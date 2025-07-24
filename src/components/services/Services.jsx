import React from 'react'
import { ChevronRight } from 'lucide-react';

const accentColor = "purple-600";

const serviceImages = [
    '/assets/images/web.png',
    'https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp', // App Development
    '/assets/images/digital.png', // Digital Marketing
    '/assets/images/performance.png', // Software Development
    '/assets/images/seo.png', // SEO Marketing
    'https://www.vskills.in/certification/blog/wp-content/uploads/2019/03/Advertisement-Media.jpg', // Advertisement
];

const services = [
    {
        title: "Web Design",
        description: "Modern, responsive, and user-centric website designs that captivate visitors and drive business results."
    },
    {
        title: "App Development",
        description: "Custom mobile and web applications tailored to your business needs, ensuring seamless user experiences across all platforms."
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies to grow your brand, engage your audience, and increase conversions."
    },
    {
        title: "Performance Marketing",
        description: "Robust and scalable software solutions engineered to solve your unique business challenges."
    },
    {
        title: "SEO Marketing",
        description: "Boost your online visibility and drive organic traffic with advanced SEO strategies tailored to your business."
    },
    {
        title: "Advertisement",
        description: "Creative and data-driven advertising campaigns to maximize your reach and impact across digital channels."
    }
];

const Services = () => {
    return (
        <div>
            <section id="services" className="py-20 bg-white">
                <div className="w-11/12 mx-auto px-0 sm:px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Our <span className="text-purple-600">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our services include comprehensive technology solutions tailored to address the complex needs of today’s enterprises.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                tabIndex={0}
                                className="relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 border-gray-200 flex flex-col overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-400"
                            >
                                <div className="relative w-full aspect-[16/9] overflow-hidden">
                                    <img
                                        src={serviceImages[index % serviceImages.length]}
                                        alt={`Service: ${service.title}`}
                                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-white/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-center mb-4">
                                        {service.description}
                                    </p>
                                    <button className="mt-2 px-5 py-2 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
                                        Learn More <ChevronRight className="inline w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* See All Services Button */}
                    <div className="flex justify-center mt-12">
                        <button className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold text-lg shadow hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">
                            See All Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
