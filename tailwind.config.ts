import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          hover: "#8B5CF6",
        },
        secondary: {
          DEFAULT: "#7E69AB",
          dark: "#6E59A5",
        },
        space: {
          dark: "#1A1F2C",
          light: "#D6BCFA",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(102.3deg, rgba(26,31,44,1) 5.9%, rgba(126,105,171,1) 64%, rgba(155,135,245,1) 89%)",
      },
      boxShadow: {
        'glow': '0 0 15px rgba(155,135,245,0.5)',
        'glow-strong': '0 0 25px rgba(155,135,245,0.7)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;