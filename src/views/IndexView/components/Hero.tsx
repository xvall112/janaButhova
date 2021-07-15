import React from "react"
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
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <Box pt={isMd ? 10 : 5} {...rest} id="hero">
      <Grid
        container
        justify="space-between"
        alignItems="center"
        spacing={isMd ? 4 : 2}
        className={classes.root}
      >
        <Grid item xs={12} md={6} data-aos={"fade-up"}>
          <SectionHeader
            title={
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  JANA BÚTHOVÁ
                </Typography>
                <br />
                <span>OSOBNÍ TRENÉR</span>
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
            md={6}
            data-aos={"fade-up"}
          >
            <Image
              src="https://assets.maccarianagency.com/the-front/illustrations/mind-map.svg"
              alt="TheFront Company"
              className={classes.image}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  )
}

export default Hero
