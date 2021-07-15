import React from "react"
import { Link, navigate } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import Slider from "react-slick"

//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Button, useMediaQuery, Grid, Box, Typography } from "@material-ui/core"
import { FastRewindTwoTone, ScatterPlot } from "@material-ui/icons"
import { setLocale } from "yup"

const useStyles = makeStyles(theme => ({
  root: {
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
}))

const Training = ({ data }) => {
  const classes = useStyles()
  return (
    <div id="training">
      <Grid container direction="row">
        {data.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index} className={classes.root}>
              <Link to={`/${item.slug}`}>
                <div style={{ display: "grid" }}>
                  <div
                    style={{
                      // By using the same grid area for both, they are stacked on top of each other
                      gridArea: "1/1",
                      position: "relative",
                      height: "50vh",
                      zIndex: 100,
                      // This centers the other elements inside the hero component
                      placeItems: "center",
                      display: "grid",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      data-aos="fade-up"
                    >
                      <Typography component="span" variant="button">
                        <Box
                          fontSize={32}
                          fontWeight="bold"
                          letterSpacing={2}
                          textAlign="center"
                        >
                          {item.title}
                        </Box>

                        {/*    <Box
          fontSize={70}
          fontWeight="fontWeightBold"
          textAlign="center"
          letterSpacing={5}
        >
          title
        </Box> */}

                        <Box fontSize={18} textAlign="center">
                          {item.description}
                        </Box>
                      </Typography>
                      <Box mt={2} textAlign="center">
                        <Button
                          variant="outlined"
                          color="primary"
                          size="large"
                          onClick={() => navigate(`/${item.slug}`)}
                        >
                          vice
                        </Button>
                      </Box>
                    </Grid>

                    <Box position="absolute" bottom="50px" width="100%">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                      ></Grid>
                    </Box>
                  </div>
                  <StaticImage
                    src="../../../assets/images/skupinoveIndoor.jpg"
                    alt="obrazek"
                    className={classes.img}
                    style={{
                      gridArea: "1/1",
                      height: "50vh",
                      zIndex: 1,

                      // You can set a maximum height for the image, if you wish.
                      // maxHeight: 600,
                    }}
                  />
                </div>
              </Link>
            </Grid>

            /*  <GatsbyImage
              image={item.image.gatsbyImageData}
              style={{
                gridArea: "1/1",
                height: "70vh",
                zIndex: 1,
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
              }}
              alt={item.image.title}
              formats={["auto", "webp", "avif"]}
            /> */
          )
        })}
      </Grid>
    </div>
  )
}

export default Training
