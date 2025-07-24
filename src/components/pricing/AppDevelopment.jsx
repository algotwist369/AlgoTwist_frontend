import React from 'react'
import { appPlans } from "../../data/pricingData";

const AppDevelopment = () => {
  return (
    <div className="bg-white min-h-screen py-40 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          App Development Services
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
          We specialize in building high-performance mobile apps for startups and businesses that are fast, scalable, and user-friendly.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {appPlans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-orange-50 border shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {plan.type}
              </h3>
              <p className="text-green-700 font-bold text-lg mb-3">{plan.price}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-500">
                Ideal for: <span className="text-gray-800">{plan.idealFor}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Unlike most agencies, we don't just build apps — we build experiences. Our designs are intuitive, our tech stack is modern, and we ensure your app is deployment-ready with proper testing, security, and performance optimization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-left">
            <div>
              ✅ UI/UX That Converts
            </div>
            <div>
              ✅ Clean Code & Fast Delivery
            </div>
            <div>
              ✅ Full Post-Launch Support
            </div>
            <div>
              ✅ Flexible Payment Plans
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to get your app idea built?</h3>
          <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-full hover:bg-orange-600 transition">
            📞 Request a Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppDevelopment
