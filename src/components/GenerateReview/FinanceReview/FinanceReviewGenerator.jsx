import React, { useState } from "react";
import { FaQuoteLeft, FaPlus, FaMapMarkerAlt, FaBuilding, FaCopy } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { defaultReviews, variations } from "./data";

export default function FinanceReviewGenerator() {

 const [reviews, setReviews] = useState(defaultReviews);
 const [newReview, setNewReview] = useState("");
 const [generatedReview, setGeneratedReview] = useState("");
 const [location, setLocation] = useState("");
 const [centerName, setCenterName] = useState("");
 const [copied, setCopied] = useState(false);

 const generateReview = () => {
 if (reviews.length === 0) return;

 let base = reviews[Math.floor(Math.random() * reviews.length)];

 // Add location and center name if provided
 if (centerName) {
 base = base.replace(/here|this Finance|this place/gi, centerName);
 }
 if (location) {
 base += ` Located in ${location}, it's worth the visit!`;
 }

 base += variations[Math.floor(Math.random() * variations.length)];

 setGeneratedReview(base);
 };

 const addReview = () => {
 if (newReview.trim()) {
 setReviews([...reviews, newReview.trim()]);
 setNewReview("");
 }
 };

 const copyToClipboard = async () => {
 try {
 await navigator.clipboard.writeText(generatedReview);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 } catch (err) {
 console.error('Failed to copy text: ', err);
 }
 };

 return (
 <div className="min-h-screen bg-backgroundPrimary flex flex-col items-center py-12 px-4">
 <div className="text-center mb-8">
 <h1 className="text-4xl font-bold text-textPrimary mb-2 flex items-center justify-center gap-3">
 Finance Review Generator
 </h1>
 <p className="text-textPrimary text-lg">Create professional Finance reviews from 1000+ authentic samples</p>
 </div>

 {/* Inputs */}
 <div className="bg-backgroundMuted shadow-lg rounded-2xl p-8 mt-4 w-full max-w-2xl border border-borderColor">
 <h2 className="text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
 <MdOutlineReviews className="text-textPrimary" />
 Generate Review
 </h2>

 <div className="grid md:grid-cols-2 gap-6 mb-6">
 <div>
 <label className="block text-textPrimary font-medium mb-2"> Center Name</label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <FaBuilding className="text-textSecondary" />
 </div>
 <input
 type="text"
 value={centerName}
 onChange={(e) => setCenterName(e.target.value)}
  className="w-full pl-10 pr-4 py-3  bg-backgroundMuted text-textPrimary border border-borderColor rounded-xl outline-none transition-all"
 placeholder="Enter your center name"
 />
 </div>
 </div>

 <div>
 <label className="block text-textPrimary font-medium mb-2">Location</label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <FaMapMarkerAlt className="text-slate-400" />
 </div>
 <input
 type="text"
 value={location}
 onChange={(e) => setLocation(e.target.value)}
className="w-full pl-10 pr-4 py-3 text-textPrimary  bg-backgroundMuted border border-borderColor rounded-xl outline-none transition-all"

 placeholder="E.g. Mumbai "
 />
 </div>
 </div>
 </div>

 <button
 onClick={generateReview}
className="w-full bg-buttonPrimary text-textPrimary px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
 >
 <MdOutlineReviews className="text-xl" />
 Generate Review
 </button>
 </div>

 {/* Generated Review */}
 {generatedReview && (
 <div className="bg-backgroundSecondary border border-borderColor p-6 mt-8 rounded-2xl w-full max-w-2xl shadow-lg">
 <div className="flex justify-between items-center mb-4">
 <h3 className="text-lg font-semibold text-textPrimary flex items-center gap-2">
 <FaQuoteLeft className="text-textPrimary" />
 Generated Review
 </h3>
 <button
 onClick={copyToClipboard}
 className={`${copied
 ? 'bg-green-600 hover:bg-green-700'
 : 'bg-accent hover:bg-indigo-700'
 } text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg`}
 title="Copy to clipboard"
 disabled={copied}
 >
 {copied ? (
 <>
 <FaCopy className="text-sm" />
 Copied!
 </>
 ) : (
 <>
 <FaCopy className="text-sm" />
 Copy
 </>
 )}
 </button>
 </div>
 <div className="bg-backgroundMuted p-6 rounded-xl border border-borderColor">
 <p className="text-textPrimary text-lg leading-relaxed">
 {generatedReview}
 </p>
 </div>
 </div>
 )}

 {/* Add Custom Review */}
 <div className="bg-backgroundSecondary shadow-lg rounded-2xl p-8 mt-8 w-full max-w-2xl border border-borderColor">
 <h2 className="text-xl font-semibold text-textPrimary mb-6 flex items-center gap-2">
 <FaPlus className="text-textPrimary" />
 Add Custom Review Sample
 </h2>
 <textarea
 value={newReview}
 onChange={(e) => setNewReview(e.target.value)}
className="w-full text-textPrimary border border-borderColor rounded-xl p-4 bg-backgroundMuted transition-all resize-none"
 rows="4"
 placeholder="Type your own review to include in the pool..."
 />
 <button
 onClick={addReview}
 className="mt-4 bg-backgroundPrimary hover:bg-highlightText border-2 border-highlightText text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-200 shadow-md hover:shadow-lg"
 >
 <FaPlus  />
 Add Review
 </button>
 </div>

 {/* Stats */}
 <div className="bg-backgroundSecondary shadow-lg rounded-2xl p-6 mt-8 w-full max-w-2xl border border-borderColor">
 <div className="text-center">
 <h3 className="text-lg font-semibold text-textPrimary mb-2">Review Database</h3>
 <p className="text-2xl font-bold text-textPrimary">{reviews.length.toLocaleString()}</p>
 <p className="text-textSecondary">authentic human-friendly reviews available</p>
 </div>
 </div>
 </div>
 );
}