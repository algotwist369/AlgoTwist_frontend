import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500',
    secondary: 'bg-light-button-secondary-bg text-light-button-secondary-text hover:bg-light-button-secondary-hover active:bg-light-button-secondary-active',
    outline: 'bg-transparent text-textPrimary-600 border border-primary-600 hover:bg-primary-100 focus:ring-primary-500',
    ghost: 'bg-transparent text-light-button-ghost-text hover:bg-light-button-ghost-hover active:bg-light-button-ghost-active',
    success: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 focus:ring-success-500',
    warning: 'bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800 focus:ring-warning-500',
    error: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800 focus:ring-error-500',
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
