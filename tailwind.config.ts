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
          teal: "#00d6b6",
          blue: "#0087ee",
          darkBlue: "#006bbd",
          lightBlue: "#f0f8ff",
          borderBlue: "#92c5ff",
          dark: "rgba(0, 0, 0, 0.84)",
          muted: "rgba(0, 0, 0, 0.60)",
        },
      },
      fontFamily: {
        sans: ["Rubik", "system-ui", "-apple-system", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        hover: "0 8px 30px rgba(0, 135, 238, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
