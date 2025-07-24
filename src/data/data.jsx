import React from 'react';
import { Target, Globe, Smartphone, TrendingUp, Calendar, User, ArrowRight } from 'lucide-react';

// Services
export const services = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies that drive growth and maximize ROI across all channels.",
        features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Strategy"]
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
        features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"]
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Analytics & Insights",
        description: "Data-driven insights and comprehensive analytics to measure and improve your digital presence.",
        features: ["Google Analytics", "Conversion Tracking", "Performance Reports", "ROI Analysis"]
    }
];

// Testimonials
export const testimonials = [
    {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        rating: 5,
        text: "Their digital marketing expertise transformed our online presence. We saw a 300% increase in qualified leads within 6 months."
    },
    {
        name: "Michael Chen",
        company: "GrowthCorp",
        rating: 5,
        text: "The web application they developed exceeded our expectations. Professional, efficient, and incredibly talented team."
    },
    {
        name: "Emily Rodriguez",
        company: "Retail Plus",
        rating: 5,
        text: "Outstanding results! Our e-commerce sales doubled after implementing their comprehensive digital strategy."
    },
    {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        rating: 5,
        text: "Their digital marketing expertise transformed our online presence. We saw a 300% increase in qualified leads within 6 months."
    },
    {
        name: "Michael Chen",
        company: "GrowthCorp",
        rating: 5,
        text: "The web application they developed exceeded our expectations. Professional, efficient, and incredibly talented team."
    },
    {
        name: "Emily Rodriguez",
        company: "Retail Plus",
        rating: 5,
        text: "Outstanding results! Our e-commerce sales doubled after implementing their comprehensive digital strategy."
    }
];

// Stats
export const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150%", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
];

// Blog Posts
export const blogPosts = [
    {
        id: 1,
        slug: "future-enterprise-software-development-2024",
        title: "The Future of Enterprise Software Development in 2024",
        excerpt: "Discover the latest trends and technologies that are reshaping how enterprise software is developed and deployed.",
        content: "Enterprise software development is undergoing a significant transformation in 2024. With the rise of AI, cloud-native architectures, and microservices, organizations are rethinking their development strategies to stay competitive in an increasingly digital world. The integration of artificial intelligence and machine learning into development workflows is not just a trend—it's becoming a necessity for companies looking to optimize their processes and deliver better user experiences.",
        author: "David Chen",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["AI", "Cloud", "Microservices"]
    },
    {
        id: 2,
        slug: "building-scalable-microservices-architecture",
        title: "Building Scalable Microservices Architecture",
        excerpt: "Learn the best practices for designing and implementing microservices that can scale with your business growth.",
        content: "Microservices architecture has become the standard for building scalable enterprise applications. This approach allows teams to develop, deploy, and scale services independently, leading to faster development cycles and improved system reliability. However, implementing microservices successfully requires careful planning and adherence to best practices that ensure maintainability and performance.",
        author: "Sarah Johnson",
        date: "March 10, 2024",
        readTime: "7 min read",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Microservices", "Scalability", "Best Practices"]
    },
    {
        id: 3,
        slug: "cybersecurity-best-practices-enterprise-applications",
        title: "Cybersecurity Best Practices for Enterprise Applications",
        excerpt: "Essential security measures every enterprise should implement to protect their software applications and data.",
        content: "In today's digital landscape, cybersecurity is more critical than ever. Enterprise applications handle sensitive data and must be protected against increasingly sophisticated threats. From implementing robust authentication systems to ensuring data encryption at rest and in transit, organizations must adopt a comprehensive security strategy that addresses both technical and human factors.",
        author: "Michael Rodriguez",
        date: "March 5, 2024",
        readTime: "6 min read",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Cybersecurity", "Data Protection", "Compliance"]
    },
    {
        id: 4,
        slug: "digital-transformation-complete-guide-enterprises",
        title: "Digital Transformation: A Complete Guide for Enterprises",
        excerpt: "Comprehensive strategies for successful digital transformation initiatives in large organizations.",
        content: "Digital transformation is not just about technology—it's about fundamentally changing how organizations operate and deliver value to customers. Successful digital transformation requires a holistic approach that encompasses technology, processes, people, and culture. Organizations must be willing to embrace change and invest in the right tools and training to ensure their transformation initiatives succeed.",
        author: "Emily Watson",
        date: "February 28, 2024",
        readTime: "8 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Digital Transformation", "Strategy", "Innovation"]
    },
    {
        id: 5,
        slug: "cloud-native-development-benefits-implementation",
        title: "Cloud-Native Development: Benefits and Implementation",
        excerpt: "Explore the advantages of cloud-native development and how to successfully implement it in your organization.",
        content: "Cloud-native development represents a paradigm shift in how applications are built and deployed. By leveraging cloud services and containerization, organizations can achieve greater scalability, reliability, and cost efficiency. The key to successful cloud-native development lies in understanding the principles of microservices, containerization, and DevOps practices that enable rapid deployment and continuous improvement.",
        author: "Alex Thompson",
        date: "February 20, 2024",
        readTime: "6 min read",
        category: "Cloud",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Cloud-Native", "Containers", "DevOps"]
    },
    {
        id: 6,
        slug: "api-first-design-building-better-enterprise-systems",
        title: "API-First Design: Building Better Enterprise Systems",
        excerpt: "How API-first design principles can improve system integration and developer experience in enterprise environments.",
        content: "API-first design is becoming the standard approach for building enterprise systems that need to integrate with multiple platforms and services. By designing APIs before implementing the underlying functionality, organizations can ensure better system integration, improved developer experience, and more flexible architecture. This approach also facilitates better testing and documentation practices.",
        author: "Lisa Park",
        date: "February 15, 2024",
        readTime: "5 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["APIs", "Integration", "Design"]
    }
];

// Utility function to generate SEO-friendly slugs
export const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim('-'); // Remove leading/trailing hyphens
}; 