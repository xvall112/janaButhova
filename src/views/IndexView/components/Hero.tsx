import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { SectionHeader, TypedText } from "components/molecules"
import scrollTo from "gatsby-plugin-smoothscroll"
//components
import Contact from "../../../layouts/Main/components/TopBar/Contact"
//materialUi
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Button,
  Typography,
  Box,
  Hidden,
} from "@material-ui/core"
import { Image } from "components/atoms"

import Section from "components/organisms/Section/Section"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  fontWeight900: {
    fontWeight: 900,
  },
  img: {
    overflow: "visible",
  },
  overlay: {
    gridArea: "1/1",
    position: "relative",
    height: "100vh",
    alignItems: "center",
    zIndex: 100,
    display: "grid",
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.2) 100%), radial-gradient(120% 120% at 20% 90%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)",
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)",
    },
  },
  overline: {
    display: "inline-block",
    color: theme.palette.primary.main,
    letterSpacing: "0.28em",
    fontWeight: 700,
    fontSize: "0.85rem",
    position: "relative",
    paddingLeft: theme.spacing(6),
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      width: theme.spacing(5),
      height: 2,
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      "&::before": { display: "none" },
    },
  },
  gradientTitle: {
    background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 45%, ${theme.palette.primary.dark} 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 6px 24px rgba(255, 223, 88, 0.25))",
  },
  subtitle: {
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  scrollIndicator: {
    position: "absolute",
    bottom: theme.spacing(4),
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 200,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  mouse: {
    width: 26,
    height: 42,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    paddingTop: 6,
  },
  wheel: {
    width: 4,
    height: 8,
    borderRadius: 4,
    background: theme.palette.primary.main,
    animation: "$scrollWheel 1.6s ease-in-out infinite",
  },
  "@keyframes scrollWheel": {
    "0%": { opacity: 0, transform: "translateY(-4px)" },
    "40%": { opacity: 1 },
    "80%": { opacity: 0, transform: "translateY(10px)" },
    "100%": { opacity: 0 },
  },
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <>
      <Hidden smDown>
        <Box
          position="absolute"
          right="40px"
          top="35%"
          zIndex={1000}
          fontSize="30px"
        >
          <Contact />
        </Box>
      </Hidden>
      <Box id="hero">
        <div style={{ display: "grid" }}>
          <div className={classes.overlay}>
            <Section className={classes.sectionNoPaddingY}>
              <Grid item xs={12} md={6} data-aos={"fade-up"}>
                <Typography
                  component="span"
                  className={classes.subtitle}
                >
                  <Box
                    component="span"
                    className={classes.overline}
                    mb={2}
                    display="inline-block"
                  >
                    FUNKČNÍ &amp; OSOBNÍ TRENÉR
                  </Box>
                </Typography>
                <SectionHeader
                  title={
                    <span>
                      <Typography component="span" variant="h2">
                        <Box fontWeight="900" className={classes.gradientTitle}>
                          JANA BÚTHOVÁ
                        </Box>
                      </Typography>

                      <TypedText
                        component="span"
                        variant="h4"
                        color="textPrimary"
                        className={classes.fontWeight900}
                        typedProps={{
                          strings: [
                            "OSOBNÍ TRÉNINKY",
                            "SKUPINOVÉ TRÉNINKY",
                            "VÝŽIVOVÉ PORADENSTVÍ",
                            "TRÉNINKOVÉ PLÁNY",
                          ],
                          typeSpeed: 70,
                          loop: true,
                        }}
                      />
                    </span>
                  }
                  subtitle="„CHCI INSPIROVAT LIDI. CHCI, ABY SE NA MNĚ PODÍVALI A ŘEKLI: „KVŮLI TOBĚ JSEM TO NEVZDAL!“"
                  ctaGroup={[
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => scrollTo("#training")}
                    >
                      pojď trénovat!
                    </Button>,
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={() => scrollTo("#aboutMe")}
                    >
                      o mně
                    </Button>,
                  ]}
                  align={isMd ? "left" : "center"}
                  disableGutter
                  titleVariant="h3"
                />
              </Grid>
            </Section>
          </div>
          <StaticImage
            src="../../../assets/images/heroImage.jpg"
            alt="Hlavni obrazek"
            style={{
              gridArea: "1/1",
              height: "100vh",

              zIndex: 1,
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
          />
          <div
            className={classes.scrollIndicator}
            onClick={() => scrollTo("#aboutMe")}
            role="button"
            aria-label="Přejít níže"
          >
            <div className={classes.mouse}>
              <div className={classes.wheel} />
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Hero
