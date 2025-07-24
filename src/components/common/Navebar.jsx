import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Cloud, Laptop, Building, Globe, Rocket, TrendingUp, Users, Star, Shield, Layers, PenTool, Search, BarChart3, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/pricingData';

const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pricingDropdown, setPricingDropdown] = useState(false);
  const servicesDropdownRef = useRef(null);
  const pricingDropdownRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const url1 = "https://res.cloudinary.com/djdrpfhdz/image/upload/v1751983381/Algo_Twist_Logo_pnunw4.png";
  const url2 = "https://res.cloudinary.com/djdrpfhdz/image/upload/v1751983396/Algo_Twist_Logo_1_yi4ged.png";

  const menuItems = [
    { to: "/", text: "Home" },
    { to: "/services", text: "Services" },
    { to: "/pricing", text: "Pricing" },
    { to: "/projects", text: "Portfolio" },
    { to: "/our-team", text: "Our Team" },
    { to: "/about-us", text: "About" },
    { to: "/blog", text: "Blog" }
  ];

  const serviceIcons = {
    "Web Development": Code,
    "App Development": Rocket,
    "Performance Marketing": TrendingUp,
    "Digital PR": Globe,
    "Lead Generation": Users,
    "SEO Services": Search,
    "Social Media Marketing": BarChart3,
    "Logo Design & Branding": Palette,
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesDropdown && servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdown(false);
      }
      if (
        pricingDropdown && pricingDropdownRef.current &&
        !pricingDropdownRef.current.contains(event.target)
      ) {
        setPricingDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdown, pricingDropdown]);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${scrollY > 0 ? 'bg-[#EFEEEA]' : 'bg-transparent'}`}>

      <div className="max-w-[89rem] mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={scrollY? url2 : url1}
              alt="Logo"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const baseColor = scrollY > 0 ? 'text-black' : 'text-white';
              const hoverColor = scrollY > 0 ? 'hover:text-black' : 'hover:text-white';
              if (item.text === 'Services') {
                return (
                  <div
                    key="services"
                    className="relative"
                    onMouseEnter={() => {
                      setServicesDropdown(true);
                      setPricingDropdown(false);
                    }}
                    ref={servicesDropdownRef}
                  >
                    <span className={`${baseColor} font-medium hover:font-bold ${hoverColor} cursor-pointer relative group`} onClick={() => setServicesDropdown((open) => !open)}>
                      Services
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                    {servicesDropdown && (
                      <div className="fixed left-0 top-[5.5rem] w-full bg-gradient-to-br from-black via-[#18181b] to-[#232326] rounded-b-xl shadow-2xl border-t border-border py-10 z-50 flex justify-center animate-fadeIn">
                        <div className="w-full max-w-7xl px-8">
                          <div className="mb-6 flex items-center justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">Our Services</h3>
                              <p className="text-gray-300 text-base">Explore what we offer for your business growth</p>
                            </div>
                            <Link
                              to="/all-services"
                              className="inline-block px-6 py-3 bg-primary text-onPrimary rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors border-2 border-primary hover:scale-105 active:scale-95 duration-150"
                            >
                              All Services
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                            {servicesData.map((service) => {
                              const Icon = serviceIcons[service.title] || Layers;
                              return (
                                <Link
                                  key={service.title}
                                  to={service.path}
                                  className="group block px-6 py-6 bg-[#19191d] rounded-xl hover:bg-primary/10 transition-all font-medium text-lg shadow border border-border hover:border-primary hover:shadow-lg hover:scale-[1.03] duration-200"
                                  onClick={() => setServicesDropdown(false)}
                                >
                                  <div className="flex items-center gap-3 mb-2">
                                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-white text-lg">{service.title}</span>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-snug min-h-[40px]">{service.description}</p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else if (item.text === 'Pricing') {
                return (
                  <div
                    key="pricing"
                    className="relative"
                    onMouseEnter={() => {
                      setPricingDropdown(true);
                      setServicesDropdown(false);
                    }}
                    ref={pricingDropdownRef}
                  >
                    <span className={`${baseColor} font-medium hover:font-bold ${hoverColor} cursor-pointer relative group`} onClick={() => setPricingDropdown((open) => !open)}>
                      Pricing
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                    {pricingDropdown && (
                      <div className="fixed left-0 top-[5.5rem] w-full bg-gradient-to-br from-black via-[#18181b] to-[#232326] rounded-b-xl shadow-2xl border-t border-border py-10 z-50 flex justify-center animate-fadeIn">
                        <div className="w-full max-w-7xl px-8">
                          <div className="mb-6 flex items-center justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">Pricing Plans</h3>
                              <p className="text-gray-300 text-base">Transparent pricing for every business need</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                            {servicesData.map((service) => {
                              const Icon = serviceIcons[service.title] || Layers;
                              return (
                                <Link
                                  key={service.title}
                                  to={`/pricing/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="group block px-6 py-6 bg-[#19191d] rounded-xl hover:bg-primary/10 transition-all font-medium text-lg shadow border border-border hover:border-primary hover:shadow-lg hover:scale-[1.03] duration-200"
                                  onClick={() => setPricingDropdown(false)}
                                >
                                  <div className="flex items-center gap-3 mb-2">
                                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-white text-lg">{service.title}</span>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-snug min-h-[40px]">{service.description}</p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={item.text}
                    to={item.to}
                    className={`${baseColor} hover:font-bold ${hoverColor} font-medium relative group`}
                    onMouseEnter={() => {
                      setServicesDropdown(false);
                      setPricingDropdown(false);
                    }}
                  >
                    {item.text}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                );
              }
            })}
          </div>

          {/* CTA Button */}
          <button className="bg-purple-600 text-onPrimary px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium hidden md:block">
            Get Quote
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrollY > 0 ? 'text-black' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrollY > 0 ? 'text-black' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border bg-slate-700">
            <div className="flex flex-col space-y-2 mt-4">
              {menuItems.map((item) => {
                if (item.text === 'Services') {
                  return (
                    <div key="mobile-services" className="flex flex-col">
                      <button
                        className="text-white font-medium flex items-center justify-between w-full py-2 px-2 focus:outline-none"
                        onClick={() => setMobileServicesOpen((open) => !open)}
                      >
                        <span>Services</span>
                        <span>{mobileServicesOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</span>
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-2 flex flex-col space-y-2 bg-[#19191d] rounded-xl py-4 mt-1">
                          <div className="mb-2 px-2">
                            <h3 className="text-lg font-bold text-white mb-1">Our Services</h3>
                            <p className="text-gray-300 text-sm">Explore what we offer for your business growth</p>
                          </div>
                          <Link
                            to="/all-services"
                            className="inline-block px-4 py-2 bg-primary text-onPrimary rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors border-2 border-primary hover:scale-105 active:scale-95 duration-150 mb-2 mx-2"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            All Services
                          </Link>
                          {servicesData.map((service) => {
                            const Icon = serviceIcons[service.title] || Layers;
                            return (
                              <Link
                                key={service.title}
                                to={service.path}
                                className="text-gray-200 py-1 text-sm flex items-center gap-2 px-2"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                <Icon className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-white text-base">{service.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                } else if (item.text === 'Pricing') {
                  return (
                    <div key="mobile-pricing" className="flex flex-col">
                      <button
                        className="text-white font-medium flex items-center justify-between w-full py-2 px-2 focus:outline-none"
                        onClick={() => setMobilePricingOpen((open) => !open)}
                      >
                        <span>Pricing</span>
                        <span>{mobilePricingOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</span>
                      </button>
                      {mobilePricingOpen && (
                        <div className="pl-2 flex flex-col space-y-2 bg-[#19191d] rounded-xl py-4 mt-1">
                          <div className="mb-2 px-2">
                            <h3 className="text-lg font-bold text-white mb-1">Pricing Plans</h3>
                            <p className="text-gray-300 text-sm">Transparent pricing for every business need</p>
                          </div>
                          {servicesData.map((service) => {
                            const Icon = serviceIcons[service.title] || Layers;
                            return (
                              <Link
                                key={service.title}
                                to={`/pricing/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-gray-200 py-1 text-sm flex items-center gap-2 px-2"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setMobilePricingOpen(false);
                                }}
                              >
                                <Icon className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-white text-base">{service.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={item.text}
                      to={item.to}
                      className="text-white font-medium block py-2 px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  );
                }
              })}
              <button className="bg-primary text-onPrimary px-6 py-2 rounded-lg w-fit font-medium mt-2 ml-2 shadow hover:bg-primary/90 transition-colors border-2 border-primary hover:scale-105 active:scale-95 duration-150">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navebar;
