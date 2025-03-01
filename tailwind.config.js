module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "font-family": "var(--font-geist-sans)", // Applies to DaisyUI components
          "--font-mono": "var(--font-geist-mono)",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "font-family": "var(--font-geist-sans)",
          "--font-mono": "var(--font-geist-mono)",
        },
        // Repeat for other themes you're using
      },
    ],
    darkTheme: "light",
  },
};