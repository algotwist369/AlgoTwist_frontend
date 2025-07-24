import React from 'react'

const heroSlide = {
  image: 'https://res.cloudinary.com/djdrpfhdz/image/upload/v1751890178/computer-8779040_frd1az.jpg',
  title: 'All-in-one IT services for the modern enterprise',
  description: 'Empower your business with future-ready digital solutions. From automation to cloud integration, we deliver strategies that scale.',
  cta: { text: 'Explore Solutions' }
};

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: heroSlide.image ? `url('${heroSlide.image}')` : undefined,
      }}
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[98px] font-extrabold mb-4 drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {heroSlide.title}
        </h1>
        <p
          className="text-base sm:text-xl md:text-2xl lg:text-[22px] max-w-2xl mb-8 drop-shadow-md"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {heroSlide.description}
        </p>
        <button
          className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={heroSlide.cta?.text || 'Get Started'}
        >
          {heroSlide.cta?.text || 'Get Started'}
        </button>
      </div>
    </section>
  )
}

export default HeroSection
