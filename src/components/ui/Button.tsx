import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className,
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-widest uppercase transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-gold text-white hover:bg-brand-soft-gold active:bg-brand-dark-brown",
    secondary:
      "bg-brand-deep-black text-white hover:bg-brand-dark-brown active:bg-black",
    outline:
      "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white",
    ghost:
      "text-brand-dark-brown hover:text-brand-gold hover:bg-brand-ivory",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#128C7E] active:bg-[#075E54]",
  };

  const sizes = {
    sm: "px-4 py-2 text-caption",
    md: "px-6 py-3 text-body-sm",
    lg: "px-8 py-4 text-body-md",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}