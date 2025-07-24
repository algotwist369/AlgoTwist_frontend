import React from 'react'
import { seoPlans } from "../../data/pricingData";


const SeoServices = () => {
  return (
    <section className="bg-white text-gray-800 py-40 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          🚀 SEO Marketing Services
        </h1>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Our SEO strategies are ROI-driven, competitor-crushing, and Google-loving. Whether you're starting out or scaling up, we have the perfect plan tailored for you.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm rounded-lg">
            <thead className="bg-purple-100 text-purple-800 font-semibold">
              <tr>
                <th className="p-4 border border-purple-300">Plan</th>
                <th className="p-4 border border-purple-300">Price</th>
                <th className="p-4 border border-purple-300">Features</th>
                <th className="p-4 border border-purple-300">Badge</th>
              </tr>
            </thead>
            <tbody>
              {seoPlans.map((plan, idx) => (
                <tr key={idx} className="hover:bg-purple-50 transition-colors">
                  <td className="p-4 border border-purple-300 font-medium">{plan.name}</td>
                  <td className="p-4 border border-purple-300 text-green-700 font-semibold">{plan.price}</td>
                  <td className="p-4 border border-purple-300">
                    <ul className="list-disc list-inside space-y-1">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4 border border-purple-300 text-center">
                    <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                      {plan.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We don't just rank you on Google, we build your brand authority. With a proven team of experts, transparent reporting, and ethical practices, we deliver long-term results — not just empty promises.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SeoServices
