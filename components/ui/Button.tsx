"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-dark active:scale-[0.96]",
  secondary:
    "bg-accent text-primary shadow-sm hover:bg-accent-light active:scale-[0.96]",
  ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 active:scale-[0.96]",
  outline:
    "border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 active:scale-[0.96]",
};

const sizes = {
  sm: "h-8 px-3 text-xs rounded-lg",
  md: "h-10 px-4 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
