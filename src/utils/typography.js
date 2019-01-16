import Typography from "typography";

const headerFontFamily = "Roboto Slab";
const bodyFontFamily = "Roboto";

export const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.6,
  scaleRatio: 2.15,
  headerFontFamily: [
    headerFontFamily,
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [bodyFontFamily, "serif"],
  googleFonts: [
    {
      name: headerFontFamily,
      styles: ["400", "700"]
    },
    {
      name: bodyFontFamily,
      styles: ["400", "600"]
    },
    {
      name: "Roboto Mono",
      styles: ["400", "600"]
    }
  ]
});

typography.injectStyles();
