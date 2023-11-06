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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFFFFF",
        secondary_1: "#FEFAF1",
        secondary_2: "#F5F5F5",
        secondary_3: "#DB4444",
        footer: "#FAFAFA",
        button_2: "#DB4444",
        "2": "#7D8184",
        outline: "#7D8184",
        green: "#27CE60",
        red: "#DF2648",
      },
      fontSize: {
        base: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        nav_content: [
          "14px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
      },
      screens: {
        sm: "575px",
        md: "768px",
        lg: "991px",
        xl: "1199px",
        xxl: "1500px",
      },
    },
  },
  plugins: [],
};
export default config;
