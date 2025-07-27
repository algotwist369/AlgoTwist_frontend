import React from 'react'

const Heading = ({ 
  children, 
  level = 1, 
  variant = 'primary',
  size = 'default',
  className = '',
  animate = true,
  ...props 
}) => {
  const baseClasses = 'font-bold leading-tight animate-fade-in'
  
  const variants = {
    primary: 'text-light-text-textPrimary',
    secondary: 'text-light-text-textPrimary',
    tertiary: 'text-light-text-tertiary',
    accent: 'text-accent-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600',
  }
  
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }
  
  const defaultSizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  }
  
  const headingClasses = `${baseClasses} ${variants[variant]} ${size === 'default' ? defaultSizes[level] : sizes[size]} ${animate ? 'animate-slide-down' : ''} ${className}`
  
  const Tag = `h${level}`
  
  return (
    <Tag className={headingClasses} {...props}>
      {children}
    </Tag>
  )
}

export default Heading
