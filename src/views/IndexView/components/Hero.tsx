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
  image: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
  fontWeight900: {
    fontWeight: 900,
  },
  img: {
    overflow: "visible",
  },
  subtitle: {
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
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
      <Box {...rest} id="hero">
        <div style={{ display: "grid" }}>
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              height: "100vh",
              zIndex: 100,
              // This centers the other elements inside the hero component
              display: "grid",
              background:
                "radial-gradient(circle, rgba(50,50,50,0.2) 0%, rgba(0,0,0,0.8998949921765581) 100%)",
              width: "100vw",
            }}
          >
            <Section className={classes.sectionNoPaddingY}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                className={classes.root}
              >
                <Grid item xs={12} md={6} data-aos={"fade-up"}>
                  <Typography
                    component="span"
                    variant="h5"
                    color="textPrimary"
                    className={classes.subtitle}
                  >
                    <Box fontWeight="bold" mb={1}>
                      FUNKČNÍ & OSOBNÍ TRENÉR
                    </Box>
                  </Typography>
                  <SectionHeader
                    title={
                      <span>
                        <Typography
                          component="span"
                          variant="h2"
                          color="primary"
                        >
                          <Box fontWeight="900">JANA BÚTHOVÁ</Box>
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
              </Grid>
            </Section>
          </div>
          <StaticImage
            src="../../../assets/images/heroImage.jpg"
            alt="obrazek"
            style={{
              gridArea: "1/1",
              height: "100vh",
              width: "100vw",
              zIndex: 1,
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
          />
        </div>
      </Box>
    </>
  )
}

export default Hero
