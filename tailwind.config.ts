import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lake-blue": "#003366",
        "water-teal": "#00A896",
        "eco-green": "#38A169",
      },
    },
  },
  plugins: [],
};

export default config;
