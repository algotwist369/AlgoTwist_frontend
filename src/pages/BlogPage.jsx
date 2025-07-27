import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Removed framer-motion
import { Calendar, User, ArrowRight, Clock, Tag, Search, Filter, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/data';

export default function BlogPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(blogPosts);
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('latest');
    const postsPerPage = 6;

    // Get unique categories
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    // Filter and search posts
    useEffect(() => {
        window.scroll(0,0);
        let filtered = blogPosts;

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Sort posts
        switch (sortBy) {
            case 'latest':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'title':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'author':
                filtered.sort((a, b) => a.author.localeCompare(b.author));
                break;
            default:
                break;
        }

        setFilteredPosts(filtered);
        setCurrentPage(1); // Reset to first page when filtering
    }, [searchTerm, selectedCategory, sortBy]);

    // Get current posts for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('All');
        setSortBy('latest');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    const handlePostClick = (postSlug) => {
        navigate(`/blog/${postSlug}`);
    };




    return (
        <div className="min-h-screen bg-surface dark:bg-gray-900 transition-colors duration-300">
            {/* Header */}
            <div className="bg-background dark:bg-gray-800 shadow-sm border-b border-border dark:border-gray-700  pt-[5rem]">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={handleBackToHome}
                            className="flex items-center text-primary dark:text-blue-400 hover:text-primary/80 dark:hover:text-blue-300 font-semibold transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Home
                        </button>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-onBackground dark:text-white mb-4">
                            Our Blog
                        </h1>
                        <p className="text-xl text-muted dark:text-gray-400 max-w-3xl mx-auto">
                            Discover insights, trends, and best practices in enterprise software development,
                            digital transformation, and technology innovation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Search and Filter Section */}
                <div className="bg-background dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-border dark:border-gray-700">
                    <div className="grid lg:grid-cols-4 gap-6">
                        {/* Search */}
                        <div className="lg:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search posts, authors, or tags..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-border bg-background text-onBackground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 border border-border bg-background text-onBackground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort By */}
                        <div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-3 border border-border bg-background text-onBackground rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            >
                                <option value="latest">Latest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="title">Title A-Z</option>
                                <option value="author">Author A-Z</option>
                            </select>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(searchTerm || selectedCategory !== 'All') && (
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-muted dark:text-gray-400">Active filters:</span>
                                {searchTerm && (
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Search: "{searchTerm}"
                                    </span>
                                )}
                                {selectedCategory !== 'All' && (
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                        Category: {selectedCategory}
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={clearFilters}
                                className="text-primary dark:text-blue-400 hover:text-primary/80 dark:hover:text-blue-300 text-sm font-medium"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-muted dark:text-gray-400">
                        Showing {filteredPosts.length} of {blogPosts.length} posts
                    </p>
                    {filteredPosts.length === 0 && (
                        <p className="text-red-600 font-medium">No posts found matching your criteria</p>
                    )}
                </div>

                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="bg-background dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent dark:border-gray-700"
                                onClick={() => handlePostClick(post.slug)}
                            >
                                <div className="relative h-48">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 text-sm text-muted dark:text-gray-400 mb-3">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-onBackground dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted dark:text-gray-300 mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center text-sm text-muted dark:text-gray-400">
                                            <User className="w-4 h-4 mr-2" />
                                            {post.author}
                                        </div>
                                        <button 
                                            className="text-primary dark:text-blue-400 hover:text-primary/80 dark:hover:text-blue-300 font-semibold flex items-center"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handlePostClick(post.slug);
                                            }}
                                        >
                                            Read More
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-background dark:bg-gray-900 text-muted dark:text-gray-300 px-2 py-1 rounded-full text-xs flex items-center"
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
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-border dark:border-gray-700 hover:bg-background dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-muted dark:text-gray-400" />
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            // Show first page, last page, current page, and pages around current
                            if (
                                pageNumber === 1 ||
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`px-4 py-2 rounded-lg border transition-colors ${
                                            currentPage === pageNumber
                                                ? 'bg-primary text-white border-primary'
                                                : 'border-border dark:border-gray-700 hover:bg-background dark:hover:bg-gray-800 text-muted dark:text-gray-400'
                                        }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            } else if (
                                pageNumber === currentPage - 2 ||
                                pageNumber === currentPage + 2
                            ) {
                                return <span key={pageNumber} className="px-2 text-muted dark:text-gray-400">...</span>;
                            }
                            return null;
                        })}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-border dark:border-gray-700 hover:bg-background dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-muted dark:text-gray-400" />
                        </button>
                    </div>
                )}

                {/* No Results Message */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <div className="max-w-md mx-auto">
                            <div className="w-16 h-16 bg-background dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-muted dark:text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-onBackground dark:text-white mb-2">No posts found</h3>
                            <p className="text-muted dark:text-gray-400 mb-6">
                                Try adjusting your search terms or filters to find what you're looking for.
                            </p>
                            <button
                                onClick={clearFilters}
                                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 