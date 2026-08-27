import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  titleAr?: string;
  subtitle?: string;
  subtitleAr?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  titleAr,
  subtitle,
  subtitleAr,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      {titleAr && (
        <p
          className={cn(
            "font-arabic text-body-lg mb-2",
            light ? "text-brand-champagne" : "text-brand-gold"
          )}
          dir="rtl"
        >
          {titleAr}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-display-sm md:text-display-md tracking-wide",
          light ? "text-white" : "text-brand-deep-black"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-body-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-20",
          centered && "mx-auto",
          light ? "bg-brand-gold/50" : "bg-brand-gold"
        )}
      />
    </div>
  );
}