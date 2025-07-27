import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import MouseGlowCard from "../common/MouseGlowCard";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "+91 7388480128, 9082178097",
    subtitle: "24/7 Enterprise Support",
  },
  {
    icon: <Mail className="w-6 h-6 text-green-500 dark:text-green-400" />,
    title: "info.algotwist@gmail.com",
    subtitle: "Business Inquiries",
  },
  {
    icon: <MapPin className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    title: "Vashi, Navi Mumbai",
    subtitle: "Serving Clients Pan India",
  },
];

const Contact = () => {
  return (
    <section className="py-20 bg-backgroundPrimary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-textPrimary">
            Great things start with a conversation!
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
              Open to:
            </span>
          </div>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Conversations, collaborations, creative challenges, and innovative
            projects.
          </p>
          <p className="mt-3 text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Let's connect and explore how we can work together to create
            something impactful.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center sm:text-left">
          {contactInfo.map((info, index) => (
            <MouseGlowCard
              key={index}
              className="flex flex-col sm:flex-row items-center gap-6 p-7 rounded-2xl bg-white/40 dark:bg-backgroundPrimary/60 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent dark:from-primary dark:to-secondary shadow-md">
                {info.icon}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="text-xl font-bold text-textPrimary dark:text-white mb-1">
                  {info.title}
                </div>
                <div className="text-textSecondary dark:text-gray-300 text-base font-medium">
                  {info.subtitle}
                </div>
              </div>
            </MouseGlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
