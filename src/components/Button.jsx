import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'group inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-full gap-1.5 font-semibold tracking-wide',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2 font-semibold tracking-wide',
    lg: 'text-base px-7 py-3.5 rounded-full gap-2.5 font-semibold tracking-wide',
  };

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-hover text-white shadow-subtle hover:shadow-elevated active:scale-[0.98]',
    accent: 'bg-lavender-100 hover:bg-lavender-200 text-primary border border-lavender-200 active:scale-[0.98]',
    secondary: 'bg-white text-ink-primary border border-ink-border hover:border-lavender-400 hover:bg-canvas-warm shadow-subtle active:scale-[0.98]',
    outline: 'bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-lavender-50 active:scale-[0.98]',
    ghost: 'bg-transparent text-ink-primary hover:bg-canvas-warm hover:text-primary active:scale-[0.98]',
    white: 'bg-white text-primary hover:bg-stone-50 shadow-subtle hover:shadow-elevated active:scale-[0.98]',
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-105" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      )}
    </motion.button>
  );
}
