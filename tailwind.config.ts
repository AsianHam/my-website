import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "spicy-mix": "#74483F",
        iron: "#DCDEDD",
        alabaster: "#F9F9F9",
        masala: "#4C4541",
        "outer-space": "#1D2625",
        "regent-gray": "#929AA2",
        shark: "#212428",
        "torch-red": "#ff014f",
      },
    },
  },
  plugins: [],
};
export default config;
