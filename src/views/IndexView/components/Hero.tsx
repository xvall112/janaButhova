import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core"
import { Image } from "components/atoms"
import { SectionHeader } from "components/molecules"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
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
    <div {...rest}>
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
                AHOJ, JÁ JSEM <br />
                <Typography component="span" variant="inherit" color="primary">
                  JANA BÚTHOVÁ
                </Typography>
                <br />
                <span>OSOBNÍ TRENÉR</span>
              </span>
            }
            subtitle="„CHCI INSPIROVAT LIDI. CHCI, ABY SE NA MNĚ PODÍVALI A ŘEKLI: „KVŮLI TOBĚ JSEM TO NEVZDAL!“"
            ctaGroup={[
              <Button variant="contained" color="primary" size="large">
                pojď trénovat!
              </Button>,
              <Button variant="outlined" color="primary" size="large">
                o mně
              </Button>,
            ]}
            align={isMd ? "left" : "center"}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
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
      </Grid>
    </div>
  )
}

export default Hero
