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
        "bg-light-blue": "#3B82F6",
        "bg-dark-blue": "#1E40AF",
        "bg-main": "#F9FAFB",
        "primary-text": "#111827",
        "secondary-text": "#6B7280",
        "text-hover": "#1E40AF",
        paid: "#10B981",
        pending: "#F59E0B",
        overdue: "#EF4444",
        alert: "#60A5FA",
      },
    },
  },
  plugins: [],
};
