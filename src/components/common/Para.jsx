import React from 'react'

const Para = ({ 
  children, 
  variant = 'primary',
  size = 'base',
  className = '',
  animate = true,
  ...props 
}) => {
  const baseClasses = 'leading-relaxed animate-fade-in'
  
  const variants = {
    primary: 'text-onBackground',
    secondary: 'text-onBackground',
    tertiary: 'text-onBackground',
    muted: 'text-onBackground',
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
  }
  
  const paraClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${animate ? 'animate-slide-up' : ''} ${className}`
  
  return (
    <p className={paraClasses} {...props}>
      {children}
    </p>
  )
}

export default Para
