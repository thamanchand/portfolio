/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / 1)",
        foreground: "hsl(var(--foreground) / 1)",
        card: "hsl(var(--card) / 1)",
        "card-foreground": "hsl(var(--card-foreground) / 1)",
        primary: "hsl(var(--primary) / 1)",
        "primary-foreground": "hsl(var(--primary-foreground) / 1)",
        secondary: "hsl(var(--secondary) / 1)",
        "secondary-foreground": "hsl(var(--secondary-foreground) / 1)",
        accent: "hsl(var(--accent) / 1)",
        "accent-foreground": "hsl(var(--accent-foreground) / 1)",
        muted: "hsl(var(--muted) / 1)",
        "muted-foreground": "hsl(var(--muted-foreground) / 1)",
        border: "hsl(var(--border) / 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "londrina-outline": ['"Londrina Outline"', "cursive"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
