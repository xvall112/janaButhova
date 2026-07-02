import { createTheme, responsiveFontSizes } from "@material-ui/core"
import { light, dark } from "./palette"

const headingFont = "'Montserrat', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
const bodyFont = "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"

const getTheme = mode => {
  // Build a base theme first so the component overrides can read the palette
  // (gradients, glows) instead of hard-coding colours.
  const base = createTheme({
    palette: mode === "light" ? light : dark,
    layout: {
      contentWidth: 1236,
    },
    typography: {
      fontFamily: bodyFont,
      h1: { fontFamily: headingFont, fontWeight: 900, letterSpacing: "-0.02em" },
      h2: { fontFamily: headingFont, fontWeight: 900, letterSpacing: "-0.02em" },
      h3: { fontFamily: headingFont, fontWeight: 800, letterSpacing: "-0.01em" },
      h4: { fontFamily: headingFont, fontWeight: 800, letterSpacing: "-0.01em" },
      h5: { fontFamily: headingFont, fontWeight: 700 },
      h6: { fontFamily: headingFont, fontWeight: 700 },
      subtitle1: { fontFamily: bodyFont },
      subtitle2: { fontFamily: bodyFont, fontWeight: 600 },
      body1: { fontFamily: bodyFont, lineHeight: 1.7 },
      body2: { fontFamily: bodyFont, lineHeight: 1.7 },
      button: {
        fontFamily: headingFont,
        fontWeight: 700,
        letterSpacing: "0.08em",
      },
      overline: {
        fontFamily: headingFont,
        fontWeight: 700,
        letterSpacing: "0.18em",
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  })

  const gold = base.palette.primary
  const glow = "rgba(255, 223, 88, 0.35)"

  const themed = createTheme({
    ...base,
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          "::selection": {
            background: gold.main,
            color: gold.contrastText,
          },
          "img::selection": {
            background: gold.main,
          },
        },
      },
      MuiButton: {
        root: {
          borderRadius: 40,
          textTransform: "uppercase",
          fontWeight: 700,
          letterSpacing: "0.08em",
          padding: "10px 26px",
          transition:
            "transform .25s ease, box-shadow .25s ease, background .25s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: `0 12px 30px -8px ${glow}`,
            transform: "translateY(-2px)",
          },
        },
        containedPrimary: {
          background: `linear-gradient(120deg, ${gold.light} 0%, ${gold.main} 45%, ${gold.dark} 100%)`,
          "&:hover": {
            background: `linear-gradient(120deg, ${gold.light} 0%, ${gold.main} 45%, ${gold.dark} 100%)`,
            boxShadow: `0 14px 34px -8px ${glow}`,
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            transform: "translateY(-2px)",
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
            background: "rgba(255, 223, 88, 0.08)",
            boxShadow: `0 12px 30px -12px ${glow}`,
          },
        },
        sizeLarge: {
          padding: "14px 34px",
          fontSize: "0.95rem",
        },
      },
      MuiCard: {
        root: {
          borderRadius: 18,
        },
      },
      MuiDialog: {
        paper: {
          borderRadius: 18,
        },
      },
      MuiChip: {
        root: {
          fontFamily: headingFont,
          fontWeight: 700,
          letterSpacing: "0.04em",
        },
      },
    },
  })

  return responsiveFontSizes(themed)
}

export default getTheme
