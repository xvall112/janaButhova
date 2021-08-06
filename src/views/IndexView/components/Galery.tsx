import React from "react"
import clsx from "clsx"
import Slider from "react-slick"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Typography, Grid, Box } from "@material-ui/core"
import { Image } from "components/atoms"
import { SectionHeader, IconAlternate } from "components/molecules"
import { Section } from "components/organisms"
import ReactPlayer from "react-player/lazy"

const useStyles = makeStyles(theme => ({
  root: {
    "& .slick-dots li.slick-active button:before": {
      color: theme.palette.primary.main,
      fontSize: "12px",
    },
    "& .slick-dots li button:before": {
      color: theme.palette.primary.main,
      fontSize: "12px",
    },
    " & .slick-prev:before, .slick-next:before": {
      color: theme.palette.primary.main,
      fontSize: "25px",
    },
  },
  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

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
  const settings = {
    dots: true,
    loop: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: isMd ? true : false,
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

  return (
    <div className={classes.root} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <SectionHeader title="Videa" subtitle="" fadeUp align="left" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <Box key={index} px={1}>
            <ReactPlayer url={item} controls width="auto" height="260px" />
          </Box>
        ))}
      </Slider>
    </div>
  )
}

export default Galery
