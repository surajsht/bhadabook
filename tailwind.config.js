/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lily: ['"Lily Script One"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1E40AF",
        },
        secondary: "#22C55E",
        danger: "#DC2626",
        warning: "#FACC15",
        background: "#F9FAFB",
        "dark-background": "#1A1A1A",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
