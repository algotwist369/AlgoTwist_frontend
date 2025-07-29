import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { blogPosts } from "../../data/data";

export default function Blog() {
  const navigate = useNavigate();
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 7);
  const [currentSlide, setCurrentSlide] = useState(0);

  const postsPerSlide = 3;
  const totalSlides = Math.ceil(recentPosts.length / postsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentPosts = () => {
    const startIndex = currentSlide * postsPerSlide;
    return recentPosts.slice(startIndex, startIndex + postsPerSlide);
  };

  const handleViewAllBlogs = () => {
    navigate("/blog");
  };

  const handleFeaturedPostClick = () => {
    navigate(`/blog/${featuredPost.slug}`);
  };

  const handlePostClick = (postSlug) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <section id="blog" className="py-20 bg-backgroundPrimary">
      <div className="w-11/12 mx-auto px-6">
        {/* Recent Posts Carousel */}
        <div className="relative">
          {/* Carousel Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-textPrimary">Recent Posts</h3>
            <div className="flex items-center space-x-4">
              {/* Navigation Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-backgroundSecondary" : "bg-textPrimary"
                    }`}
                  />
                ))}
              </div>
              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-backgroundPrimary border border-borderColor hover:bg-textPrimary transition-colors"
                  aria-label="Previous posts"
                >
                  <ChevronLeft className="w-5 h-5 text-textPrimary" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-backgroundPrimary border border-borderColor hover:bg-textPrimary transition-colors"
                  aria-label="Next posts"
                >
                  <ChevronRight className="w-5 h-5 text-textPrimary" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentPosts().map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-backgroundPrimary shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-transparent"
                    onClick={() => handlePostClick(post.slug)}
                  >
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-backgroundPrimary text-textPrimary px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-textPrimary mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-textPrimary mb-3 leading-tight transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-textPrimary mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-textPrimary">
                          <User className="w-4 h-4 mr-2" />
                          {post.author}
                        </div>
                        <button
                          className="text-accent font-semibold flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePostClick(post.slug);
                          }}
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-textPrimary text-gray-800 px-2 py-1 rounded-full text-xs flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center mt-8 lg:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-backgroundSecondary" : "bg-textPrimary"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleViewAllBlogs}
            className="bg-backgroundPrimary border-2 border-highlightTextSecondary text-textPrimary px-8 py-4 rounded-lg font-semibold hover:bg-highlightText hover:text-white transition-colors flex items-center mx-auto"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
