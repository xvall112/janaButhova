import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Slider from "react-slick"
import { useMediaQuery, Grid, Box } from "@material-ui/core"
import { SectionHeader } from "components/molecules"
import { CardReview } from "components/organisms"
import SwiperComponent from "../../../components/swiper"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Reviews = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <Grid container>
        <Grid item xs={12}>
          <SectionHeader
            title="Recenze"
            subtitle=""
            subtitleColor="primary"
            fadeUp
            align="left"
          />
        </Grid>
        <Grid item xs={12}>
          <SwiperComponent
            data={data.map((review: any, index: number) => (
              <CardReview
                variant="contained"
                text={review.feedback}
                authorName={review.authorName}
              />
            ))}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Reviews
