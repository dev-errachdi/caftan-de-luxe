import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#B89A55",
          "soft-gold": "#C9AD6A",
          champagne: "#D8C8A5",
          ivory: "#FAF8F2",
          "warm-white": "#F5F1E8",
          "dark-brown": "#211C17",
          "deep-black": "#111111",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "Amiri", "serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.15", letterSpacing: "0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "0.02em" }],
        "heading-lg": ["2rem", { lineHeight: "1.3", letterSpacing: "0.01em" }],
        "heading-md": ["1.5rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      spacing: {
        "section-y": "6rem",
        "section-y-sm": "4rem",
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #B89A55 0%, #C9AD6A 50%, #D8C8A5 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #111111 0%, #211C17 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "4/5": "4 / 5",
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};

export default config;