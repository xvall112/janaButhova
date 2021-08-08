import React from "react"
import Slider from "react-slick"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Box } from "@material-ui/core"

import { SectionHeader } from "components/molecules"
import ReactPlayer from "react-player"

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
    " & .slick-prev": {
      width: "auto",
      height: "auto",
      [theme.breakpoints.down("sm")]: {
        top: "-20%",
        left: "75%",
      },
    },
    " & .slick-next": {
      width: "auto",
      height: "auto",
      [theme.breakpoints.down("sm")]: {
        top: "-20%",
        left: "90%",
      },
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

const Video = ({
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
    arrows: true,
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
      <Grid container>
        <Grid item xs={12}>
          <SectionHeader
            title="Videa"
            subtitle=""
            subtitleColor="primary"
            fadeUp
            align="left"
          />
        </Grid>
        <Grid item xs={12}>
          <Slider {...settings}>
            {data.map((item: any, index: number) => {
              return (
                <Box key={index} px={1}>
                  <iframe
                    title="video"
                    width="100%"
                    height="200"
                    src={item}
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  />
                </Box>
              )
            })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  )
}

export default Video
