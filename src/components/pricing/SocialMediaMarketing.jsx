import React from "react";
import { socialMediaPlans } from "../../data/pricingData";

const SocialMediaMarketing = () => {

    return (
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 min-h-screen py-40 px-4">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
                    Social Media Marketing Plans
                </h1>
                <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
                    Grow your brand’s presence with tailored social media strategies. Whether you’re starting out or scaling up, we have the perfect plan for you.
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
                        <thead className="bg-indigo-100 text-indigo-900">
                            <tr>
                                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold">
                                    Plan
                                </th>
                                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold">
                                    Pricing
                                </th>
                                <th className="border border-gray-300 px-6 py-4 text-left text-lg font-semibold">
                                    Features
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {socialMediaPlans.map(({ plan, price, features }, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-indigo-50 transition-colors duration-300 cursor-pointer"
                                >
                                    <td className="border border-gray-300 px-6 py-5 font-medium text-indigo-700 text-lg">
                                        {plan}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-5 text-green-600 font-semibold">
                                        {price}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-5">
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 text-center">
                    <button
                        className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
                        onClick={() => alert("Contact form coming soon!")}
                    >
                        Contact Us for Custom Plans
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaMarketing;
