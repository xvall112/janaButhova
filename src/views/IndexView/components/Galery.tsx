import React from "react"
import clsx from "clsx"
import Slider from "react-slick"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Typography, Grid, Box } from "@material-ui/core"
import { Image } from "components/atoms"
import { SectionHeader, IconAlternate } from "components/molecules"
import { Section } from "components/organisms"

const useStyles = makeStyles(theme => ({
  videoIframe: {
    boxShadow: `0 5px 15px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
    },
  },
  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Galery = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Section className={classes.sectionNoPaddingY}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <SectionHeader title="Videa" subtitle="" fadeUp align="left" />
              </Grid>
            </Grid>
          </Section>
        </Grid>
      </Grid>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <Box pl={3} key={index}>
            <iframe
              className={classes.videoIframe}
              title="video"
              width="100%"
              height="250px"
              src={item}
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </Box>
        ))}
      </Slider>
    </div>
  )
}

export default Galery
