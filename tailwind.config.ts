import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // === Krookheads core token palette ===
        // Named tokens map 1:1 to the approved design system so the same
        // names can be reused in future non-web surfaces (docs, merch specs).
        charcoal: {
          DEFAULT: "#0A0A08",
          soft: "#111210",
        },
        gunmetal: {
          DEFAULT: "#1C1F1D",
          light: "#262926",
        },
        olive: {
          DEFAULT: "#4B4C34",
          bright: "#6B6D48",
          dim: "#3A3B28",
        },
        beige: {
          DEFAULT: "#C9C2A8",
          bright: "#E4DFCC",
          dim: "#9A947F",
        },
        crimson: {
          DEFAULT: "#8A1F1F",
          bright: "#A82727",
          dim: "#5C1414",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale — clamp(min, preferred, max)
        "hero-h1": ["clamp(2.75rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "0.01em" }],
        "section-h2": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "0.01em" }],
        "body-lg": ["clamp(1rem, 1.4vw, 1.125rem)", { lineHeight: "1.6" }],
        micro: ["0.7rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      letterSpacing: {
        wide: "0.06em",
        widest2: "0.2em",
        widest3: "0.28em",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        archive: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "grain": "url('/textures/grain.svg')",
        "vignette":
          "radial-gradient(ellipse at center, transparent 0%, transparent 45%, rgba(10,10,8,0.85) 100%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.05)", opacity: "0.5" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.1)", opacity: "0.2" },
          "50%": { transform: "translate3d(-3%, 2%, 0) scale(1)", opacity: "0.35" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        "drift-slow": "driftSlow 20s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
