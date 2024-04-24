import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lightarbingblue": "#4f7ff7",
        "arbingblue": "#3c67f4",
        "darkarbingblue": "#214cdb",
        "lightgrey": "#f1f5f9",
      },
      boxShadow: {
        'arbingglow': '0 0 6px 1px rgba(60, 103, 244, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
