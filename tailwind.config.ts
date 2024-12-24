import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        meslo: ['MesloLGMDZNerdFontMono', 'monospace'], // Custom font
      },
      colors: {
        // Mapping CSS variables to Tailwind theme colors
        light: {
          background: "var(--light-theme-background)",
          color: "var(--light-theme-color)",
          border: "var(--light-theme-border)",
          accentPrimary: "var(--light-theme-accent-primary)",
          accentSecondary: "var(--light-theme-accent-secondary)",
          highlight: "var(--light-theme-highlight)",
        },
        dark: {
          background: "var(--dark-theme-background)",
          color: "var(--dark-theme-color)",
          border: "var(--dark-theme-border)",
          accentPrimary: "var(--dark-theme-accent-primary)",
          accentSecondary: "var(--dark-theme-accent-secondary)",
          highlight: "var(--dark-theme-highlight)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
