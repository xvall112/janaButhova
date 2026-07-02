import React from "react"
import { Link, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Button, useMediaQuery, Grid, Box, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
    "& img": {
      transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
      transform: "scale(1.0)",
    },
    "&:hover img": {
      transform: "scale(1.08)",
    },
    "&:hover $overlay": {
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.85) 100%)",
    },
    "&:hover $accent": {
      width: 90,
    },
    "&:hover $title": {
      color: theme.palette.primary.main,
    },
  },
  overlay: {
    gridArea: "1/1",
    position: "relative",
    height: "50vh",
    zIndex: 100,
    placeItems: "center",
    display: "grid",
    transition: "background .5s ease",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.75) 100%)",
  },
  title: {
    transition: "color .35s ease",
  },
  accent: {
    width: 48,
    height: 4,
    borderRadius: 4,
    background: theme.palette.primary.main,
    margin: "0 auto",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    transition: "width .4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
}))

const Training = ({ data }) => {
  const classes = useStyles()
  return (
    <div>
      <Grid container direction="row">
        {data.allContentfulNabizim.nodes.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index} className={classes.root}>
              <Link to={`/nabizim/${item.slug}`}>
                <div style={{ display: "grid" }}>
                  <div className={classes.overlay}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      data-aos="fade-up"
                    >
                      <Typography component="span" variant="button">
                        <Box
                          className={classes.title}
                          fontSize={32}
                          fontWeight="bold"
                          letterSpacing={2}
                          textAlign="center"
                        >
                          {item.title}
                        </Box>

                        <div className={classes.accent} />

                        <Box fontSize={18} textAlign="center">
                          {item.shortDescription && item.shortDescription}
                        </Box>
                      </Typography>
                      <Box mt={2} textAlign="center">
                        <Button variant="outlined" color="primary" size="large">
                          více
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
                  <GatsbyImage
                    image={item.obrazek.gatsbyImageData}
                    alt={item.title}
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
