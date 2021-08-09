import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"

SwiperCore.use([Navigation, Pagination])

const useStyles = makeStyles(theme => ({
  root: {
    "& .swiper-wrapper": {},
    "& .swiper-container": {
      overflow: "visible",
    },
    "& .swiper-pagination-bullet-active": {
      background: theme.palette.primary.main,
    },
    "& .swiper-pagination-bullets": {
      bottom: "-30px",
    },
    "& .swiper-pagination-bullet": {
      background: theme.palette.primary.main,
      width: "12px",
      height: "12px",
    },
    "& .swiper-button-next": {
      color: theme.palette.primary.main,
      position: "absolute",
      top: "-40px !important",
      bottom: "auto !important",
      right: "10px !important",
      zIndex: 10000,
    },
    "& .swiper-button-prev": {
      color: theme.palette.primary.main,
      top: "-40px !important",
      bottom: "auto !important",
      right: "60px !important",
      left: "auto !important",
      zIndex: 10000,
    },
  },
  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

const SwiperComponent = ({
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
    <div className={classes.root} {...rest}>
      <Swiper
        spaceBetween={20}
        slidesPerView={isMd ? 3 : 1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item: any, index: number) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default SwiperComponent
