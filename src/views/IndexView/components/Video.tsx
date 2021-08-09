import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Box } from "@material-ui/core"
import { SectionHeader } from "components/molecules"
import ReactPlayer from "react-player/youtube"
import SwiperComponent from "../../../components/swiper"
const useStyles = makeStyles(theme => ({
  root: {},
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
          <SwiperComponent
            data={data.map((item: any, index: number) => {
              return (
                <ReactPlayer url={item} controls width="100%" height="200px" />
              )
            })}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Video
