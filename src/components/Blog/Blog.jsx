import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../../data/data';

export default function Blog() {
  const navigate = useNavigate();
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 7);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate how many slides we need
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

  // Get current posts to display
  const getCurrentPosts = () => {
    const startIndex = currentSlide * postsPerSlide;
    return recentPosts.slice(startIndex, startIndex + postsPerSlide);
  };

  const handleViewAllBlogs = () => {
    navigate('/blog');
  };

  const handleFeaturedPostClick = () => {
    navigate(`/blog/${featuredPost.slug}`);
  };

  const handlePostClick = (postSlug) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <section id="blog" className="py-20 bg-backgroundtextPrimary">
      <div className="w-11/12 mx-auto px-6">
        {/* Recent Posts Carousel */}
        <div className="relative">
          {/* Carousel Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-onBackground dark:text-white">Recent Posts</h3>
            <div className="flex items-center space-x-4">
              {/* Navigation Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide
                        ? 'bg-textPrimary dark:bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Previous posts"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Next posts"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="w-full">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts
                  .slice(currentSlide * postsPerSlide, (currentSlide + 1) * postsPerSlide)
                  .map((post, index) => (
                    <article
                      key={post.id}
                      className="bg-background dark:bg-gray-800 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-transparent dark:border-gray-700"
                      onClick={() => handlePostClick(post.slug)}
                    >
                      <div 
                        className="relative h-48"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className="absolute top-4 left-4"
                        >
                          <span className="bg-background dark:bg-gray-900 text-textPrimary dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-textPrimary dark:text-textPrimary mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-onBackground dark:text-white mb-3 leading-tight group-hover:text-textPrimary dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-textPrimary dark:text-gray-300 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-textPrimary dark:text-textPrimary">
                            <User className="w-4 h-4 mr-2" />
                            {post.author}
                          </div>
                          <button 
                            className="text-textPrimary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center"
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
                              className="bg-background dark:bg-gray-900 text-textPrimary dark:text-gray-300 px-2 py-1 rounded-full text-xs flex items-center"
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
                    index === currentSlide
                      ? 'bg-textPrimary dark:bg-blue-400'
                      : 'bg-gray-300 dark:bg-gray-600'
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
            className="bg-background dark:bg-gray-800 border-2 border-textPrimary dark:border-blue-400 text-textPrimary dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-colors flex items-center mx-auto"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
} 