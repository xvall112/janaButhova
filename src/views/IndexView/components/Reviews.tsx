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

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 20 }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 20, zIndex: 10 }}
      onClick={onClick}
    />
  )
}

const useStyles = makeStyles(() => ({
  sectionHeadlineStars: {
    maxWidth: 120,
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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  return (
    <div className={className} {...rest}>
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
                icon={
                  <IconAlternate
                    color={colors.orange}
                    fontIconClass="fas fa-quote-right"
                  />
                }
                authorName={review.authorName}
                authorTitle={review.authorOccupation}
                authorPhoto={review.authorPhoto}
              />
            </Box>
          </Grid>
        ))}
      </Slider>
    </div>
  )
}

export default Reviews
