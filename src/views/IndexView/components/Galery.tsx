import React from "react"
import clsx from "clsx"
import { Swiper, SwiperSlide } from "swiper/react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Typography, Grid, colors } from "@material-ui/core"
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
  swiperWrapper: {
    display: "flex",
    alignItems: "center",
  },
  swiperSlide: {
    position: "relative",
    width: 600,
    height: 400,
    marginLeft: theme.spacing(-10),
    marginRight: theme.spacing(-10),
    padding: "50px 100px",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: "100%",
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      padding: 0,
    },
    "&.swiper-slide-active": {
      marginLeft: 0,
      marginRight: 0,
      padding: 0,
      transition: "padding .3s",
      transitionTimingFunction: "ease-out",
      "& .image-cover": {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75))",
        backgroundColor: "transparent",
      },
    },
  },
  coverContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    transform: "translateY(-101%)",
    display: "flex",
    alignItems: "flex-end",
  },
  cover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.49)",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
    background: `${colors.indigo[900]} !important`,
    "& i": {
      color: "white !important",
      fontSize: 16,
    },
  },
  image: {
    objectFit: "cover",
  },
  textWhite: {
    color: "white",
    zIndex: 5,
  },
  textPadding: {
    padding: theme.spacing(4),
  },
  swiperNavigation: {
    position: "relative",
    width: 100,
    [theme.breakpoints.up("sm")]: {
      width: 140,
    },
    "& .swiper-button-prev, & .swiper-button-next": {
      width: theme.spacing(5),
      height: theme.spacing(5),
      background: theme.palette.primary.main,
      borderRadius: "100%",
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      "&:after": {
        fontSize: "initial",
        color: theme.palette.background.paper,
      },
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
    },
    "& .swiper-button-prev": {
      left: 0,
    },
    "& .swiper-button-next": {
      right: 0,
    },
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

  /*  React.useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: isMd ? 0 : 16,
      centeredSlides: isMd ? true : false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }) */

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Section disablePadding>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <SectionHeader title="Videa" subtitle="" fadeUp align="left" />
              </Grid>
            </Grid>
          </Section>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12} md={6} data-aos={"fade-up"}>
            <iframe
              className={classes.videoIframe}
              title="video"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ClIbn_IF31U"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Galery
