import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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
import { SectionHeader, TypedText } from "components/molecules"
import scrollTo from "gatsby-plugin-smoothscroll"

const useStyles = makeStyles(theme => ({
  root: {
    height: "80vh",
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
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <>
      <Box pt={isMd ? 10 : 0} {...rest} id="hero">
        <Hidden smUp>
          <div style={{ display: "grid" }}>
            <div
              style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                height: "90vh",
                zIndex: 100,
                // This centers the other elements inside the hero component
                display: "grid",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                width: "100vw",
              }}
            >
              <Grid
                container
                justify="space-between"
                alignItems="center"
                className={classes.root}
              >
                <Grid item xs={12} md={5} data-aos={"fade-up"}>
                  <SectionHeader
                    title={
                      <span>
                        <Typography
                          component="span"
                          variant="inherit"
                          color="primary"
                        >
                          JANA BÚTHOVÁ
                        </Typography>
                        <br />
                        <Typography
                          component="span"
                          variant="inherit"
                          color="textPrimary"
                        >
                          OSOBNÍ TRENÉR
                        </Typography>

                        <br />
                        <TypedText
                          component="span"
                          variant="h4"
                          color="primary"
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
            </div>
            <StaticImage
              src="../../../assets/images/uvodniUpravena.png"
              alt="obrazek"
              style={{
                gridArea: "1/1",
                height: "90vh",
                width: "100vw",
                zIndex: 1,
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
              }}
            />
          </div>
        </Hidden>

        <Hidden smDown>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={isMd ? 4 : 2}
            className={classes.root}
          >
            <Grid item xs={12} md={5} data-aos={"fade-up"}>
              <SectionHeader
                title={
                  <span>
                    <Typography
                      component="span"
                      variant="inherit"
                      color="primary"
                    >
                      JANA BÚTHOVÁ
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="inherit"
                      color="textSecondary"
                    >
                      OSOBNÍ TRENÉR
                    </Typography>

                    <br />
                    <TypedText
                      component="span"
                      variant="h4"
                      color="secondary"
                      className={classes.fontWeight900}
                      typedProps={{
                        strings: [
                          "OSOBNÍ TRÉNINKY",
                          "SKUPINOVÉ TRÉNINKY",
                          "VÝŽIVOVÉ PORADENSTVÍ",
                          "TRÉNINKOVÉ PLÁNY",
                        ],
                        typeSpeed: 50,
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
            <Hidden smDown>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                xs={12}
                md={7}
                data-aos={"fade-up"}
                className={classes.img}
              >
                <StaticImage
                  src="../../../assets/images/uvodniUpravena2.png"
                  alt="uvodni fotka"
                  className={classes.image}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Hidden>
      </Box>
    </>
  )
}

export default Hero
