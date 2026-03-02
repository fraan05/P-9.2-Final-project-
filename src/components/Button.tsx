import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'right',
    isLoading = false,
    className = '',
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-xl shadow-secondary/20",
        outline: "bg-transparent border-2 border-border/50 text-primary hover:border-secondary hover:text-secondary",
        ghost: "bg-transparent text-primary/60 hover:bg-surface hover:text-primary",
    };

    const sizes = {
        sm: "px-4 py-2 text-[10px] rounded-xl",
        md: "px-8 py-4 text-xs rounded-2xl",
        lg: "px-10 py-5 text-sm rounded-3xl",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}

            {!isLoading && Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : 18} className="mr-2" />}
            {children}
            {!isLoading && Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : 18} className="ml-2" />}
        </motion.button>
    );
};
