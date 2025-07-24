import React, { useEffect, useState } from 'react';
import { testimonials } from '../../data/data.jsx';

const clientLogos = [
    { name: 'Conde Nast', logo: '/logos/conde.png' },
    { name: 'Disney', logo: '/logos/disney.png' },
    { name: 'Exchange4Media', logo: '/logos/exchange.png' },
    { name: 'Exide', logo: '/logos/exide.png' },
    { name: 'FirstChoice', logo: '/logos/firstchoice.png' },
    { name: 'HP Gas', logo: '/logos/hp.png' },
    { name: 'ICICI Bank', logo: '/logos/icici.png' },
    { name: 'IIHS', logo: '/logos/iihs.png' },
    { name: 'Instant Mudra', logo: '/logos/instantmudra.png' },
    { name: 'iProspect', logo: '/logos/iprospect.png' },
    { name: 'Isobar', logo: '/logos/isobar.png' },
    { name: 'JSW', logo: '/logos/jsw.png' },
    { name: 'Kamal Fincap', logo: '/logos/kamal.png' },
    { name: 'Midtronics', logo: '/logos/midtronics.png' },
    { name: 'SmartX', logo: '/logos/smartx.png' },
    { name: 'Conde Nast', logo: '/logos/conde.png' },
    { name: 'Disney', logo: '/logos/disney.png' },
    { name: 'Exchange4Media', logo: '/logos/exchange.png' },
    { name: 'Exide', logo: '/logos/exide.png' },
    { name: 'FirstChoice', logo: '/logos/firstchoice.png' },
    { name: 'HP Gas', logo: '/logos/hp.png' },
    { name: 'ICICI Bank', logo: '/logos/icici.png' },
    { name: 'IIHS', logo: '/logos/iihs.png' },
    { name: 'Instant Mudra', logo: '/logos/instantmudra.png' },
    { name: 'iProspect', logo: '/logos/iprospect.png' },
    { name: 'Isobar', logo: '/logos/isobar.png' },
    { name: 'JSW', logo: '/logos/jsw.png' },
    { name: 'Kamal Fincap', logo: '/logos/kamal.png' },
    { name: 'Midtronics', logo: '/logos/midtronics.png' },
    { name: 'SmartX', logo: '/logos/smartx.png' },
];

const bgColors = [
    'bg-pink-50', 'bg-green-50', 'bg-yellow-50', 'bg-purple-50',
    'bg-rose-50', 'bg-lime-50', 'bg-purple-50',
];

const OurClient = () => {
    const [index, setIndex] = useState(0);
    const [logoIndex, setLogoIndex] = useState(0); // For logo carousel
    const logosPerView = 18;

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(id);
    }, []);

    // Auto-slide for client logos
    useEffect(() => {
        const logoInterval = setInterval(() => {
            setLogoIndex((prev) => (prev + 1) % clientLogos.length);
        }, 3000);
        return () => clearInterval(logoInterval);
    }, []);

    // Calculate visible logos
    const visibleLogos = [];
    for (let i = 0; i < logosPerView; i++) {
        visibleLogos.push(clientLogos[(logoIndex + i) % clientLogos.length]);
    }

    const testimonial = testimonials[index];

    return (
        <section className="relative bg-white py-20 px-4 md:px-16 overflow-hidden">
            {/* Decorative blurred background shapes */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl z-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative z-10">
                {/* Left: Testimonial */}
                <div className="p-8 w-[560px]  min-h-[400px] flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-purple-800 mb-4">What Clients Say</h3>

                        <div className="flex items-start gap-6">

                            <div className="flex-1">
                                <p className="text-lg text-gray-700 italic mb-3 transition-opacity duration-500">
                                    “{testimonial.text}”
                                </p>

                                <div className="text-purple-800 font-semibold text-lg">
                                    {testimonial.name}
                                </div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>

                                <div className="flex items-center mt-2 text-orange-400">
                                    {'★'.repeat(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="mt-6 flex gap-2 justify-center">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-purple-500' : 'bg-gray-300'
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>

                {/* Right: Scrollable Logo Grid */}
                <div className="w-full bg-purple-100 p-6 rounded-2xl border border-purple-100">
                    <h3 className="text-2xl font-bold text-center text-purple-800 mb-1">
                        Our Prestigious Clients
                    </h3>
                    <div className="w-full flex justify-center mb-4">
                        <span className="block w-16 h-1 bg-purple-200 rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 transition-all duration-500">
                        {visibleLogos.map((client, i) => (
                            <div
                                key={i}
                                className={`p-4 rounded-xl flex items-center justify-center h-24 ${bgColors[(logoIndex + i) % bgColors.length]} shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-200`}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-10 max-w-[80%] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurClient;
