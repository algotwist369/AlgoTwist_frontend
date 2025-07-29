/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background Colors
        backgroundPrimary: "#0D1117", // Main background — Jet Black
        backgroundSecondary: "#161B22", // Card/section background — Dark Gunmetal
        backgroundHover: "#1F2630", // Hover state background — Charcoal Blue
        backgroundMuted: "#21262D", // Subtle muted background — Slate
        backgroundOverlay: "rgba(0,0,0,0.6)", // Modal/overlay background — Transparent Black

        // Text Colors
        textPrimary: "#FFFFFF", // Primary readable text — White
        textSecondary: "#8B949E", // Secondary/subdued text — Slate Gray
        textAccent: "#F778BA", // Animated/highlighted text — Pink Flamingo
        disabledText: "#6E7681", // Disabled text — Dusty Gray

        // Highlight Text Colors
        highlightText: "#eb0520",
        highlightTextSecondary: "#db4242",
        rgbHighlight: "rgb(235, 5, 32)",


        // Button Colors
        buttonPrimary: "#eb0520", // Main call-to-action button — Emerald Green
        buttonSecondary: "#8B949E", // Secondary/outlined button — Dark Gray
        buttonHover: "#c40a0a", // Button hover state — Bright Green
        buttonText: "#FFFFFF", // Button text — White

        // Borders & UI
        borderColor: "#30363D", // General borders — Charcoal Gray
        inputBorder: "#30363D", // Input field borders — Charcoal Gray
        inputFocus: "#58A6FF", // Input focus border — Sky Blue
        shadow: "rgba(0, 0, 0, 0.2)", // Box shadow — Low opacity black

        // Status Colors
        error: "#F85149", // Error — Red Salsa
        warning: "#D29922", // Warning — Mustard Gold
        success: "#3FB950", // Success — Fresh Green

        // Accent & Highlight
        accent: "#58A6FF", // Generic accent color — Azure Blue
        highlight: "#2EA043", // Selected item highlight — Bright Green
        animatedText: "#f56307", // Animated text (same as accent) — Pink

        //  Developer & Code UI
        codeBg: "#161B22", // Code block background — Gunmetal
        scrollbarTrack: "#0D1117", // Scrollbar background — Jet Black
        scrollbarThumb: "#30363D", // Scrollbar thumb — Charcoal

        // Branding & Links
        brandPrimary: "#F778BA", // Brand primary color — Pink Flamingo
        linkColor: "#58A6FF", // Link text color — Sky Blue
        linkHover: "#79C0FF", // Link hover — Lighter Blue
        badgeBg: "#238636", // Badge background — Emerald Green
      },
    },
  },
  plugins: [],
};
