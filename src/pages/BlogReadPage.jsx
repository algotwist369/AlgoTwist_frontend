import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag, ArrowLeft, Share2, Bookmark, MessageCircle, Eye } from 'lucide-react';
import { blogPosts } from '../data/data';

export default function BlogReadPage() {
    const { slug, id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [shareCount, setShareCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        
        let foundPost = null;
        
        // Handle backward compatibility for ID-based URLs
        if (id && !slug) {
            foundPost = blogPosts.find(p => p.id === parseInt(id));
            if (foundPost) {
                // Redirect to slug-based URL for better SEO
                navigate(`/blog/${foundPost.slug}`, { replace: true });
                return;
            }
        } else if (slug) {
            foundPost = blogPosts.find(p => p.slug === slug);
        }
        
        if (foundPost) {
            setPost(foundPost);
            
            // Update document title and meta tags for SEO
            document.title = `${foundPost.title} | Your Company Name`;
            
            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', foundPost.excerpt);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = foundPost.excerpt;
                document.head.appendChild(meta);
            }
            
            // Update Open Graph tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) {
                ogTitle.setAttribute('content', foundPost.title);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:title');
                meta.content = foundPost.title;
                document.head.appendChild(meta);
            }
            
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', foundPost.excerpt);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:description');
                meta.content = foundPost.excerpt;
                document.head.appendChild(meta);
            }
            
            const ogImage = document.querySelector('meta[property="og:image"]');
            if (ogImage) {
                ogImage.setAttribute('content', foundPost.image);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:image');
                meta.content = foundPost.image;
                document.head.appendChild(meta);
            }
            
            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) {
                ogUrl.setAttribute('content', window.location.href);
            } else {
                const meta = document.createElement('meta');
                meta.setAttribute('property', 'og:url');
                meta.content = window.location.href;
                document.head.appendChild(meta);
            }
            
            // Update Twitter Card tags
            const twitterCard = document.querySelector('meta[name="twitter:card"]');
            if (!twitterCard) {
                const meta = document.createElement('meta');
                meta.name = 'twitter:card';
                meta.content = 'summary_large_image';
                document.head.appendChild(meta);
            }
            
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) {
                twitterTitle.setAttribute('content', foundPost.title);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'twitter:title';
                meta.content = foundPost.title;
                document.head.appendChild(meta);
            }
            
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) {
                twitterDescription.setAttribute('content', foundPost.excerpt);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'twitter:description';
                meta.content = foundPost.excerpt;
                document.head.appendChild(meta);
            }
            
            const twitterImage = document.querySelector('meta[name="twitter:image"]');
            if (twitterImage) {
                twitterImage.setAttribute('content', foundPost.image);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'twitter:image';
                meta.content = foundPost.image;
                document.head.appendChild(meta);
            }
            
            // Add structured data for the blog post
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": foundPost.title,
                "description": foundPost.excerpt,
                "image": foundPost.image,
                "author": {
                    "@type": "Person",
                    "name": foundPost.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Your Company Name",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://yourdomain.com/logo.png"
                    }
                },
                "datePublished": foundPost.date,
                "dateModified": foundPost.date,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": window.location.href
                },
                "keywords": foundPost.tags.join(', '),
                "articleSection": foundPost.category
            };
            
            // Remove existing structured data if any
            const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
            if (existingStructuredData) {
                existingStructuredData.remove();
            }
            
            // Add new structured data
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);
            
            // Find related posts (same category, excluding current post)
            const related = blogPosts
                .filter(p => p.category === foundPost.category && p.slug !== foundPost.slug)
                .slice(0, 3);
            setRelatedPosts(related);
        }
        setIsLoading(false);
    }, [slug, id, navigate]);

    const handleBackToBlog = () => {
        navigate('/blog');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
        }
        setShareCount(prev => prev + 1);
    };

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleRelatedPostClick = (postSlug) => {
        navigate(`/blog/${postSlug}`);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-surface dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-textPrimary dark:border-blue-400 mx-auto mb-4"></div>
                    <p className="text-muted dark:text-textPrimary">Loading post...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-surface dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold text-onBackground dark:text-white mb-4">404</h1>
                        <h2 className="text-2xl font-semibold text-textPrimary dark:text-gray-300 mb-4">Blog Post Not Found</h2>
                        <p className="text-muted dark:text-textPrimary mb-8">
                            The blog post you're looking for doesn't exist or has been moved.
                        </p>
                    </div>
                    <motion.button
                        onClick={handleBackToBlog}
                        className="bg-textPrimary text-ontextPrimary px-6 py-3 rounded-lg font-semibold hover:bg-textPrimary/90 transition-colors flex items-center mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Blog
                    </motion.button>
                </div>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-surface dark:bg-gray-900 transition-colors duration-300">
            {/* Header */}
            <motion.div 
                className="bg-background dark:bg-gray-800 shadow-sm border-b border-border dark:border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between mb-6">
                        <motion.button
                            onClick={handleBackToBlog}
                            className="flex items-center text-textPrimary dark:text-blue-400 hover:text-textPrimary/80 dark:hover:text-blue-300 font-semibold transition-colors"
                            whileHover={{ x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Blog
                        </motion.button>
                        
                        <div className="flex items-center space-x-4">
                            <motion.button
                                onClick={handleShare}
                                className="flex items-center text-muted dark:text-textPrimary hover:text-textPrimary dark:hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Share2 className="w-5 h-5 mr-2" />
                                Share {shareCount > 0 && `(${shareCount})`}
                            </motion.button>
                            <motion.button
                                onClick={toggleBookmark}
                                className={`flex items-center transition-colors ${
                                    isBookmarked 
                                        ? 'text-textPrimary dark:text-blue-400' 
                                        : 'text-muted dark:text-textPrimary hover:text-textPrimary dark:hover:text-blue-400'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Article Header */}
                    <motion.article variants={itemVariants} className="mb-12">
                        {/* Category Badge */}
                        <motion.div 
                            className="mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                        >
                            <span className="bg-textPrimary text-ontextPrimary px-4 py-2 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1 
                            className="text-4xl lg:text-5xl font-bold text-onBackground dark:text-white mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            {post.title}
                        </motion.h1>

                        {/* Meta Information */}
                        <motion.div 
                            className="flex flex-wrap items-center gap-6 text-muted dark:text-textPrimary mb-8"
                            variants={itemVariants}
                        >
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                <span className="font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                {post.readTime}
                            </div>
                            <div className="flex items-center">
                                <Eye className="w-5 h-5 mr-2" />
                                <span>1.2k views</span>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div 
                            className="relative h-96 mb-8 rounded-xl overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Tags */}
                        <motion.div 
                            className="flex flex-wrap gap-2 mb-8"
                            variants={itemVariants}
                        >
                            {post.tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="bg-surface dark:bg-gray-900 text-onBackground dark:text-gray-300 px-3 py-1 rounded-full text-sm flex items-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Tag className="w-4 h-4 mr-1" />
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.article>

                    {/* Article Content */}
                    <motion.div 
                        className="bg-background dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-12"
                        variants={itemVariants}
                    >
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <p className="text-xl text-onBackground dark:text-white leading-relaxed mb-6">
                                {post.content}
                            </p>
                            
                            {/* Extended content for demonstration */}
                            <p className="text-onBackground dark:text-gray-300 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            
                            <h2 className="text-2xl font-bold text-onBackground dark:text-white mb-4 mt-8">
                                Key Takeaways
                            </h2>
                            
                            <ul className="list-disc list-inside text-onBackground dark:text-gray-300 space-y-2 mb-6">
                                <li>Understanding the current landscape of enterprise software development</li>
                                <li>Implementing best practices for scalable architecture</li>
                                <li>Leveraging modern technologies for competitive advantage</li>
                                <li>Building robust security measures into your applications</li>
                            </ul>
                            
                            <p className="text-onBackground dark:text-gray-300 leading-relaxed mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            
                            <blockquote className="border-l-4 border-textPrimary pl-6 italic text-onBackground dark:text-gray-300 my-8">
                                "The future of enterprise software development lies in the ability to adapt quickly to changing business needs while maintaining high quality and security standards."
                            </blockquote>
                            
                            <p className="text-onBackground dark:text-gray-300 leading-relaxed">
                                In conclusion, the landscape of enterprise software development continues to evolve rapidly. Organizations that embrace these changes and invest in modern development practices will be better positioned to succeed in the digital economy.
                            </p>
                        </div>
                    </motion.div>

                    {/* Author Section */}
                    <motion.div 
                        className="bg-background dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-12"
                        variants={itemVariants}
                    >
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 bg-textPrimary rounded-full flex items-center justify-center">
                                <span className="text-ontextPrimary font-bold text-xl">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-onBackground dark:text-white mb-2">
                                    {post.author}
                                </h3>
                                <p className="text-muted dark:text-textPrimary mb-3">
                                    Senior Technology Consultant with over 10 years of experience in enterprise software development and digital transformation.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <button className="text-textPrimary dark:text-blue-400 hover:text-textPrimary/80 dark:hover:text-blue-300 font-medium">
                                        View Profile
                                    </button>
                                    <button className="text-textPrimary dark:text-blue-400 hover:text-textPrimary/80 dark:hover:text-blue-300 font-medium">
                                        More Articles
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <h2 className="text-2xl font-bold text-onBackground dark:text-white mb-6">
                                Related Articles
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <motion.article
                                        key={relatedPost.id}
                                        className="bg-background dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent dark:border-gray-700"
                                        whileHover={{ y: -5 }}
                                        onClick={() => handleRelatedPostClick(relatedPost.slug)}
                                    >
                                        <div className="h-48">
                                            <img
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center space-x-2 text-sm text-muted dark:text-textPrimary mb-3">
                                                <Calendar className="w-4 h-4" />
                                                <span>{relatedPost.date}</span>
                                                <Clock className="w-4 h-4 ml-2" />
                                                <span>{relatedPost.readTime}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-onBackground dark:text-white mb-2 leading-tight">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-muted dark:text-textPrimary text-sm mb-4">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-muted dark:text-textPrimary">
                                                    {relatedPost.author}
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-textPrimary dark:text-blue-400" />
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Comments Section */}
                    <motion.div 
                        className="bg-background dark:bg-gray-800 rounded-xl shadow-sm p-8 mt-12"
                        variants={itemVariants}
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <MessageCircle className="w-5 h-5 text-muted dark:text-textPrimary" />
                            <h2 className="text-xl font-bold text-onBackground dark:text-white">
                                Comments (0)
                            </h2>
                        </div>
                        
                        <div className="text-center py-8">
                            <p className="text-muted dark:text-textPrimary mb-4">
                                Be the first to share your thoughts on this article.
                            </p>
                            <button className="bg-textPrimary text-ontextPrimary px-6 py-3 rounded-lg font-semibold hover:bg-textPrimary/90 transition-colors">
                                Add Comment
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 