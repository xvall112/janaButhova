import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Slider from "react-slick"
import {
  useMediaQuery,
  Grid,
  Button,
  Typography,
  colors,
  Box,
} from "@material-ui/core"
import { Image } from "components/atoms"
import { SectionHeader, IconAlternate } from "components/molecules"
import { CardReview } from "components/organisms"

const useStyles = makeStyles(theme => ({
  sectionHeadlineStars: {
    maxWidth: 120,
  },
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    /* "& svg": {
      position: "absolute",
      margin: "auto 0",
      bottom: "-50px",
    }, */
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
      borderRadius: "0px",
    },
  },
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
    <div className={classes.root}>
      {/* <svg width="450px" height="450px" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" width="100%" height="100%" rx="1" fill="#ffdf58" />
      </svg> */}

      <Slider {...settings}>
        {data.map((review: any, index: number) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            md={12}
            data-aos="fade-up"
          >
            <Box mx={2}>
              <CardReview
                variant="contained"
                text={review.feedback}
                authorName={review.authorName}
              />
            </Box>
          </Grid>
        ))}
      </Slider>
    </div>
  )
}

export default Reviews
