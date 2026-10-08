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
        wsh: {
          black: "#181818",
          pureBlack: "#000000",
          purple: "#b265ff",
          lavender: "#d1a3ff",
          lightPurple: "#fdf4ff",
          purpleDark: "#7e22ce",
          border: "#e7e7e7",
          gold: "#f59e0b",
          grayLight: "#fafafa",
          grayMuted: "#555555",
        },
      },
      fontFamily: {
        sans: ["'Open Sans'", "Rubik", "system-ui", "-apple-system", "sans-serif"],
        lato: ["'Lato'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        lora: ["'Lora'", "Georgia", "Baskerville", "serif"],
        openSans: ["'Open Sans'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        serif: ["'Lora'", "'Playfair Display'", "Georgia", "Baskerville", "serif"],
        editorial: ["'Playfair Display'", "Georgia", "Baskerville", "serif"],
        jakarta: ["'Plus Jakarta Sans'", "Rubik", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.06)",
        hover: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
