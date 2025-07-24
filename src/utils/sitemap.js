import { blogPosts } from '../data/data';

// Generate sitemap data for blog posts
export const generateBlogSitemap = () => {
    const baseUrl = 'https://yourdomain.com';
    
    return blogPosts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8
    }));
};

// Generate sitemap data for main pages
export const generateMainSitemap = () => {
    const baseUrl = 'https://yourdomain.com';
    
    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1.0
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.9
        }
    ];
};

// Get all sitemap data
export const getAllSitemapData = () => {
    return [
        ...generateMainSitemap(),
        ...generateBlogSitemap()
    ];
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
    const baseUrl = 'https://yourdomain.com';
    
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /private/`;
}; 