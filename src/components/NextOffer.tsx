import React from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//material UI
import { makeStyles } from "@material-ui/core/styles"
import { Button, Grid, Box, Typography } from "@material-ui/core"

const query = graphql`
  {
    allContentfulNabizim(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        obrazek {
          gatsbyImageData(placeholder: BLURRED, width: 500)
          title
        }
        id
        slug
        title
        shortDescription
        longDescription {
          raw
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    "& a": {
      color: "white",
      textDecoration: "none",
    },

    "& :hover": {
      "& img": {
        transition:
          "transform .5s 1s ease-in-out,-webkit-transform .5s ease-in-out",
        transform: "scale(1.1)",
      },
    },
  },
}))

const Training = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  return (
    <div id="training">
      <Grid container direction="column">
        {data.allContentfulNabizim.nodes.map((item, index) => {
          return (
            <Grid item xs={12} key={index} className={classes.root}>
              <Link to={`/nabizim/${item.slug}`}>
                <div style={{ display: "grid" }}>
                  <div
                    style={{
                      // By using the same grid area for both, they are stacked on top of each other
                      gridArea: "1/1",
                      position: "relative",
                      height: "100px",
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
                      justifyContent="center"
                      alignItems="center"
                      data-aos="fade-up"
                    >
                      <Typography component="span" variant="button">
                        <Box
                          fontSize={24}
                          fontWeight="bold"
                          letterSpacing={2}
                          textAlign="center"
                        >
                          {item.title}
                        </Box>
                      </Typography>
                    </Grid>

                    <Box position="absolute" bottom="50px" width="100%">
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      ></Grid>
                    </Box>
                  </div>
                  <GatsbyImage
                    image={item.obrazek.gatsbyImageData}
                    alt={item.obrazek.title}
                    style={{
                      gridArea: "1/1",
                      height: "100px",
                      zIndex: 1,
                    }}
                  />
                </div>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Training
